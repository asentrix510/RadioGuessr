import { createContext } from 'react'
import type { UserProfile, AuthContextType } from './auth-types'

export const GUEST_USER: UserProfile = {
  id: 'guest',
  username: 'GUEST_OPERATOR',
  email: 'guest@radioguessr.local',
  isGuest: true,
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
