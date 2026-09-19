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

    # Europe
    ("AT", 3),
    ("BE", 3),
    ("CH", 3),
    ("CZ", 3),
    ("PT", 3),
    ("GR", 3),
    ("IE", 3),
    ("IS", 2),
    ("RO", 3),
    ("HU", 3),
    ("BG", 2),
    ("HR", 2),
    ("SK", 2),
    ("SI", 2),
    ("RS", 2),
    ("BA", 2),
    ("UA", 2),
    ("LT", 2),
    ("LV", 2),
    ("EE", 2),
    ("LU", 1),
    ("MT", 1),
    ("CY", 1),

    # Asia
    ("KR", 4),
    ("CN", 3),
    ("TW", 3),
    ("HK", 2),
    ("SG", 2),
    ("MY", 3),
    ("TH", 3),
    ("ID", 3),
    ("PH", 3),
    ("VN", 2),
    ("PK", 2),
    ("BD", 2),
    ("LK", 2),
    ("NP", 2),
    ("AE", 2),
    ("SA", 2),
    ("IL", 2),
    ("TR", 3),
    ("KZ", 2),
    ("UZ", 1),
    ("MN", 1),
    ("GE", 2),
    ("AM", 1),
    ("AZ", 1),

    # North/Central America + Caribbean
    ("CR", 2),
    ("PA", 2),
    ("GT", 2),
    ("DO", 2),
    ("JM", 1),
    ("TT", 1),
    ("CU", 1),
    ("HN", 1),
    ("SV", 1),
    ("NI", 1),
    ("BZ", 1),

    # South America
    ("CO", 3),
    ("PE", 2),
    ("EC", 2),
    ("UY", 2),
    ("PY", 1),
    ("BO", 1),
    ("VE", 1),

    # Africa
    ("ZA", 3),
    ("NG", 2),
    ("KE", 2),
    ("GH", 2),
    ("EG", 2),
    ("MA", 2),
    ("TN", 1),
    ("DZ", 1),
    ("UG", 1),
    ("TZ", 1),
    ("RW", 1),
    ("ET", 1),
    ("ZM", 1),
    ("ZW", 1),
    ("BW", 1),
    ("NA", 1),
    ("MU", 1),

    # Oceania / Pacific
    ("NZ", 3),
    ("FJ", 1),
    ("PG", 1),
    ("WS", 1),
    ("TO", 1),
]


def get_random_country() -> str:
    countries = [
        country
        for country, weight in COUNTRY_POOL
    ]

    weights = [
        weight
        for country, weight in COUNTRY_POOL
    ]

    return random.choices(
        countries,
        weights=weights,
        k=1
    )[0]