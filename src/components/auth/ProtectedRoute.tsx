import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/auth'

function ProtectedRoute() {
  const { status, error } = useAuth()
  const location = useLocation()

  if (status === 'loading') {
    return (
      <main className="grid min-h-screen place-items-center px-6 text-navy">
        <p role="status">Checking your authentication session...</p>
      </main>
    )
  }

  if (status === 'unconfigured') {
    return (
      <main className="grid min-h-screen place-items-center px-6 text-navy">
        <section className="max-w-lg text-center">
          <h1 className="text-2xl font-semibold">Authentication not configured</h1>
          <p className="mt-4 leading-7">
            Protected pages are unavailable until the Supabase project URL and
            public key are configured. No sign-in session has been created.
          </p>
          <Link className="mt-6 inline-block text-primary underline" to="/">
            Return to CareLoop
          </Link>
        </section>
      </main>
    )
  }

  if (status === 'error') {
    return (
      <main className="grid min-h-screen place-items-center px-6 text-navy">
        <section className="max-w-lg text-center">
          <h1 className="text-2xl font-semibold">Unable to check session</h1>
          <p className="mt-4 leading-7">{error}</p>
        </section>
      </main>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <Navigate
        to="/auth/login"
        replace
        state={{ from: location.pathname }}
      />
    )
  }

  return <Outlet />
}

export default ProtectedRoute
