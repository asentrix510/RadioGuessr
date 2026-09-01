from pydantic import BaseModel


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