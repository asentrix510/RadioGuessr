from sqlalchemy import Float, ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base


class Round(Base):
    __tablename__ = "rounds"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        autoincrement=True
    )

    game_id: Mapped[int] = mapped_column(
        ForeignKey("games.id"),
        nullable=False
    )

    country: Mapped[str] = mapped_column(
        String(100),
        nullable=False
    )

    station_name: Mapped[str] = mapped_column(
        String(255),
        nullable=False
    )

    latitude: Mapped[float] = mapped_column(
        Float,
        nullable=False
    )

    longitude: Mapped[float] = mapped_column(
        Float,
        nullable=False
    )

    guess_latitude: Mapped[float | None] = mapped_column(
        Float,
        nullable=True
    )

    guess_longitude: Mapped[float | None] = mapped_column(
        Float,
        nullable=True
    )

    distance_km: Mapped[float | None] = mapped_column(
        Float,
        nullable=True
    )

    score: Mapped[int] = mapped_column(
        default=0,
        nullable=False
    )