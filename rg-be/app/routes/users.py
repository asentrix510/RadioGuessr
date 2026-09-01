from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.user import User
from app.schemas.user import UserCreate, UserResponse


router = APIRouter(
    prefix="/api/users",
    tags=["Users"]
)


@router.post(
    "/",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED
)
def create_user(
    user_data: UserCreate,
    db: Session = Depends(get_db)
):
    new_user = User(
        username=user_data.username,
        email=user_data.email
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user