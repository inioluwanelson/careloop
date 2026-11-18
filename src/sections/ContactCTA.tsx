import { Link } from 'react-router-dom'
import aboutImage from '../assets/careloop-about.png'

function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="relative isolate flex min-h-[260px] w-full items-center justify-center overflow-hidden px-4 py-10 text-center sm:px-6 lg:min-h-[220px] lg:py-8"
    >
      <img
        src={aboutImage}
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover object-[center_32%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-primary/75 to-accent/75"
      />

      <div className="flex w-full max-w-3xl flex-col items-center">
        <h2
          id="contact-cta-heading"
          className="text-2xl font-semibold leading-tight text-navy sm:text-3xl"
        >
          Bring care closer — wherever you are.
        </h2>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            to="/book-demo"
            className="hero-button inline-flex min-h-12 w-full min-w-36 items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
          >
            Book a Demo
          </Link>
          <Link
            to="/contact"
            className="hero-button inline-flex min-h-12 w-full min-w-36 items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
