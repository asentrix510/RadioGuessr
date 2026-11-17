export interface GeoCity {
  name: string
  country: string
  lat: number
  lng: number
  isCapital?: boolean
}

export interface GeoCountry {
  name: string
  code: string
  lat: number
  lng: number
  minLat: number
  maxLat: number
  minLng: number
  maxLng: number
}

// Major cities across all continents for navigation reference
export const MAJOR_CITIES: GeoCity[] = [
  // Europe
  { name: 'London', country: 'United Kingdom', lat: 51.5074, lng: -0.1278, isCapital: true },
  { name: 'Manchester', country: 'United Kingdom', lat: 53.4808, lng: -2.2426 },
  { name: 'Edinburgh', country: 'United Kingdom', lat: 55.9533, lng: -3.1883, isCapital: true },
  { name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522, isCapital: true },
  { name: 'Marseille', country: 'France', lat: 43.2965, lng: 5.3698 },
  { name: 'Lyon', country: 'France', lat: 45.764, lng: 4.8357 },
  { name: 'Berlin', country: 'Germany', lat: 52.52, lng: 13.405, isCapital: true },
  { name: 'Munich', country: 'Germany', lat: 48.1351, lng: 11.582 },
  { name: 'Frankfurt', country: 'Germany', lat: 50.1109, lng: 8.6821 },
  { name: 'Hamburg', country: 'Germany', lat: 53.5511, lng: 9.9937 },
  { name: 'Madrid', country: 'Spain', lat: 40.4168, lng: -3.7038, isCapital: true },
  { name: 'Barcelona', country: 'Spain', lat: 41.3851, lng: 2.1734 },
  { name: 'Rome', country: 'Italy', lat: 41.9028, lng: 12.4964, isCapital: true },
  { name: 'Milan', country: 'Italy', lat: 45.4642, lng: 9.19 },
  { name: 'Amsterdam', country: 'Netherlands', lat: 52.3676, lng: 4.9041, isCapital: true },
  { name: 'Brussels', country: 'Belgium', lat: 50.8503, lng: 4.3517, isCapital: true },
  { name: 'Vienna', country: 'Austria', lat: 48.2082, lng: 16.3738, isCapital: true },
  { name: 'Bern', country: 'Switzerland', lat: 46.948, lng: 7.4474, isCapital: true },
  { name: 'Zurich', country: 'Switzerland', lat: 47.3769, lng: 8.5417 },
  { name: 'Stockholm', country: 'Sweden', lat: 59.3293, lng: 18.0686, isCapital: true },
  { name: 'Oslo', country: 'Norway', lat: 59.9139, lng: 10.7522, isCapital: true },
  { name: 'Helsinki', country: 'Finland', lat: 60.1699, lng: 24.9384, isCapital: true },
  { name: 'Copenhagen', country: 'Denmark', lat: 55.6761, lng: 12.5683, isCapital: true },
  { name: 'Dublin', country: 'Ireland', lat: 53.3498, lng: -6.2603, isCapital: true },
  { name: 'Warsaw', country: 'Poland', lat: 52.2297, lng: 21.0122, isCapital: true },
  { name: 'Prague', country: 'Czechia', lat: 50.0755, lng: 14.4378, isCapital: true },
  { name: 'Budapest', country: 'Hungary', lat: 47.4979, lng: 19.0402, isCapital: true },
  { name: 'Athens', country: 'Greece', lat: 37.9838, lng: 23.7275, isCapital: true },
  { name: 'Lisbon', country: 'Portugal', lat: 38.7223, lng: -9.1393, isCapital: true },
  { name: 'Kyiv', country: 'Ukraine', lat: 50.4501, lng: 30.5234, isCapital: true },
  { name: 'Bucharest', country: 'Romania', lat: 44.4268, lng: 26.1025, isCapital: true },
  { name: 'Reykjavik', country: 'Iceland', lat: 64.1466, lng: -21.9426, isCapital: true },

  // North America
  { name: 'Washington, D.C.', country: 'United States', lat: 38.9072, lng: -77.0369, isCapital: true },
  { name: 'New York', country: 'United States', lat: 40.7128, lng: -74.006 },
  { name: 'Los Angeles', country: 'United States', lat: 34.0522, lng: -118.2437 },
  { name: 'Chicago', country: 'United States', lat: 41.8781, lng: -87.6298 },
  { name: 'Houston', country: 'United States', lat: 29.7604, lng: -95.3698 },
  { name: 'Miami', country: 'United States', lat: 25.7617, lng: -80.1918 },
  { name: 'San Francisco', country: 'United States', lat: 37.7749, lng: -122.4194 },
  { name: 'Seattle', country: 'United States', lat: 47.6062, lng: -122.3321 },
  { name: 'Denver', country: 'United States', lat: 39.7392, lng: -104.9903 },
  { name: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832 },
  { name: 'Ottawa', country: 'Canada', lat: 45.4215, lng: -75.6972, isCapital: true },
  { name: 'Vancouver', country: 'Canada', lat: 49.2827, lng: -123.1207 },
  { name: 'Montreal', country: 'Canada', lat: 45.5017, lng: -73.5673 },
  { name: 'Mexico City', country: 'Mexico', lat: 19.4326, lng: -99.1332, isCapital: true },
  { name: 'Guadalajara', country: 'Mexico', lat: 20.6597, lng: -103.3496 },
  { name: 'Monterrey', country: 'Mexico', lat: 25.6866, lng: -100.3161 },
  { name: 'Havana', country: 'Cuba', lat: 23.1136, lng: -82.3666, isCapital: true },
  { name: 'Panama City', country: 'Panama', lat: 8.9824, lng: -79.5199, isCapital: true },
  { name: 'San Jose', country: 'Costa Rica', lat: 9.9281, lng: -84.0907, isCapital: true },

  // South America
  { name: 'Brasília', country: 'Brazil', lat: -15.8267, lng: -47.9218, isCapital: true },
  { name: 'São Paulo', country: 'Brazil', lat: -23.5505, lng: -46.6333 },
  { name: 'Rio de Janeiro', country: 'Brazil', lat: -22.9068, lng: -43.1729 },
  { name: 'Salvador', country: 'Brazil', lat: -12.9777, lng: -38.5016 },
  { name: 'Buenos Aires', country: 'Argentina', lat: -34.6037, lng: -58.3816, isCapital: true },
  { name: 'Cordoba', country: 'Argentina', lat: -31.4201, lng: -64.1888 },
  { name: 'Santiago', country: 'Chile', lat: -33.4489, lng: -70.6693, isCapital: true },
  { name: 'Bogotá', country: 'Colombia', lat: 4.711, lng: -74.0721, isCapital: true },
  { name: 'Medellin', country: 'Colombia', lat: 6.2442, lng: -75.5812 },
  { name: 'Lima', country: 'Peru', lat: -12.0464, lng: -77.0428, isCapital: true },
  { name: 'Caracas', country: 'Venezuela', lat: 10.4806, lng: -66.9036, isCapital: true },
  { name: 'Quito', country: 'Ecuador', lat: -0.1807, lng: -78.4678, isCapital: true },
  { name: 'Montevideo', country: 'Uruguay', lat: -34.9011, lng: -56.1645, isCapital: true },
  { name: 'Asunción', country: 'Paraguay', lat: -25.2637, lng: -57.5759, isCapital: true },
  { name: 'La Paz', country: 'Bolivia', lat: -16.5, lng: -68.1193, isCapital: true },

  // Asia
  { name: 'New Delhi', country: 'India', lat: 28.6139, lng: 77.209, isCapital: true },
  { name: 'Mumbai', country: 'India', lat: 19.076, lng: 72.8777 },
  { name: 'Bangalore', country: 'India', lat: 12.9716, lng: 77.5946 },
  { name: 'Kolkata', country: 'India', lat: 22.5726, lng: 88.3639 },
  { name: 'Chennai', country: 'India', lat: 13.0827, lng: 80.2707 },
  { name: 'Hyderabad', country: 'India', lat: 17.385, lng: 78.4867 },
  { name: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503, isCapital: true },
  { name: 'Osaka', country: 'Japan', lat: 34.6937, lng: 135.5023 },
  { name: 'Kyoto', country: 'Japan', lat: 35.0116, lng: 135.7681 },
  { name: 'Beijing', country: 'China', lat: 39.9042, lng: 116.4074, isCapital: true },
  { name: 'Shanghai', country: 'China', lat: 31.2304, lng: 121.4737 },
  { name: 'Guangzhou', country: 'China', lat: 23.1291, lng: 113.2644 },
  { name: 'Hong Kong', country: 'Hong Kong', lat: 22.3193, lng: 114.1694 },
  { name: 'Seoul', country: 'South Korea', lat: 37.5665, lng: 126.978, isCapital: true },
  { name: 'Bangkok', country: 'Thailand', lat: 13.7563, lng: 100.5018, isCapital: true },
  { name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198, isCapital: true },
  { name: 'Jakarta', country: 'Indonesia', lat: -6.2088, lng: 106.8456, isCapital: true },
  { name: 'Kuala Lumpur', country: 'Malaysia', lat: 3.139, lng: 101.6869, isCapital: true },
  { name: 'Manila', country: 'Philippines', lat: 14.5995, lng: 120.9842, isCapital: true },
  { name: 'Hanoi', country: 'Vietnam', lat: 21.0285, lng: 105.8542, isCapital: true },
  { name: 'Ho Chi Minh City', country: 'Vietnam', lat: 10.8231, lng: 106.6297 },
  { name: 'Dhaka', country: 'Bangladesh', lat: 23.8103, lng: 90.4125, isCapital: true },
  { name: 'Karachi', country: 'Pakistan', lat: 24.8607, lng: 67.0011 },
  { name: 'Islamabad', country: 'Pakistan', lat: 33.6844, lng: 73.0479, isCapital: true },
  { name: 'Riyadh', country: 'Saudi Arabia', lat: 24.7136, lng: 46.6753, isCapital: true },
  { name: 'Dubai', country: 'United Arab Emirates', lat: 25.2048, lng: 55.2708 },
  { name: 'Doha', country: 'Qatar', lat: 25.2854, lng: 51.531, isCapital: true },
  { name: 'Tehran', country: 'Iran', lat: 35.6892, lng: 51.389, isCapital: true },
  { name: 'Baghdad', country: 'Iraq', lat: 33.3152, lng: 44.3661, isCapital: true },
  { name: 'Ankara', country: 'Turkey', lat: 39.9334, lng: 32.8597, isCapital: true },
  { name: 'Istanbul', country: 'Turkey', lat: 41.0082, lng: 28.9784 },
  { name: 'Tel Aviv', country: 'Israel', lat: 32.0853, lng: 34.7818 },
  { name: 'Taipei', country: 'Taiwan', lat: 25.033, lng: 121.5654, isCapital: true },
  { name: 'Tashkent', country: 'Uzbekistan', lat: 41.2995, lng: 69.2401, isCapital: true },
  { name: 'Almaty', country: 'Kazakhstan', lat: 43.222, lng: 76.8512 },

  // Africa
  { name: 'Cairo', country: 'Egypt', lat: 30.0444, lng: 31.2357, isCapital: true },
  { name: 'Alexandria', country: 'Egypt', lat: 31.2001, lng: 29.9187 },
  { name: 'Nairobi', country: 'Kenya', lat: -1.2921, lng: 36.8219, isCapital: true },
  { name: 'Lagos', country: 'Nigeria', lat: 6.5244, lng: 3.3792 },
  { name: 'Abuja', country: 'Nigeria', lat: 9.0765, lng: 7.3986, isCapital: true },
  { name: 'Johannesburg', country: 'South Africa', lat: -26.2041, lng: 28.0473 },
  { name: 'Cape Town', country: 'South Africa', lat: -33.9249, lng: 18.4241, isCapital: true },
  { name: 'Casablanca', country: 'Morocco', lat: 33.5731, lng: -7.5898 },
  { name: 'Rabat', country: 'Morocco', lat: 34.0209, lng: -6.8416, isCapital: true },
  { name: 'Algiers', country: 'Algeria', lat: 36.7538, lng: 3.0588, isCapital: true },
  { name: 'Tunis', country: 'Tunisia', lat: 36.8065, lng: 10.1815, isCapital: true },
  { name: 'Tripoli', country: 'Libya', lat: 32.8872, lng: 13.1913, isCapital: true },
  { name: 'Khartoum', country: 'Sudan', lat: 15.5007, lng: 32.5599, isCapital: true },
  { name: 'Addis Ababa', country: 'Ethiopia', lat: 9.03, lng: 38.74, isCapital: true },
  { name: 'Accra', country: 'Ghana', lat: 5.6037, lng: -0.187, isCapital: true },
  { name: 'Dakar', country: 'Senegal', lat: 14.7167, lng: -17.4677, isCapital: true },
  { name: 'Abidjan', country: 'Ivory Coast', lat: 5.36, lng: -4.0083 },
  { name: 'Kinshasa', country: 'DR Congo', lat: -4.4419, lng: 15.2663, isCapital: true },
  { name: 'Luanda', country: 'Angola', lat: -8.839, lng: 13.2894, isCapital: true },
  { name: 'Dar es Salaam', country: 'Tanzania', lat: -6.7924, lng: 39.2083 },
  { name: 'Kampala', country: 'Uganda', lat: 0.3476, lng: 32.5825, isCapital: true },
  { name: 'Antananarivo', country: 'Madagascar', lat: -18.8792, lng: 47.5079, isCapital: true },
  { name: 'Windhoek', country: 'Namibia', lat: -22.5609, lng: 17.0658, isCapital: true },
  { name: 'Gaborone', country: 'Botswana', lat: -24.6282, lng: 25.9231, isCapital: true },
  { name: 'Harare', country: 'Zimbabwe', lat: -17.8252, lng: 31.0335, isCapital: true },
  { name: 'Lusaka', country: 'Zambia', lat: -15.3875, lng: 28.3228, isCapital: true },
  { name: 'Maputo', country: 'Mozambique', lat: -25.9692, lng: 32.5732, isCapital: true },
  { name: 'Niamey', country: 'Niger', lat: 13.5116, lng: 2.1254, isCapital: true },
  { name: 'Bamako', country: 'Mali', lat: 12.6392, lng: -8.0029, isCapital: true },
  { name: 'N\'Djamena', country: 'Chad', lat: 12.1348, lng: 15.0557, isCapital: true },

  // Oceania
  { name: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093 },
  { name: 'Melbourne', country: 'Australia', lat: -37.8136, lng: 144.9631 },
  { name: 'Canberra', country: 'Australia', lat: -35.2809, lng: 149.13, isCapital: true },
  { name: 'Brisbane', country: 'Australia', lat: -27.4698, lng: 153.0251 },
  { name: 'Perth', country: 'Australia', lat: -31.9505, lng: 115.8605 },
  { name: 'Adelaide', country: 'Australia', lat: -34.9285, lng: 138.6007 },
  { name: 'Auckland', country: 'New Zealand', lat: -36.8485, lng: 174.7633 },
  { name: 'Wellington', country: 'New Zealand', lat: -41.2865, lng: 174.7762, isCapital: true },
  { name: 'Port Moresby', country: 'Papua New Guinea', lat: -9.4438, lng: 147.1803, isCapital: true },
  { name: 'Suva', country: 'Fiji', lat: -18.1248, lng: 178.4501, isCapital: true },
]

