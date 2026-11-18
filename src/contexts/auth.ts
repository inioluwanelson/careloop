import { createContext, useContext } from 'react'
import type { Session } from '@supabase/supabase-js'

export type AuthStatus =
  | 'loading'
  | 'unconfigured'
  | 'unauthenticated'
  | 'authenticated'
  | 'error'

export type AuthState = {
  status: AuthStatus
  session: Session | null
  error: string | null
}

export const AuthContext = createContext<AuthState | null>(null)

export function useAuth() {
  const authState = useContext(AuthContext)
  if (!authState) {
    throw new Error('useAuth must be used within an AuthProvider.')
  }
  return authState
}
