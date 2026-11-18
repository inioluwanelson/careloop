import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  BarChart3,
  CalendarDays,
  CircleHelp,
  ClipboardList,
  UsersRound,
} from 'lucide-react'
import demoImage from '../assets/careloop-about.png'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const organisationTypes = [
  'Hospital',
  'Clinic',
  'Healthcare Organisation',
  'Home Healthcare Provider',
  'Caregiving Agency',
  'Individual / Family',
  'Other',
]

const demoTopics = [
  'Patient Monitoring',
  'Caregiver Coordination',
  'Healthcare Team Management',
  'Reporting and Analytics',
  'General Product Overview',
]

const demonstrationDetails = [
  {
    title: 'Product Overview',
    description:
      'Get an introduction to CareLoop and the needs it is designed to support.',
    Icon: ClipboardList,
  },
  {
    title: 'Key Features',
    description:
      'Explore the product concepts for patients, caregivers, and care teams.',
    Icon: BarChart3,
  },
  {
    title: 'Care Coordination Workflow',
    description:
      'See how a more connected care experience could fit your organisation.',
    Icon: UsersRound,
  },
  {
    title: 'Questions and Answers',
    description:
      'Share your questions and discuss what matters most to your team.',
    Icon: CircleHelp,
  },
]

function getLocalDateString() {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function BookDemoPage() {
  const [submitMessage, setSubmitMessage] = useState('')
  const today = getLocalDateString()

  const validatePhone = (event: ChangeEvent<HTMLInputElement>) => {
    const phone = event.currentTarget.value.trim()
    const digits = phone.replace(/\D/g, '')
    const valid =
      phone.length === 0 ||
      (/^\+?[0-9\s().-]+$/.test(phone) &&
        digits.length >= 7 &&
        digits.length <= 15)

    event.currentTarget.setCustomValidity(
      valid
        ? ''
        : 'Enter a phone number with 7 to 15 digits. Spaces, parentheses, periods, hyphens, and a leading plus sign are allowed.',
    )
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitMessage(
      'Thanks for your interest. This demo request form is not connected, so no request or meeting has been scheduled.',
    )
    event.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-background text-navy">
      <Navbar />

      <main>
        <section
          aria-labelledby="demo-heading"
          className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16"
        >
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              Explore CareLoop
            </p>
            <h1
              id="demo-heading"
              className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
            >
              See how better care comes together.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-navy/75 sm:text-lg sm:leading-8">
              Discover how CareLoop can help patients, families, caregivers,
              and healthcare teams stay connected through a more coordinated
              approach to care.
            </p>
            <a
              href="#demo-request"
              className="hero-button mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-navy hover:bg-[#e6b609] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Request a Demo
            </a>
          </div>
          <div className="relative min-h-56 overflow-hidden rounded-3xl sm:min-h-72 lg:min-h-[320px]">
            <img
              src={demoImage}
              alt="A care team supporting a patient and connecting with a remote care provider"
              className="absolute inset-0 size-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-br from-primary/35 via-transparent to-navy/35"
            />
          </div>
        </section>

        <section
          aria-labelledby="demo-expect-heading"
          className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                What to expect
              </p>
              <h2
                id="demo-expect-heading"
                className="mt-2 text-3xl font-semibold tracking-tight"
              >
                A closer look at connected care
              </h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {demonstrationDetails.map(({ title, description, Icon }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <h3 className="mt-4 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-navy/70">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="demo-request"
          aria-labelledby="demo-form-heading"
          className="scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
            <header className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                Demo request
              </p>
              <h2
                id="demo-form-heading"
                className="mt-2 text-3xl font-semibold tracking-tight"
              >
                Tell us a little about your needs
              </h2>
              <p className="mt-2 text-sm leading-6 text-navy/70">
                Share a few details to help frame a future product
                demonstration. This form is for demonstration purposes only.
              </p>
            </header>

            <form onSubmit={handleSubmit} className="mt-7 space-y-8">
              <fieldset className="space-y-5">
                <legend className="text-lg font-semibold">
                  Personal information
                </legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="demo-name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Full Name
                    </label>
                    <input
                      id="demo-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="demo-email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Work Email
                    </label>
                    <input
                      id="demo-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="demo-phone"
                      className="mb-2 block text-sm font-medium"
                    >
                      Phone Number <span className="font-normal text-navy/60">(optional)</span>
                    </label>
                    <input
                      id="demo-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      onChange={validatePhone}
                      className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="demo-job-title"
                      className="mb-2 block text-sm font-medium"
                    >
                      Job Title
                    </label>
                    <input
                      id="demo-job-title"
                      name="jobTitle"
                      type="text"
                      autoComplete="organization-title"
                      required
                      className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className="space-y-5">
                <legend className="text-lg font-semibold">
                  Organisation information
                </legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="demo-organisation"
                      className="mb-2 block text-sm font-medium"
                    >
                      Organisation Name
                    </label>
                    <input
                      id="demo-organisation"
                      name="organisation"
                      type="text"
                      autoComplete="organization"
                      required
                      className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="demo-organisation-type"
                      className="mb-2 block text-sm font-medium"
                    >
                      Organisation Type
                    </label>
                    <select
                      id="demo-organisation-type"
                      name="organisationType"
                      defaultValue=""
                      required
                      className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="" disabled>
                        Select an organisation type
                      </option>
                      {organisationTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </fieldset>

              <fieldset className="space-y-5">
                <legend className="text-lg font-semibold">
                  Demonstration preferences
                </legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="demo-topic"
                      className="mb-2 block text-sm font-medium"
                    >
                      What would you like to explore?
                    </label>
                    <select
                      id="demo-topic"
                      name="topic"
                      defaultValue=""
                      required
                      className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>
                      {demoTopics.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="demo-date"
                      className="mb-2 block text-sm font-medium"
                    >
                      Preferred Date <span className="font-normal text-navy/60">(optional)</span>
                    </label>
                    <div className="relative">
                      <CalendarDays
                        aria-hidden="true"
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/45"
                      />
                      <input
                        id="demo-date"
                        name="preferredDate"
                        type="date"
                        min={today}
                        className="min-h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="demo-additional-info"
                    className="mb-2 block text-sm font-medium"
                  >
                    Additional Information <span className="font-normal text-navy/60">(optional)</span>
                  </label>
                  <textarea
                    id="demo-additional-info"
                    name="additionalInformation"
                    rows={4}
                    className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </fieldset>

              <button
                type="submit"
                className="hero-button inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto sm:min-w-52"
              >
                Request a Demo
              </button>

              {submitMessage && (
                <p
                  role="status"
                  aria-live="polite"
                  className="text-sm leading-6 text-navy/75"
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default BookDemoPage