// Country Bounding Boxes for quick spatial indexing across the entire world
export const COUNTRIES: GeoCountry[] = [
  // North America
  { name: 'United States', code: 'US', lat: 39.8, lng: -98.5, minLat: 24.5, maxLat: 49.4, minLng: -125.0, maxLng: -66.9 },
  { name: 'Canada', code: 'CA', lat: 56.1, lng: -106.3, minLat: 41.7, maxLat: 83.1, minLng: -141.0, maxLng: -52.6 },
  { name: 'Mexico', code: 'MX', lat: 23.6, lng: -102.5, minLat: 14.5, maxLat: 32.7, minLng: -118.4, maxLng: -86.7 },
  { name: 'Cuba', code: 'CU', lat: 21.5, lng: -77.8, minLat: 19.8, maxLat: 23.3, minLng: -85.0, maxLng: -74.1 },
  { name: 'Guatemala', code: 'GT', lat: 15.8, lng: -90.2, minLat: 13.7, maxLat: 17.8, minLng: -92.2, maxLng: -88.2 },
  { name: 'Panama', code: 'PA', lat: 8.5, lng: -80.8, minLat: 7.2, maxLat: 9.6, minLng: -83.1, maxLng: -77.2 },
  { name: 'Costa Rica', code: 'CR', lat: 9.7, lng: -83.8, minLat: 8.0, maxLat: 11.2, minLng: -86.0, maxLng: -82.5 },

  // South America
  { name: 'Brazil', code: 'BR', lat: -14.2, lng: -51.9, minLat: -33.7, maxLat: 5.3, minLng: -73.9, maxLng: -34.8 },
  { name: 'Argentina', code: 'AR', lat: -38.4, lng: -63.6, minLat: -55.0, maxLat: -21.8, minLng: -73.6, maxLng: -53.6 },
  { name: 'Chile', code: 'CL', lat: -35.7, lng: -71.5, minLat: -56.0, maxLat: -17.5, minLng: -75.6, maxLng: -66.9 },
  { name: 'Colombia', code: 'CO', lat: 4.6, lng: -74.3, minLat: -4.2, maxLat: 12.5, minLng: -79.0, maxLng: -66.8 },
  { name: 'Peru', code: 'PE', lat: -9.2, lng: -75.0, minLat: -18.3, maxLat: -0.04, minLng: -81.3, maxLng: -68.6 },
  { name: 'Venezuela', code: 'VE', lat: 6.4, lng: -66.6, minLat: 0.6, maxLat: 12.2, minLng: -73.4, maxLng: -59.8 },
  { name: 'Ecuador', code: 'EC', lat: -1.8, lng: -78.2, minLat: -5.0, maxLat: 1.5, minLng: -81.1, maxLng: -75.2 },
  { name: 'Bolivia', code: 'BO', lat: -16.3, lng: -63.6, minLat: -22.9, maxLat: -9.7, minLng: -69.6, maxLng: -57.5 },
  { name: 'Paraguay', code: 'PY', lat: -23.4, lng: -58.4, minLat: -27.6, maxLat: -19.3, minLng: -62.6, maxLng: -54.2 },
  { name: 'Uruguay', code: 'UY', lat: -32.5, lng: -55.8, minLat: -35.0, maxLat: -30.1, minLng: -58.4, maxLng: -53.1 },

  // Europe
  { name: 'United Kingdom', code: 'GB', lat: 55.3, lng: -3.4, minLat: 49.9, maxLat: 60.9, minLng: -8.6, maxLng: 1.8 },
  { name: 'Ireland', code: 'IE', lat: 53.4, lng: -8.2, minLat: 51.4, maxLat: 55.4, minLng: -10.5, maxLng: -5.9 },
  { name: 'France', code: 'FR', lat: 46.2, lng: 2.2, minLat: 41.3, maxLat: 51.1, minLng: -5.1, maxLng: 9.6 },
  { name: 'Germany', code: 'DE', lat: 51.1, lng: 10.4, minLat: 47.3, maxLat: 55.1, minLng: 5.9, maxLng: 15.0 },
  { name: 'Spain', code: 'ES', lat: 40.4, lng: -3.7, minLat: 36.0, maxLat: 43.8, minLng: -9.3, maxLng: 3.3 },
  { name: 'Portugal', code: 'PT', lat: 39.4, lng: -8.2, minLat: 36.9, maxLat: 42.2, minLng: -9.5, maxLng: -6.2 },
  { name: 'Italy', code: 'IT', lat: 41.8, lng: 12.5, minLat: 36.6, maxLat: 47.1, minLng: 6.6, maxLng: 18.5 },
  { name: 'Switzerland', code: 'CH', lat: 46.8, lng: 8.2, minLat: 45.8, maxLat: 47.8, minLng: 5.9, maxLng: 10.5 },
  { name: 'Austria', code: 'AT', lat: 47.5, lng: 14.5, minLat: 46.4, maxLat: 49.0, minLng: 9.5, maxLng: 17.2 },
  { name: 'Netherlands', code: 'NL', lat: 52.1, lng: 5.3, minLat: 50.7, maxLat: 53.6, minLng: 3.3, maxLng: 7.2 },
  { name: 'Belgium', code: 'BE', lat: 50.5, lng: 4.5, minLat: 49.5, maxLat: 51.5, minLng: 2.5, maxLng: 6.4 },
  { name: 'Sweden', code: 'SE', lat: 60.1, lng: 18.6, minLat: 55.3, maxLat: 69.1, minLng: 11.0, maxLng: 24.2 },
  { name: 'Norway', code: 'NO', lat: 60.4, lng: 8.4, minLat: 57.9, maxLat: 71.2, minLng: 4.5, maxLng: 31.1 },
  { name: 'Finland', code: 'FI', lat: 61.9, lng: 25.7, minLat: 59.8, maxLat: 70.1, minLng: 20.5, maxLng: 31.6 },
  { name: 'Denmark', code: 'DK', lat: 56.2, lng: 9.5, minLat: 54.5, maxLat: 57.8, minLng: 8.0, maxLng: 12.7 },
  { name: 'Poland', code: 'PL', lat: 51.9, lng: 19.1, minLat: 49.0, maxLat: 54.8, minLng: 14.1, maxLng: 24.1 },
  { name: 'Czechia', code: 'CZ', lat: 49.8, lng: 15.5, minLat: 48.5, maxLat: 51.1, minLng: 12.1, maxLng: 18.9 },
  { name: 'Hungary', code: 'HU', lat: 47.2, lng: 19.5, minLat: 45.7, maxLat: 48.6, minLng: 16.1, maxLng: 22.9 },
  { name: 'Romania', code: 'RO', lat: 45.9, lng: 25.0, minLat: 43.6, maxLat: 48.3, minLng: 20.3, maxLng: 29.7 },
  { name: 'Greece', code: 'GR', lat: 39.0, lng: 22.0, minLat: 34.8, maxLat: 41.7, minLng: 19.4, maxLng: 29.6 },
  { name: 'Ukraine', code: 'UA', lat: 48.4, lng: 31.2, minLat: 44.4, maxLat: 52.4, minLng: 22.1, maxLng: 40.2 },
  { name: 'Russia', code: 'RU', lat: 61.5, lng: 105.3, minLat: 41.2, maxLat: 81.8, minLng: 19.6, maxLng: 180.0 },

  // Asia
  { name: 'India', code: 'IN', lat: 20.5, lng: 78.9, minLat: 8.0, maxLat: 37.1, minLng: 68.1, maxLng: 97.4 },
  { name: 'Pakistan', code: 'PK', lat: 30.4, lng: 69.3, minLat: 23.7, maxLat: 37.1, minLng: 60.9, maxLng: 77.8 },
  { name: 'Bangladesh', code: 'BD', lat: 23.7, lng: 90.3, minLat: 20.6, maxLat: 26.6, minLng: 88.0, maxLng: 92.7 },
  { name: 'Japan', code: 'JP', lat: 36.2, lng: 138.2, minLat: 24.2, maxLat: 45.5, minLng: 122.9, maxLng: 153.9 },
  { name: 'China', code: 'CN', lat: 35.8, lng: 104.1, minLat: 18.2, maxLat: 53.6, minLng: 73.6, maxLng: 135.0 },
  { name: 'South Korea', code: 'KR', lat: 35.9, lng: 127.7, minLat: 33.1, maxLat: 38.6, minLng: 124.6, maxLng: 130.9 },
  { name: 'Taiwan', code: 'TW', lat: 23.7, lng: 121.0, minLat: 21.9, maxLat: 25.3, minLng: 120.0, maxLng: 122.0 },
  { name: 'Thailand', code: 'TH', lat: 15.9, lng: 100.9, minLat: 5.6, maxLat: 20.5, minLng: 97.3, maxLng: 105.6 },
  { name: 'Vietnam', code: 'VN', lat: 14.0, lng: 108.3, minLat: 8.5, maxLat: 23.4, minLng: 102.1, maxLng: 109.5 },
  { name: 'Indonesia', code: 'ID', lat: -0.7, lng: 113.9, minLat: -11.0, maxLat: 6.1, minLng: 95.0, maxLng: 141.0 },
  { name: 'Malaysia', code: 'MY', lat: 4.2, lng: 101.9, minLat: 0.8, maxLat: 7.4, minLng: 99.6, maxLng: 119.3 },
  { name: 'Philippines', code: 'PH', lat: 12.9, lng: 121.8, minLat: 4.6, maxLat: 21.1, minLng: 116.9, maxLng: 126.6 },
  { name: 'Turkey', code: 'TR', lat: 38.9, lng: 35.2, minLat: 35.8, maxLat: 42.1, minLng: 25.7, maxLng: 44.8 },
  { name: 'Saudi Arabia', code: 'SA', lat: 23.8, lng: 45.0, minLat: 16.4, maxLat: 32.2, minLng: 36.5, maxLng: 55.7 },
  { name: 'United Arab Emirates', code: 'AE', lat: 23.4, lng: 53.8, minLat: 22.6, maxLat: 26.1, minLng: 51.6, maxLng: 56.4 },
  { name: 'Iran', code: 'IR', lat: 32.4, lng: 53.7, minLat: 25.1, maxLat: 39.8, minLng: 44.0, maxLng: 63.3 },
  { name: 'Iraq', code: 'IQ', lat: 33.2, lng: 43.7, minLat: 29.1, maxLat: 37.4, minLng: 38.8, maxLng: 48.6 },
  { name: 'Israel', code: 'IL', lat: 31.0, lng: 34.8, minLat: 29.5, maxLat: 33.3, minLng: 34.3, maxLng: 35.9 },
  { name: 'Kazakhstan', code: 'KZ', lat: 48.0, lng: 66.9, minLat: 40.6, maxLat: 55.4, minLng: 46.5, maxLng: 87.3 },

  // Africa - Comprehensive Coverage
  { name: 'Egypt', code: 'EG', lat: 26.8, lng: 30.8, minLat: 22.0, maxLat: 31.7, minLng: 24.7, maxLng: 36.9 },
  { name: 'Libya', code: 'LY', lat: 26.3, lng: 17.2, minLat: 19.5, maxLat: 33.2, minLng: 9.4, maxLng: 25.2 },
  { name: 'Tunisia', code: 'TN', lat: 33.8, lng: 9.5, minLat: 30.2, maxLat: 37.6, minLng: 7.5, maxLng: 11.6 },
  { name: 'Algeria', code: 'DZ', lat: 28.0, lng: 1.6, minLat: 18.9, maxLat: 37.1, minLng: -8.7, maxLng: 12.0 },
  { name: 'Morocco', code: 'MA', lat: 31.8, lng: -7.1, minLat: 27.7, maxLat: 35.9, minLng: -13.2, maxLng: -1.0 },
  { name: 'Mauritania', code: 'MR', lat: 21.0, lng: -10.9, minLat: 14.7, maxLat: 27.3, minLng: -17.1, maxLng: -4.8 },
  { name: 'Mali', code: 'ML', lat: 17.6, lng: -3.9, minLat: 10.1, maxLat: 25.0, minLng: -12.2, maxLng: 4.2 },
  { name: 'Niger', code: 'NE', lat: 17.6, lng: 8.1, minLat: 11.7, maxLat: 23.5, minLng: 0.2, maxLng: 16.0 },
  { name: 'Chad', code: 'TD', lat: 15.4, lng: 18.7, minLat: 7.4, maxLat: 23.5, minLng: 13.5, maxLng: 24.0 },
  { name: 'Sudan', code: 'SD', lat: 12.8, lng: 30.2, minLat: 8.7, maxLat: 22.2, minLng: 21.8, maxLng: 38.6 },
  { name: 'Senegal', code: 'SN', lat: 14.5, lng: -14.4, minLat: 12.3, maxLat: 16.7, minLng: -17.5, maxLng: -11.3 },
  { name: 'Guinea', code: 'GN', lat: 9.9, lng: -9.7, minLat: 7.2, maxLat: 12.7, minLng: -15.1, maxLng: -7.8 },
  { name: 'Ivory Coast', code: 'CI', lat: 7.5, lng: -5.5, minLat: 4.3, maxLat: 10.7, minLng: -8.6, maxLng: -2.5 },
  { name: 'Ghana', code: 'GH', lat: 7.9, lng: -1.0, minLat: 4.7, maxLat: 11.2, minLng: -3.3, maxLng: 1.2 },
  { name: 'Nigeria', code: 'NG', lat: 9.0, lng: 8.6, minLat: 4.3, maxLat: 13.9, minLng: 2.7, maxLng: 14.7 },
  { name: 'Cameroon', code: 'CM', lat: 7.3, lng: 12.3, minLat: 1.7, maxLat: 13.1, minLng: 8.5, maxLng: 16.2 },
  { name: 'Central African Republic', code: 'CF', lat: 6.6, lng: 20.9, minLat: 2.2, maxLat: 11.0, minLng: 14.4, maxLng: 27.5 },
  { name: 'Ethiopia', code: 'ET', lat: 9.1, lng: 40.5, minLat: 3.4, maxLat: 14.9, minLng: 33.0, maxLng: 48.0 },
  { name: 'Somalia', code: 'SO', lat: 5.1, lng: 46.2, minLat: -1.7, maxLat: 12.0, minLng: 41.0, maxLng: 51.4 },
  { name: 'Kenya', code: 'KE', lat: -0.02, lng: 37.9, minLat: -4.7, maxLat: 5.0, minLng: 33.9, maxLng: 41.9 },
  { name: 'Uganda', code: 'UG', lat: 1.3, lng: 32.3, minLat: -1.5, maxLat: 4.2, minLng: 29.5, maxLng: 35.0 },
  { name: 'Tanzania', code: 'TZ', lat: -6.4, lng: 34.9, minLat: -11.7, maxLat: -1.0, minLng: 29.3, maxLng: 40.4 },
  { name: 'DR Congo', code: 'CD', lat: -4.0, lng: 21.7, minLat: -13.5, maxLat: 5.4, minLng: 12.2, maxLng: 31.3 },
  { name: 'Angola', code: 'AO', lat: -11.2, lng: 17.8, minLat: -18.0, maxLat: -4.4, minLng: 11.7, maxLng: 24.1 },
  { name: 'Zambia', code: 'ZM', lat: -13.1, lng: 27.8, minLat: -18.1, maxLat: -8.2, minLng: 22.0, maxLng: 33.7 },
  { name: 'Zimbabwe', code: 'ZW', lat: -19.0, lng: 29.1, minLat: -22.4, maxLat: -15.6, minLng: 25.2, maxLng: 33.1 },
  { name: 'Mozambique', code: 'MZ', lat: -18.6, lng: 35.5, minLat: -26.9, maxLat: -10.5, minLng: 30.2, maxLng: 40.8 },
  { name: 'Namibia', code: 'NA', lat: -22.9, lng: 18.5, minLat: -29.0, maxLat: -16.9, minLng: 11.7, maxLng: 25.3 },
  { name: 'Botswana', code: 'BW', lat: -22.3, lng: 24.7, minLat: -26.9, maxLat: -17.8, minLng: 20.0, maxLng: 29.4 },
  { name: 'South Africa', code: 'ZA', lat: -30.5, lng: 22.9, minLat: -34.8, maxLat: -22.1, minLng: 16.5, maxLng: 32.9 },
  { name: 'Madagascar', code: 'MG', lat: -18.7, lng: 46.8, minLat: -25.6, maxLat: -11.9, minLng: 43.2, maxLng: 50.5 },

  // Oceania
  { name: 'Australia', code: 'AU', lat: -25.2, lng: 133.7, minLat: -43.6, maxLat: -10.0, minLng: 113.3, maxLng: 153.6 },
  { name: 'New Zealand', code: 'NZ', lat: -40.9, lng: 174.8, minLat: -47.3, maxLat: -34.4, minLng: 166.4, maxLng: 178.6 },
  { name: 'Papua New Guinea', code: 'PG', lat: -6.3, lng: 143.9, minLat: -11.7, maxLat: -0.9, minLng: 140.8, maxLng: 156.0 },
]

