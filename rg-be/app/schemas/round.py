from pydantic import BaseModel
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.game import Game
from app.models.round import Round
from app.schemas.random_round import RandomRoundResponse
from app.services.radio_browser import get_random_station

class RoundCreate(BaseModel):
    country: str
    station_name: str
    latitude: float
    longitude: float


class RoundResponse(BaseModel):
    id: int
    game_id: int

    country: str
    station_name: str

    latitude: float
    longitude: float

    guess_latitude: float | None = None
    guess_longitude: float | None = None

    distance_km: float | None = None
    score: int

    class Config:
        from_attributes = True