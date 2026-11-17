const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api'

type ApiOptions = RequestInit

export async function apiRequest<T>(
  endpoint: string,
  options: ApiOptions = {},
): Promise<T> {
  const headers = new Headers(options.headers)

  if (options.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }

  // Attach auth token if available
  const token = localStorage.getItem('radioguessr_token')
  if (token && !headers.has('Authorization')) {
    headers.set('Authorization', `Bearer ${token}`)
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => null)
    throw new Error(
      errorData?.detail || `API Error: ${response.status}`,
    )
  }

  if (response.status === 204) {
    return undefined as T
  }

  return response.json() as Promise<T>
}

// Backend Integration Methods according to plan.md
export interface ApiGameResponse {
  id: number
  user_id: number
  score: number
  started_at: string
  completed_at: string | null
}

export interface ApiRandomRoundResponse {
  id: number
  game_id: number
  country: string
  station_name: string
  stream_url: string
}

export interface ApiGuessResponse {
  round_id: number
  guess_latitude: number
  guess_longitude: number
  distance_km: number
  score: number
}

export async function checkBackendHealth(): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE_URL}/health`, { signal: AbortSignal.timeout(2000) })
    return res.ok
  } catch {
    return false
  }
}

export async function createGameApi(): Promise<ApiGameResponse> {
  return apiRequest<ApiGameResponse>('/games/', {
    method: 'POST',
  })
}

export async function getGamesApi(): Promise<ApiGameResponse[]> {
  return apiRequest<ApiGameResponse[]>('/games/')
}

export async function createRandomRoundApi(gameId: number): Promise<ApiRandomRoundResponse> {
  return apiRequest<ApiRandomRoundResponse>(`/games/${gameId}/rounds/random`, {
    method: 'POST',
  })
}

export async function submitGuessApi(
  roundId: number,
  guessLatitude: number,
  guessLongitude: number,
): Promise<ApiGuessResponse> {
  return apiRequest<ApiGuessResponse>(`/rounds/${roundId}/guess`, {
    method: 'POST',
    body: JSON.stringify({
      guess_latitude: guessLatitude,
      guess_longitude: guessLongitude,
    }),
  })
}
