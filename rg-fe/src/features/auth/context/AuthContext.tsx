import { useState, useEffect, type ReactNode } from 'react'
import type { UserProfile } from './auth-types'
import { AuthContext, GUEST_USER } from './auth-context-base'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('radioguessr_user')
      return saved ? JSON.parse(saved) : GUEST_USER
    } catch {
      return GUEST_USER
    }
  })

  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('radioguessr_token') || null
  })

  useEffect(() => {
    try {
      localStorage.setItem('radioguessr_user', JSON.stringify(user))
      if (token) {
        localStorage.setItem('radioguessr_token', token)
      } else {
        localStorage.removeItem('radioguessr_token')
      }
    } catch {
      // Storage restricted
    }
  }, [user, token])

  const login = async (email: string) => {
    const username = email.split('@')[0]
    const authenticatedUser: UserProfile = {
      id: Date.now(),
      username: username.toUpperCase(),
      email,
      isGuest: false,
    }
    const mockToken = `rg_jwt_${Date.now()}`
    setUser(authenticatedUser)
    setToken(mockToken)
  }

  const register = async (username: string, email: string) => {
    const newUser: UserProfile = {
      id: Date.now(),
      username: username.toUpperCase(),
      email,
      isGuest: false,
    }
    const mockToken = `rg_jwt_${Date.now()}`
    setUser(newUser)
    setToken(mockToken)
  }

  const loginAsGuest = () => {
    setUser(GUEST_USER)
    setToken(null)
  }

  const logout = () => {
    setUser(GUEST_USER)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, login, register, loginAsGuest, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