// Calculate great circle distance in km between two coordinates
export function getDistanceKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

// Find nearest country and city given (lat, lng)
export function identifyLocation(lat: number, lng: number): {
  country?: string
  city?: string
  distanceToCityKm?: number
  label: string
} {
  // Normalize lng to [-180, 180]
  let normLng = lng
  while (normLng > 180) normLng -= 360
  while (normLng < -180) normLng += 360

  // 1. Check for closest known city
  let closestCity: GeoCity | null = null
  let minCityDist = Infinity

  for (const city of MAJOR_CITIES) {
    const dist = getDistanceKm(lat, normLng, city.lat, city.lng)
    if (dist < minCityDist) {
      minCityDist = dist
      closestCity = city
    }
  }

  // 2. Check for matching country bounding box
  let matchedCountry: GeoCountry | null = null
  for (const c of COUNTRIES) {
    if (lat >= c.minLat && lat <= c.maxLat && normLng >= c.minLng && normLng <= c.maxLng) {
      matchedCountry = c
      break
    }
  }

  // If very close to a known city (within 400km)
  if (closestCity && minCityDist <= 400) {
    return {
      country: closestCity.country,
      city: closestCity.name,
      distanceToCityKm: Math.round(minCityDist),
      label: `${closestCity.name}, ${closestCity.country}`,
    }
  }

  // If inside a known country bounding box
  if (matchedCountry) {
    if (closestCity && minCityDist <= 1200) {
      return {
        country: matchedCountry.name,
        city: closestCity.name,
        distanceToCityKm: Math.round(minCityDist),
        label: `${matchedCountry.name} (near ${closestCity.name})`,
      }
    }
    return {
      country: matchedCountry.name,
      label: matchedCountry.name,
    }
  }

  // If closest city is within 900km, give region reference
  if (closestCity && minCityDist <= 900) {
    return {
      country: closestCity.country,
      city: closestCity.name,
      distanceToCityKm: Math.round(minCityDist),
      label: `Near ${closestCity.name}, ${closestCity.country}`,
    }
  }

  // Polar Oceans
  if (lat > 68) return { label: 'Arctic Ocean' }
  if (lat < -58) return { label: 'Southern Ocean' }

  // Atlantic Ocean (Strict water corridors)
  if (normLng >= -60 && normLng <= -18 && lat >= 15 && lat <= 58) {
    return { label: 'North Atlantic Ocean' }
  }
  if (normLng >= -40 && normLng <= 10 && lat >= -50 && lat < -5) {
    return { label: 'South Atlantic Ocean' }
  }

  // Indian Ocean
  if (normLng >= 45 && normLng <= 105 && lat >= -50 && lat <= -2) {
    return { label: 'Indian Ocean' }
  }
  if (normLng >= 60 && normLng <= 92 && lat > -2 && lat <= 22) {
    // Arabian Sea / Bay of Bengal
    return { label: 'Northern Indian Ocean' }
  }

  // Pacific Ocean
  if ((normLng < -85 && normLng >= -180) || (normLng > 125 && normLng <= 180)) {
    return { label: lat > 0 ? 'North Pacific Ocean' : 'South Pacific Ocean' }
  }

  // Fallback
  return { label: 'International Waters / Territory' }
}
