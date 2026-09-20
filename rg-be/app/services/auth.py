import jwt
import httpx

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

from app.core.config import settings


security = HTTPBearer()


def get_supabase_jwks():
    try:
        response = httpx.get(
            settings.supabase_jwks_url,
            timeout=10.0
        )

        response.raise_for_status()

        return response.json()

    except httpx.RequestError as error:
        print(f"JWKS request failed: {error}")

        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Could not connect to Supabase authentication service"
        )


def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security)
):
    token = credentials.credentials

    try:
        # --------------------------------
        # 1. Read JWT header
        # --------------------------------

        header = jwt.get_unverified_header(token)

        algorithm = header.get("alg")
        key_id = header.get("kid")

        print("JWT algorithm:", algorithm)
        print("JWT key ID:", key_id)

        if algorithm != "ES256":
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Unsupported JWT algorithm"
            )

        if not key_id:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="JWT key ID missing"
            )

        # --------------------------------
        # 2. Get Supabase public keys
        # --------------------------------

        jwks = get_supabase_jwks()

        # --------------------------------
        # 3. Find matching key
        # --------------------------------

        matching_key = None

        for jwk in jwks.get("keys", []):
            if jwk.get("kid") == key_id:
                matching_key = jwk
                break

        if matching_key is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Signing key not found"
            )

        print("Matching key found")
        print("Key type:", matching_key.get("kty"))
        print("Key algorithm:", matching_key.get("alg"))

        # --------------------------------
        # 4. Convert EC JWK → public key
        # --------------------------------

        if matching_key.get("kty") != "EC":
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Unsupported signing key type"
            )

        key = jwt.algorithms.ECAlgorithm.from_jwk(matching_key)

        # --------------------------------
        # 5. Verify JWT
        # --------------------------------

        payload = jwt.decode(
            token,
            key,
            algorithms=["ES256"],
            audience="authenticated",
            issuer=f"{settings.supabase_url}/auth/v1"
        )

        print("JWT verification successful")

        return payload

    except jwt.InvalidTokenError as error:
        print(f"JWT verification failed: {error}")

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired authentication token"
        )