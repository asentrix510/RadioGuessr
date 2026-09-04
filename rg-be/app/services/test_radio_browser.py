from app.services.radio_browser import get_random_station


station = get_random_station("JP")

print("\nRandom station:")
print(f"Name: {station['name']}")
print(f"Country: {station['country']}")
print(f"Country code: {station['country_code']}")
print(f"Coordinates: {station['latitude']}, {station['longitude']}")
print(f"Stream: {station['stream_url']}")
print(f"Codec: {station['codec']}")
print(f"Bitrate: {station['bitrate']}")
print(f"HLS: {station['hls']}")