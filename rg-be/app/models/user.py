from datetime import datetime

from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        autoincrement=True
    )

    supabase_id: Mapped[str | None] = mapped_column(
        String(255),
        unique=True,
        nullable=True
    )

    username: Mapped[str] = mapped_column(
        String(50),
        nullable=False,
        unique=True
    )

    email: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
        unique=True
    )

    created_at: Mapped[datetime] = mapped_column(
        default=datetime.utcnow
    )