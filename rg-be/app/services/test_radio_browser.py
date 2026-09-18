from app.services.radio_browser import get_random_station
from app.services.country_pool import get_random_country

country = get_random_country()

print(f"Selected country: {country}")

station = get_random_station(country)

print("\nStation:")
print(station)