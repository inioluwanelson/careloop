import { ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/careloop-hero.png'

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 min-[1100px]:grid-cols-2 min-[1100px]:gap-10 xl:gap-12"
    >
      <div className="mx-auto w-full max-w-xl">
        <p className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary-accessible">
          <ShieldCheck aria-hidden="true" size={16} />
          Connected care, wherever life happens
        </p>
        <h1
          id="hero-heading"
          className="animate-fade-up text-4xl font-semibold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl"
        >
          Better care starts with staying{' '}
          <span className="text-primary-accessible">connected.</span>
        </h1>
        <p className="animate-fade-up animation-delay-150 mt-6 max-w-lg text-base leading-7 text-navy/70 sm:text-lg sm:leading-8">
          CareLoop helps care teams and families stay connected to the health
          updates that matter, wherever patients are.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/auth/login"
            className="hero-button animate-fade-up animation-delay-300 inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Start Monitoring
          </Link>
          <Link
            to="/book-demo"
            className="hero-button animate-fade-up animation-delay-450 inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-navy shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Book a Demo
          </Link>
        </div>
      </div>

      <div className="animate-fade-in-right mx-auto w-full max-w-xl animation-duration-900">
        <img
          src={heroImage}
          alt="A healthcare professional speaking with an older patient"
          loading="eager"
          fetchPriority="high"
          className="h-auto w-full rounded-3xl shadow-xl shadow-navy/5"
        />
      </div>
    </section>
  )
}

export default Hero
