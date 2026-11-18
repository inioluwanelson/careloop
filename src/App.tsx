import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import ProtectedRoute from './components/auth/ProtectedRoute'
import AuthCallbackPage from './pages/auth/AuthCallbackPage'
import AuthPlaceholder from './pages/auth/AuthPlaceholder'
import BookDemoPage from './pages/BookDemoPage'
import ContactPage from './pages/ContactPage'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'
import ResetPasswordPage from './pages/auth/ResetPasswordPage'
import SignUpPage from './pages/auth/SignUpPage'
import DashboardPlaceholder from './pages/dashboard/DashboardPlaceholder'
import LandingPage from './pages/LandingPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1))
        if (target) {
          const stickyHeader = document.querySelector<HTMLElement>('header.sticky')
          const top =
            target.getBoundingClientRect().top +
            window.scrollY -
            (stickyHeader?.offsetHeight ?? 0)
          window.scrollTo({ top, behavior: 'auto' })
          return
        }
      }

      window.scrollTo({ top: 0, behavior: 'auto' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash, key])

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/book-demo" element={<BookDemoPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/contact-sales" element={<Navigate to="/contact" replace />} />
      <Route
        path="/auth/login"
        element={<AuthPlaceholder title="Log in" />}
      />
      <Route
        path="/auth/sign-up"
        element={<SignUpPage />}
      />
      <Route
        path="/auth/forgot-password"
        element={<ForgotPasswordPage />}
      />
      <Route
        path="/auth/reset-password"
        element={<ResetPasswordPage />}
      />
      <Route
        path="/auth/callback"
        element={<AuthCallbackPage />}
      />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/app"
          element={<DashboardPlaceholder title="CareLoop dashboard" />}
        />
        <Route
          path="/app/patient"
          element={
            <DashboardPlaceholder title="Patient dashboard" role="patient" />
          }
        />
        <Route
          path="/app/caregiver"
          element={
            <DashboardPlaceholder title="Caregiver dashboard" role="caregiver" />
          }
        />
        <Route
          path="/app/healthcare-professional"
          element={
            <DashboardPlaceholder
              title="Healthcare professional dashboard"
              role="healthcare-professional"
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
