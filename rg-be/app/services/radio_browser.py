import random

import httpx


RADIO_BROWSER_BASE_URL = "https://de1.api.radio-browser.info"


def get_stations_by_country(country_code: str):
    url = (
        f"{RADIO_BROWSER_BASE_URL}"
        f"/json/stations/bycountrycodeexact/{country_code}"
    )

    response = httpx.get(
        url,
        timeout=10.0
    )

    response.raise_for_status()

    return response.json()


def get_usable_stations(country_code: str):
    stations = get_stations_by_country(country_code)

    usable_stations = [
        station
        for station in stations
        if station.get("geo_lat") is not None
        and station.get("geo_long") is not None
        and station.get("url_resolved")
        and station.get("lastcheckok") == 1
    ]

    return usable_stations


def get_random_station(country_code: str):
    stations = get_usable_stations(country_code)

    if not stations:
        raise ValueError(
            f"No usable stations found for country {country_code}"
        )

    station = random.choice(stations)

    return {
        "name": station.get("name"),
        "country": station.get("country"),
        "country_code": station.get("countrycode"),
        "latitude": station.get("geo_lat"),
        "longitude": station.get("geo_long"),
        "stream_url": station.get("url_resolved"),
        "codec": station.get("codec"),
        "bitrate": station.get("bitrate"),
        "hls": station.get("hls"),
    }