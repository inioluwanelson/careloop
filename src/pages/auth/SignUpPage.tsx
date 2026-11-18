import { useState, type FormEvent } from 'react'
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Heart,
  Stethoscope,
  UserRound,
} from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import healthcareImage from '../../assets/careloop-about.png'
import type { UserRole } from '../../types/auth'

type SignupPlan = 'basic' | 'family'

const planLabels: Record<SignupPlan, string> = {
  basic: 'Basic Plan',
  family: 'Family Plan',
}

const roles: {
  value: UserRole
  label: string
  description: string
  Icon: typeof UserRound
}[] = [
  {
    value: 'patient',
    label: 'Patient',
    description: 'Manage your personal health journey.',
    Icon: UserRound,
  },
  {
    value: 'caregiver',
    label: 'Caregiver',
    description: "Support and monitor someone else's care.",
    Icon: Heart,
  },
  {
    value: 'healthcare-professional',
    label: 'Healthcare Professional',
    description: 'For healthcare practitioners. Verification may be required.',
    Icon: Stethoscope,
  },
]

function SignUpPage() {
  const [searchParams] = useSearchParams()
  const requestedPlan = searchParams.get('plan')
  const selectedPlan: SignupPlan | null =
    requestedPlan === 'basic' || requestedPlan === 'family'
      ? requestedPlan
      : null
  const [selectedRole, setSelectedRole] = useState<UserRole | ''>('')
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmationVisible, setConfirmationVisible] = useState(false)
  const [showValidation, setShowValidation] = useState(false)
  const [passwordsMismatch, setPasswordsMismatch] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setShowValidation(true)
    setSubmitMessage('')

    const form = event.currentTarget
    const password = form.elements.namedItem('password')
    const confirmPassword = form.elements.namedItem('confirmPassword')

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
      'Account creation is not available yet. No account has been created.',
    )
  }

  const clearPasswordMismatch = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    event.currentTarget.setCustomValidity('')
    setPasswordsMismatch(false)
    setSubmitMessage('')
  }

  return (
    <main className="min-h-screen bg-white text-navy lg:grid lg:grid-cols-2">
      <section
        aria-label="CareLoop introduction"
        className="relative isolate flex min-h-[300px] items-end overflow-hidden px-6 py-8 sm:min-h-[340px] sm:px-10 lg:min-h-screen lg:px-12 lg:py-12 xl:px-16"
      >
        <img
          src={healthcareImage}
          alt="A care team supporting a patient in person and through a video visit"
          className="absolute inset-0 -z-20 size-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-br from-primary/65 via-navy/45 to-navy/75"
        />

        <div className="max-w-xl text-white">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/85">
            Your care, connected
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            A more connected care journey starts here.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            Join patients, caregivers, and care teams making every connection
            count.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center px-5 py-10 sm:px-10 sm:py-14 lg:px-10 lg:py-8 xl:px-14">
        <div className="w-full max-w-xl">
          <Link
            to="/"
            className="mb-6 inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-medium text-navy/70 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <ArrowLeft aria-hidden="true" size={17} />
            Back to Home
          </Link>

          <header className="mb-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              CareLoop account
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Create your account
            </h2>
            <p className="mt-2 text-base leading-7 text-navy/70">
              Choose how you’ll use CareLoop to get started.
            </p>
            {selectedPlan && (
              <p className="mt-4 inline-flex rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-sm font-semibold text-navy">
                Selected plan: {planLabels[selectedPlan]}
              </p>
            )}
          </header>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="space-y-4"
            aria-describedby="signup-status"
          >
            {selectedPlan && (
              <input type="hidden" name="plan" value={selectedPlan} />
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="signup-name"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Full Name
                </label>
                <input
                  id="signup-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                  className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="signup-email"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Email Address
                </label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="signup-password"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="signup-password"
                    name="password"
                    type={passwordVisible ? 'text' : 'password'}
                    autoComplete="new-password"
                    placeholder="Create a password"
                    required
                    onChange={clearPasswordMismatch}
                    className="min-h-12 w-full rounded-xl border border-slate-300 bg-white py-3 pl-4 pr-12 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
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
              <div>
                <label
                  htmlFor="signup-confirm-password"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="signup-confirm-password"
                    name="confirmPassword"
                    type={confirmationVisible ? 'text' : 'password'}
                    autoComplete="new-password"
                    placeholder="Enter your password again"
                    required
                    aria-invalid={passwordsMismatch}
                    aria-describedby={
                      passwordsMismatch ? 'password-mismatch-error' : undefined
                    }
                    onChange={clearPasswordMismatch}
                    className="min-h-12 w-full rounded-xl border border-slate-300 bg-white py-3 pl-4 pr-12 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
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
                    id="password-mismatch-error"
                    className="mt-1.5 text-sm text-navy"
                    role="alert"
                  >
                    Passwords must match.
                  </p>
                )}
              </div>
            </div>

            <fieldset
              aria-describedby={showValidation && !selectedRole ? 'role-error' : undefined}
              className="min-w-0"
            >
              <legend className="mb-2 text-sm font-semibold">
                I am joining CareLoop as a
              </legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {roles.map(({ value, label, description, Icon }) => {
                  const isSelected = selectedRole === value
                  return (
                    <label
                      key={value}
                      className={`flex min-h-[94px] cursor-pointer items-start gap-2.5 rounded-xl border p-3 transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary ${
                        isSelected
                          ? 'border-primary bg-primary/5 ring-1 ring-primary'
                          : 'border-slate-300 bg-white hover:border-primary/60'
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={value}
                        required
                        checked={isSelected}
                        onChange={() => {
                          setSelectedRole(value)
                          setSubmitMessage('')
                        }}
                        className="sr-only"
                      />
                      <Icon
                        aria-hidden="true"
                        size={18}
                        className={`mt-0.5 shrink-0 ${isSelected ? 'text-primary' : 'text-navy/60'}`}
                      />
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold leading-5">
                          {label}
                        </span>
                        <span className="mt-1 block text-xs leading-4 text-navy/70">
                          {description}
                        </span>
                      </span>
                    </label>
                  )
                })}
              </div>
              {showValidation && !selectedRole && (
                <p id="role-error" className="mt-1.5 text-sm" role="alert">
                  Choose an account role to continue.
                </p>
              )}
            </fieldset>

            <div>
              <label className="flex cursor-pointer items-start gap-2.5 text-sm leading-6 text-navy/80">
                <input
                  type="checkbox"
                  name="terms"
                  required
                  checked={termsAccepted}
                  onChange={(event) => {
                    setTermsAccepted(event.currentTarget.checked)
                    setSubmitMessage('')
                  }}
                  aria-describedby={
                    showValidation && !termsAccepted
                      ? 'terms-error'
                      : undefined
                  }
                  className="mt-1 size-4 shrink-0 rounded border-slate-300 accent-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                />
                <span>
                  I accept the Terms of Service and Privacy Policy.
                </span>
              </label>
              {showValidation && !termsAccepted && (
                <p id="terms-error" className="mt-1.5 text-sm" role="alert">
                  You must accept the Terms of Service and Privacy Policy.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="hero-button inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Create Account
            </button>

            <p
              id="signup-status"
              className="text-sm leading-6 text-navy/75"
              role="status"
              aria-live="polite"
            >
              {submitMessage}
            </p>
          </form>

          <p className="mt-5 text-center text-sm text-navy/70">
            Already have an account?{' '}
            <Link
              to="/auth/login"
              className="font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Log in
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default SignUpPage
