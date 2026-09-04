from pydantic import BaseModel


class RandomRoundResponse(BaseModel):
    id: int
    game_id: int
    country: str
    station_name: str
    stream_url: str