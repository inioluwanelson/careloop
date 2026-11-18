import { useState, type FormEvent } from 'react'
import { Handshake, LifeBuoy, MessageCircle } from 'lucide-react'
import healthcareImage from '../assets/careloop-about.png'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const enquiryTypes = [
  'General Enquiry',
  'Technical Support',
  'Product Feedback',
  'Partnership',
  'Other',
]

const contactOptions = [
  {
    title: 'General Enquiries',
    description:
      'Have a question about CareLoop? Send us a message using the contact form.',
    Icon: MessageCircle,
  },
  {
    title: 'Technical Support',
    description:
      'Tell us about the issue through the form, and our support contact details will be shared here when available.',
    Icon: LifeBuoy,
  },
  {
    title: 'Partnerships',
    description:
      'Select Partnership in the form to start a conversation. Partnership contact details will be added when verified.',
    Icon: Handshake,
  },
]

const faqs = [
  {
    question: 'What is CareLoop?',
    answer:
      'CareLoop is a healthcare platform concept designed to help patients, caregivers, and healthcare teams stay connected around care.',
  },
  {
    question: 'Who can use CareLoop?',
    answer:
      'The platform is intended for patients, family caregivers, and healthcare professionals.',
  },
  {
    question: 'Can family members and caregivers stay connected?',
    answer:
      'CareLoop is designed to support communication between patients and the people involved in their care. Specific features are still being developed.',
  },
  {
    question: 'How can healthcare organisations enquire about CareLoop?',
    answer:
      'Choose Partnership or General Enquiry in the form above and describe how your organisation would like to connect.',
  },
]

function ContactPage() {
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitMessage(
      'Thanks for your interest. This demo form is not connected, so your message has not been sent.',
    )
    event.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-background text-navy">
      <Navbar />

      <main>
        <section
          aria-labelledby="contact-heading"
          className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16"
        >
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              Get in touch
            </p>
            <h1
              id="contact-heading"
              className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
            >
              Let&apos;s start a conversation.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-navy/75 sm:text-lg sm:leading-8">
              Have a question about CareLoop? We&apos;d love to hear from you.
              Reach out to our team and let&apos;s explore how we can make
              healthcare more connected.
            </p>
          </div>
          <div className="relative min-h-56 overflow-hidden rounded-3xl sm:min-h-72 lg:min-h-[320px]">
            <img
              src={healthcareImage}
              alt="A care team supporting a patient in person and through a video visit"
              className="absolute inset-0 size-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-br from-primary/35 via-transparent to-navy/35"
            />
          </div>
        </section>

        <section
          id="contact-form"
          aria-label="Contact form and contact information"
          className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-12">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Send us a message
              </h2>
              <p className="mt-2 text-sm leading-6 text-navy/70">
                Complete the form and we&apos;ll know how best to direct your
                enquiry.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-2 block text-sm font-medium"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-enquiry-type"
                      className="mb-2 block text-sm font-medium"
                    >
                      Enquiry Type
                    </label>
                    <select
                      id="contact-enquiry-type"
                      name="enquiryType"
                      required
                      defaultValue=""
                      className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="" disabled>
                        Select an enquiry type
                      </option>
                      {enquiryTypes.map((enquiryType) => (
                        <option key={enquiryType} value={enquiryType}>
                          {enquiryType}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  className="hero-button inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto sm:min-w-48"
                >
                  Send Message
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

            <aside aria-labelledby="contact-options-heading">
              <h2
                id="contact-options-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                How can we help?
              </h2>
              <p className="mt-2 text-sm leading-6 text-navy/70">
                Choose an enquiry type in the form and our team can follow up
                when contact channels are available.
              </p>
              <div className="mt-5 grid gap-4">
                {contactOptions.map(({ title, description, Icon }) => (
                  <article
                    key={title}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-background p-5"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon aria-hidden="true" size={21} />
                    </span>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-navy/70">
                        {description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section
          id="faq"
          aria-labelledby="contact-faq-heading"
          className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        >
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              Helpful answers
            </p>
            <h2
              id="contact-faq-heading"
              className="mt-2 text-3xl font-semibold tracking-tight"
            >
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="cursor-pointer list-none pr-6 text-base font-semibold marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {question}
                    <span
                      aria-hidden="true"
                      className="text-xl font-normal text-primary transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-navy/75">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage
