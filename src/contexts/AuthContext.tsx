import { useEffect, useState, type ReactNode } from 'react'
import { AuthContext, type AuthState } from './auth'
import { isSupabaseConfigured, supabaseClient } from '../lib/supabase'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>(() =>
    isSupabaseConfigured && supabaseClient
      ? { status: 'loading', session: null, error: null }
      : { status: 'unconfigured', session: null, error: null },
  )

  useEffect(() => {
    if (!isSupabaseConfigured || !supabaseClient) {
      return
    }

    let active = true
    let receivedAuthEvent = false
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      receivedAuthEvent = true
      if (active) {
        setAuthState({
          status: session ? 'authenticated' : 'unauthenticated',
          session,
          error: null,
        })
      }
    })

    void supabaseClient.auth.getSession().then(
      ({ data, error }) => {
        if (active && !receivedAuthEvent) {
          setAuthState(
            error
              ? { status: 'error', session: null, error: error.message }
              : {
                  status: data.session ? 'authenticated' : 'unauthenticated',
                  session: data.session,
                  error: null,
                },
          )
        }
      },
      (error: unknown) => {
        if (active && !receivedAuthEvent) {
          setAuthState({
            status: 'error',
            session: null,
            error:
              error instanceof Error
                ? error.message
                : 'Unable to read the current authentication session.',
          })
        }
      },
    )

    return () => {
      active = false
      subscription.unsubscribe()
    }
  }, [])

  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
}
