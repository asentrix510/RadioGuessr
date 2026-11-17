
export interface Game {
  id: number
  user_id: number
  score: number
  started_at: string
  completed_at: string | null
}

export type GameMode = 'classic' | 'country'

export type GameStatus = 'in_progress' | 'completed'
export interface GameConfig {
  mode: GameMode
  totalRounds: number
  country?: string
  region?: string
}