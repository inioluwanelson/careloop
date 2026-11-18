import { useState, type FormEvent } from 'react'
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import healthcareImage from '../../assets/careloop-hero.png'

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitMessage(
      'Sign-in is not available yet. Authentication has not been configured.',
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

        <div className="flex w-full flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-xl text-white">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Welcome back to better care.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Stay connected to the people and care that matter most. Your
              health journey continues here.
            </p>
          </div>
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

          <div className="mb-9 lg:mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              CareLoop account
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Welcome Back
            </h2>
            <p className="mt-3 text-base leading-7 text-navy/70">
              Sign in to your CareLoop account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="login-email"
                className="mb-2 block text-sm font-medium"
              >
                Email address
              </label>
              <div className="relative">
                <Mail
                  aria-hidden="true"
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/45"
                />
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="min-h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="mb-2 block text-sm font-medium"
              >
                Password
              </label>
              <div className="relative">
                <LockKeyhole
                  aria-hidden="true"
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/45"
                />
                <input
                  id="login-password"
                  name="password"
                  type={passwordVisible ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                  className="min-h-12 w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-12 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible((visible) => !visible)}
                  aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                  aria-pressed={passwordVisible}
                  className="absolute right-2 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-lg text-navy/60 transition hover:bg-background hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary"
                >
                  {passwordVisible ? (
                    <EyeOff aria-hidden="true" size={18} />
                  ) : (
                    <Eye aria-hidden="true" size={18} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm text-navy/80">
                <input
                  type="checkbox"
                  name="remember"
                  className="size-4 rounded border-slate-300 accent-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                />
                Remember me
              </label>
              <Link
                to="/auth/forgot-password"
                className="rounded text-sm font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="hero-button inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Login
            </button>
            {submitMessage && (
              <p role="status" className="text-sm leading-6 text-navy/75">
                {submitMessage}
              </p>
            )}
          </form>

          <p className="mt-8 text-center text-sm text-navy/70">
            Don&apos;t have an account?{' '}
            <Link
              to="/auth/sign-up"
              className="font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

function AuthPlaceholder({ title }: { title: string }) {
  if (title === 'Log in') {
    return <LoginPage />
  }

  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-navy">
      <section className="max-w-lg text-center">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="mt-4 leading-7">
          This authentication page is a placeholder. Sign-in and account
          management are not available yet.
        </p>
        <Link className="mt-6 inline-block text-primary underline" to="/">
          Return to CareLoop
        </Link>
      </section>
    </main>
  )
}

export default AuthPlaceholder
