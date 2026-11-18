import { useState, type ChangeEvent, type FormEvent } from 'react'
import { ArrowLeft, Eye, EyeOff, LockKeyhole } from 'lucide-react'
import { Link } from 'react-router-dom'
import healthcareImage from '../../assets/careloop-hero.png'

function ResetPasswordPage() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmationVisible, setConfirmationVisible] = useState(false)
  const [passwordsMismatch, setPasswordsMismatch] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const updatePasswordMatch = (event: ChangeEvent<HTMLInputElement>) => {
    const form = event.currentTarget.form
    const password = form?.elements.namedItem('newPassword')
    const confirmPassword = form?.elements.namedItem('confirmNewPassword')

    if (!(password instanceof HTMLInputElement) || !(confirmPassword instanceof HTMLInputElement)) {
      return
    }

    const mismatch =
      password.value.length > 0 &&
      confirmPassword.value.length > 0 &&
      password.value !== confirmPassword.value
    confirmPassword.setCustomValidity(
      mismatch ? 'Passwords must match.' : '',
    )
    setPasswordsMismatch(mismatch)
    setSubmitMessage('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitMessage('')

    const form = event.currentTarget
    const password = form.elements.namedItem('newPassword')
    const confirmPassword = form.elements.namedItem('confirmNewPassword')

    if (!(password instanceof HTMLInputElement) || !(confirmPassword instanceof HTMLInputElement)) {
      return
    }

    const mismatch = password.value !== confirmPassword.value
    confirmPassword.setCustomValidity(
      mismatch ? 'Passwords must match.' : '',
    )
    setPasswordsMismatch(mismatch)

    if (!form.reportValidity()) {
      return
    }

    setSubmitMessage(
      'Password updates are not connected yet. Your password has not been changed.',
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
            Secure your account
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            A safe space for every step of your care journey.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            Your health connections matter. Keep your CareLoop account secure
            with a strong password.
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
              Create a new password
            </h2>
            <p className="mt-3 text-base leading-7 text-navy/70">
              Choose a strong new password to secure your CareLoop account.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="reset-new-password"
                className="mb-2 block text-sm font-medium"
              >
                New Password
              </label>
              <div className="relative">
                <LockKeyhole
                  aria-hidden="true"
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/45"
                />
                <input
                  id="reset-new-password"
                  name="newPassword"
                  type={passwordVisible ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="Enter a new password"
                  required
                  minLength={8}
                  onChange={updatePasswordMatch}
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
              <p className="mt-2 text-sm text-navy/65">
                Use at least 8 characters.
              </p>
            </div>

            <div>
              <label
                htmlFor="reset-confirm-password"
                className="mb-2 block text-sm font-medium"
              >
                Confirm New Password
              </label>
              <div className="relative">
                <LockKeyhole
                  aria-hidden="true"
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/45"
                />
                <input
                  id="reset-confirm-password"
                  name="confirmNewPassword"
                  type={confirmationVisible ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="Enter your new password again"
                  required
                  aria-invalid={passwordsMismatch}
                  aria-describedby={
                    passwordsMismatch ? 'reset-password-mismatch' : undefined
                  }
                  onChange={updatePasswordMatch}
                  className="min-h-12 w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-12 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="button"
                  onClick={() =>
                    setConfirmationVisible((visible) => !visible)
                  }
                  aria-label={
                    confirmationVisible
                      ? 'Hide confirm password'
                      : 'Show confirm password'
                  }
                  aria-pressed={confirmationVisible}
                  className="absolute right-2 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-lg text-navy/60 transition hover:bg-background hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary"
                >
                  {confirmationVisible ? (
                    <EyeOff aria-hidden="true" size={18} />
                  ) : (
                    <Eye aria-hidden="true" size={18} />
                  )}
                </button>
              </div>
              {passwordsMismatch && (
                <p
                  id="reset-password-mismatch"
                  className="mt-2 text-sm"
                  role="alert"
                >
                  Passwords must match.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="hero-button inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Reset Password
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

export default ResetPasswordPage
