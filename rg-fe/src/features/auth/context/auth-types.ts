export interface UserProfile {
  id: number | string
  username: string
  email: string
  isGuest: boolean
}

export interface AuthContextType {
  user: UserProfile
  token: string | null
  login: (email: string, password?: string) => Promise<void>
  register: (username: string, email: string, password?: string) => Promise<void>
  loginAsGuest: () => void
  logout: () => void
}
