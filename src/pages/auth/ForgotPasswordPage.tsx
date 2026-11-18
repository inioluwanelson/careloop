import { useState, type FormEvent } from 'react'
import { ArrowLeft, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import healthcareImage from '../../assets/careloop-hero.png'

function ForgotPasswordPage() {
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitMessage(
      'Password reset is not connected yet. No reset email has been sent.',
    )
  }

  return (
    <main className="min-h-screen bg-white text-navy lg:grid lg:grid-cols-2">
      <section
        aria-label="CareLoop introduction"
        className="relative isolate flex min-h-[300px] items-end overflow-hidden px-6 py-8 sm:min-h-[340px] sm:px-10 lg:min-h-screen lg:px-12 lg:py-12 xl:px-16"
      >
        <img
          src={healthcareImage}
          alt="A healthcare professional supporting a patient"
          className="absolute inset-0 -z-20 size-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-br from-primary/65 via-navy/45 to-navy/75"
        />

        <div className="max-w-xl text-white">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/85">
            Here to help
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Your care journey is always within reach.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            We’ll help you get back to the people and care that matter most.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center px-5 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-10 xl:px-16">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="mb-8 inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-medium text-navy/70 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <ArrowLeft aria-hidden="true" size={17} />
            Back to Home
          </Link>

          <header className="mb-9 lg:mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              Account recovery
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Forgot your password?
            </h2>
            <p className="mt-3 text-base leading-7 text-navy/70">
              Don&apos;t worry. Enter the email address associated with your
              account and we&apos;ll help you reset your password.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="forgot-password-email"
                className="mb-2 block text-sm font-medium"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail
                  aria-hidden="true"
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/45"
                />
                <input
                  id="forgot-password-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  onChange={() => setSubmitMessage('')}
                  className="min-h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <button
              type="submit"
              className="hero-button inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Send Reset Link
            </button>

            {submitMessage && (
              <p role="status" className="text-sm leading-6 text-navy/75">
                {submitMessage}
              </p>
            )}
          </form>

          <p className="mt-8 text-center text-sm text-navy/70">
            Remember your password?{' '}
            <Link
              to="/auth/login"
              className="font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Back to Login
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default ForgotPasswordPage
