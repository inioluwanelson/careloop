import { ArrowLeft, CheckCircle2, CircleX, LoaderCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import healthcareImage from '../../assets/careloop-hero.png'

type CallbackState = 'processing' | 'success' | 'error'

function AuthCallbackPage({
  state = 'processing',
}: {
  state?: CallbackState
}) {
  const content = {
    processing: {
      eyebrow: 'Secure verification',
      title: 'Verifying your account',
      message:
        'Please wait while we securely verify your authentication request.',
    },
    success: {
      eyebrow: 'Verification complete',
      title: 'Verification successful',
      message:
        'Your account has been verified successfully. You can now continue to CareLoop.',
    },
    error: {
      eyebrow: 'Verification issue',
      title: 'Verification unsuccessful',
      message:
        "We couldn't verify your request. Your link may have expired or already been used.",
    },
  }[state]

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
            CareLoop account
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Care that keeps you connected.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            A secure connection helps bring patients, caregivers, and care
            teams closer.
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

          <section
            aria-labelledby="callback-heading"
            aria-live={state === 'processing' ? 'polite' : undefined}
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
          >
            <div
              aria-hidden="true"
              className={`mb-6 flex size-14 items-center justify-center rounded-full ${
                state === 'success'
                  ? 'bg-primary/10 text-primary'
                  : state === 'error'
                    ? 'bg-accent/25 text-navy'
                    : 'bg-primary/10 text-primary'
              }`}
            >
              {state === 'success' ? (
                <CheckCircle2 size={28} strokeWidth={1.8} />
              ) : state === 'error' ? (
                <CircleX size={28} strokeWidth={1.8} />
              ) : (
                <LoaderCircle
                  className="animate-spin"
                  size={28}
                  strokeWidth={1.8}
                />
              )}
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              {content.eyebrow}
            </p>
            <h2
              id="callback-heading"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {content.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-navy/70">
              {content.message}
            </p>

            {state === 'processing' && (
              <p role="status" className="sr-only">
                Verification is still processing.
              </p>
            )}

            <Link
              to="/auth/login"
              className="hero-button mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {state === 'success' ? 'Continue to Login' : 'Return to Login'}
            </Link>
          </section>
        </div>
      </section>
    </main>
  )
}

export default AuthCallbackPage
