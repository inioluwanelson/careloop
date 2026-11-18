import { Link } from 'react-router-dom'
import aboutImage from '../assets/careloop-about.png'

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white px-4 pt-8 pb-16 sm:px-6 sm:pt-10 sm:pb-20 lg:px-8 lg:pt-12 lg:pb-24"
    >
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-primary min-[900px]:grid-cols-2">
        <div className="about-image-wrap relative min-h-64 overflow-hidden sm:min-h-80 min-[900px]:min-h-[28rem]">
          <img
            src={aboutImage}
            alt="A care team supporting a patient in person and through a video visit"
            loading="lazy"
            className="about-image animate-fade-in-right absolute inset-0 size-full object-cover object-center"
          />
          <span
            aria-hidden="true"
            className="about-separator pointer-events-none absolute inset-0 bg-white"
          />
        </div>

        <div className="flex items-center px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-16 xl:px-20">
          <div className="about-content animate-fade-up mx-auto max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-on-primary">
              About CareLoop
            </p>
            <h2 id="about-heading" className="text-white">
              Because care is more than data.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-on-primary sm:text-lg sm:leading-8">
              Our platform is built with empathy first — to help every patient
              feel seen, heard, and supported.
            </p>
            <Link
              to="/auth/login"
              className="hero-button mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-navy shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start Monitoring
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
