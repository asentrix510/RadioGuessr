import random
import socket
import time
import httpx

RADIO_BROWSER_SERVER_CACHE = []
RADIO_BROWSER_SERVER_CACHE_TIME = 0

SERVER_CACHE_TTL = 3600  # 1 hour
RADIO_BROWSER_DISCOVERY_HOST = "all.api.radio-browser.info"

USER_AGENT = "RadioGuessr/1.0"


def discover_radio_browser_servers() -> list[str]:
    """
    Discover available Radio Browser API servers.

    Radio Browser provides a server list through the
    /json/servers endpoint. We use the returned server
    hostnames directly so HTTPS certificate validation
    works correctly.
    """
    global RADIO_BROWSER_SERVER_CACHE
    global RADIO_BROWSER_SERVER_CACHE_TIME

    current_time = time.time()

    if (
        RADIO_BROWSER_SERVER_CACHE
        and current_time - RADIO_BROWSER_SERVER_CACHE_TIME < SERVER_CACHE_TTL
    ):
        return RADIO_BROWSER_SERVER_CACHE

    discovery_url = (
        "https://all.api.radio-browser.info/json/servers"
    )

    try:
        response = httpx.get(
            discovery_url,
            timeout=10.0,
            headers={
                "User-Agent": USER_AGENT
            }
        )

        response.raise_for_status()

        server_data = response.json()

    except httpx.RequestError as error:
        raise RuntimeError(
            "Could not discover Radio Browser servers"
        ) from error

    servers = []

    for server in server_data:
        name = server.get("name")

        if name:
            servers.append(
                f"https://{name}"
            )

    # Remove duplicates
    servers = list(set(servers))

    # Randomize server order
    random.shuffle(servers)
    
    RADIO_BROWSER_SERVER_CACHE = servers
    RADIO_BROWSER_SERVER_CACHE_TIME = current_time

    return servers


def get_stations_from_server(
    base_url: str,
    country_code: str
):
    """
    Fetch stations for a country from one Radio Browser server.
    """

    url = (
        f"{base_url}"
        f"/json/stations/bycountrycodeexact/"
        f"{country_code}"
    )

    response = httpx.get(
        url,
        timeout=10.0,
        headers={
            "User-Agent": USER_AGENT
        }
    )

    response.raise_for_status()

    return response.json()


def get_stations_by_country(country_code: str):

    try:
        servers = discover_radio_browser_servers()

    except RuntimeError as error:

        print(
            f"Server discovery failed: {error}"
        )

        servers = [
            "https://de1.api.radio-browser.info"
        ]

    if not servers:
        raise RuntimeError(
            "No Radio Browser servers available"
        )

    last_error = None

    for server in servers:

        try:
            print(
                f"Trying Radio Browser server: {server}"
            )

            stations = get_stations_from_server(
                server,
                country_code
            )

            print(
                f"Radio Browser server succeeded: {server}"
            )

            return stations

        except httpx.ConnectError as error:

            print(
                f"Connection/SSL failure: {server}"
            )

            last_error = error
            continue

        except httpx.RequestError as error:

            print(
                f"Request failed: {server}"
            )

            last_error = error
            continue

        except httpx.HTTPStatusError as error:

            print(
                f"HTTP error "
                f"{error.response.status_code}: {server}"
            )

            last_error = error
            continue

    raise RuntimeError(
        "All Radio Browser servers failed"
    ) from last_error


def get_usable_stations(country_code: str):
    """
    Filter stations that have the information
    required by RadioGuessr.
    """

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


def is_stream_available(stream_url: str) -> bool:
    """
    Perform a lightweight availability check on a radio stream.

    We use streaming mode so we don't download an entire
    potentially infinite radio stream.
    """

    try:

        with httpx.stream(
            "GET",
            stream_url,
            timeout=5.0,
            follow_redirects=True,
            verify=False  # Keeps stream checking safe from external self-signed cert quirks
        ) as response:

            return response.status_code == 200

    except httpx.RequestError:

        return False


def get_random_station(country_code: str):
    """
    Select a random usable station whose stream is reachable.
    """

    stations = get_usable_stations(country_code)

    if not stations:
        raise ValueError(
            f"No usable stations found for country {country_code}"
        )

    random.shuffle(stations)

    max_attempts = min(5, len(stations))

    for station in stations[:max_attempts]:

        stream_url = station.get("url_resolved")

        print(
            f"Checking stream: {stream_url}"
        )

        if is_stream_available(stream_url):

            print(
                f"Working stream found: {stream_url}"
            )

            return {
                "name": station.get("name"),
                "country": station.get("country"),
                "country_code": station.get("countrycode"),
                "latitude": station.get("geo_lat"),
                "longitude": station.get("geo_long"),
                "stream_url": stream_url,
                "codec": station.get("codec"),
                "bitrate": station.get("bitrate"),
                "hls": station.get("hls"),
            }

    raise ValueError(
        f"No working streams found for country {country_code}"
    )