from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.round import Round
from app.schemas.round import RoundCreate, RoundResponse
from app.schemas.guess import GuessCreate, GuessResponse
from app.services.scoring import (
    calculate_distance_km,
    calculate_score
)

from app.database.dependencies import get_db
from app.models.game import Game
from app.models.round import Round
from app.schemas.random_round import RandomRoundResponse
from app.services.radio_browser import get_random_station
from app.services.country_pool import get_random_country

router = APIRouter(
    prefix="/api",
    tags=["Rounds"]
)


@router.post(
    "/games/{game_id}/rounds",
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


@router.get(
    "/games/{game_id}/rounds",
    response_model=list[RoundResponse]
)
def get_rounds(
    game_id: int,
    db: Session = Depends(get_db)
):
    rounds = (
        db.query(Round)
        .filter(Round.game_id == game_id)
        .all()
    )

    return rounds


@router.post(
    "/rounds/{round_id}/guess",
    response_model=GuessResponse
)
def submit_guess(
    round_id: int,
    guess_data: GuessCreate,
    db: Session = Depends(get_db)
):
    round = (
        db.query(Round)
        .filter(Round.id == round_id)
        .first()
    )

    if round is None:
        raise HTTPException(
            status_code=404,
            detail="Round not found"
        )

    distance = calculate_distance_km(
        round.latitude,
        round.longitude,
        guess_data.guess_latitude,
        guess_data.guess_longitude
    )
    score = calculate_score(distance)

    round.guess_latitude = guess_data.guess_latitude
    round.guess_longitude = guess_data.guess_longitude
    round.distance_km = distance
    round.score = score
    

    db.commit()
    db.refresh(round)

    return {
        "round_id": round.id,
        "guess_latitude": round.guess_latitude,
        "guess_longitude": round.guess_longitude,
        "distance_km": round.distance_km,
        "score": round.score
    }
@router.post(
    "/games/{game_id}/rounds/random",
    response_model=RandomRoundResponse,
    status_code=status.HTTP_201_CREATED
)
def create_random_round(
    game_id: int,
    db: Session = Depends(get_db)
):
    # 1. Check whether the game exists
    game = (
        db.query(Game)
        .filter(Game.id == game_id)
        .first()
    )

    if game is None:
        raise HTTPException(
            status_code=404,
            detail="Game not found"
        )
    max_attempts = 5
    station = None

    for attempt in range(max_attempts):
        country = get_random_country()

        try:
            station = get_random_station(country)
            break
        except ValueError:
            continue

    if station is None:
        raise HTTPException(
            status_code=503,
            detail="Could not find a usable radio station"
        )
    # 3. Create the round
    new_round = Round(
        game_id=game_id,
        country=station["country"],
        station_name=station["name"],
        latitude=station["latitude"],
        longitude=station["longitude"],
        score=0
    )

    db.add(new_round)
    db.commit()
    db.refresh(new_round)

    # 4. Return only information the player needs
    return {
        "id": new_round.id,
        "game_id": new_round.game_id,
        "country": new_round.country,
        "station_name": new_round.station_name,
        "stream_url": station["stream_url"]
    }