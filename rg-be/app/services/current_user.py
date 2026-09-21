from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.user import User
from app.services.auth import get_current_user


def get_current_db_user(
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):
    supabase_id = current_user.get("sub")

    if not supabase_id:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Supabase user ID missing from token"
        )

    user = (
        db.query(User)
        .filter(User.supabase_id == supabase_id)
        .first()
    )

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not registered in application"
        )

    return user