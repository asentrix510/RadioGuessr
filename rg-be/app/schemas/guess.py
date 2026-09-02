from pydantic import BaseModel


class GuessCreate(BaseModel):
    guess_latitude: float
    guess_longitude: float


class GuessResponse(BaseModel):
    round_id: int
    guess_latitude: float
    guess_longitude: float
    distance_km: float
    score: int