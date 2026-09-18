from app.services.country_pool import get_random_country


for _ in range(20):
    print(get_random_country())