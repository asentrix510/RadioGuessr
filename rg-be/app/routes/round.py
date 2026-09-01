from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.round import Round
from app.schemas.round import RoundCreate, RoundResponse


router = APIRouter(
    prefix="/api/games",
    tags=["Rounds"]
)


@router.post(
    "/{game_id}/rounds",
    response_model=RoundResponse,
    status_code=status.HTTP_201_CREATED
)
def create_round(
    game_id: int,
    round_data: RoundCreate,
    db: Session = Depends(get_db)
):
    new_round = Round(
        game_id=game_id,
        country=round_data.country,
        station_name=round_data.station_name,
        latitude=round_data.latitude,
        longitude=round_data.longitude,
        score=0
    )

    db.add(new_round)
    db.commit()
    db.refresh(new_round)

    return new_round