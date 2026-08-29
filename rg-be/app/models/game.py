from datetime import datetime

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base


class Game(Base):
    __tablename__ = "games"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        autoincrement=True
    )

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False
    )

    score: Mapped[int] = mapped_column(
        default=0,
        nullable=False
    )

    started_at: Mapped[datetime] = mapped_column(
        default=datetime.utcnow
    )

    completed_at: Mapped[datetime | None] = mapped_column(
        nullable=True
    )