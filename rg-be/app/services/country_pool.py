import random


COUNTRY_POOL = [
    ("US", 10),
    ("GB", 8),
    ("DE", 8),
    ("FR", 7),
    ("CA", 6),
    ("AU", 6),
    ("JP", 5),
    ("BR", 5),
    ("IN", 5),
    ("ES", 5),
    ("IT", 5),
    ("NL", 4),
    ("SE", 4),
    ("NO", 4),
    ("FI", 4),
    ("DK", 4),
    ("PL", 4),
    ("MX", 4),
    ("AR", 3),
    ("CL", 3),
]


def get_random_country() -> str:
    countries = [country for country, weight in COUNTRY_POOL]
    weights = [weight for country, weight in COUNTRY_POOL]

    return random.choices(
        countries,
        weights=weights,
        k=1
    )[0]