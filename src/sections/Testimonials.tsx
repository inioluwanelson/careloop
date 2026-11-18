import {
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type TouchEvent,
} from 'react'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const AUTOPLAY_INTERVAL_MS = 4500
const INTERACTION_IDLE_MS = 2500

const testimonials = [
  {
    quote:
      'CareLoop helps our family feel connected and reassured, even when we cannot be there in person.',
    name: 'Alex Morgan',
    role: 'Family caregiver',
    initials: 'AM',
  },
  {
    quote:
      'Having updates in one place makes it easier to keep everyone involved in a patient’s care.',
    name: 'Jordan Lee',
    role: 'Care team member',
    initials: 'JL',
  },
  {
    quote:
      'The regular check-ins help us feel supported and make conversations with our care team simpler.',
    name: 'Taylor Brooks',
    role: 'CareLoop member',
    initials: 'TB',
  },
]

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isSmallScreen, setIsSmallScreen] = useState(() =>
    window.matchMedia('(max-width: 1023px)').matches,
  )
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [isInteracting, setIsInteracting] = useState(false)
  const [isPointerInside, setIsPointerInside] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const interactionTimeout = useRef<number | null>(null)

  const markInteraction = () => {
    setIsInteracting(true)
    if (interactionTimeout.current !== null) {
      window.clearTimeout(interactionTimeout.current)
    }
    interactionTimeout.current = window.setTimeout(() => {
      setIsInteracting(false)
      interactionTimeout.current = null
    }, INTERACTION_IDLE_MS)
  }

  useEffect(() => {
    const screenQuery = window.matchMedia('(max-width: 1023px)')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateScreenSize = () => setIsSmallScreen(screenQuery.matches)
    const updateMotionPreference = () =>
      setPrefersReducedMotion(motionQuery.matches)

    screenQuery.addEventListener('change', updateScreenSize)
    motionQuery.addEventListener('change', updateMotionPreference)
    return () => {
      screenQuery.removeEventListener('change', updateScreenSize)
      motionQuery.removeEventListener('change', updateMotionPreference)
    }
  }, [])

  useEffect(
    () => () => {
      if (interactionTimeout.current !== null) {
        window.clearTimeout(interactionTimeout.current)
      }
    },
    [],
  )

  useEffect(() => {
    if (
      !isSmallScreen ||
      prefersReducedMotion ||
      isInteracting ||
      isPointerInside
    ) {
      return
    }

    const autoplayTimeout = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length)
    }, AUTOPLAY_INTERVAL_MS)

    return () => window.clearTimeout(autoplayTimeout)
  }, [
    activeIndex,
    isInteracting,
    isPointerInside,
    isSmallScreen,
    prefersReducedMotion,
  ])

  const showPrevious = () => {
    setActiveIndex((index) => (index === 0 ? testimonials.length - 1 : index - 1))
  }

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % testimonials.length)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      markInteraction()
      showPrevious()
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      markInteraction()
      showNext()
    }
  }

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    markInteraction()
    touchStartX.current = event.changedTouches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    markInteraction()
    const startX = touchStartX.current
    const endX = event.changedTouches[0]?.clientX
    touchStartX.current = null

    if (startX === null || endX === undefined) return

    const swipeDistance = endX - startX
    if (swipeDistance > 48) showPrevious()
    if (swipeDistance < -48) showNext()
  }

  const handleFocusCapture = () => {
    markInteraction()
  }

  const handleBlurCapture = (event: FocusEvent<HTMLElement>) => {
    if (
      !(event.relatedTarget instanceof Node) ||
      !event.currentTarget.contains(event.relatedTarget)
    ) {
      markInteraction()
    }
  }

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-primary px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      onPointerEnter={() => setIsPointerInside(true)}
      onPointerLeave={() => {
        setIsPointerInside(false)
        markInteraction()
      }}
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-3 text-center sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
            Testimonials
          </p>
          <h2 id="testimonials-heading" className="text-accent">
            Care that brings us closer
          </h2>
        </div>

        <div
          role="group"
          aria-label="Testimonials carousel"
          aria-roledescription="carousel"
          className="testimonial-carousel overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          tabIndex={0}
        >
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map(({ quote, name, role, initials }, index) => (
              <article
                key={name}
                aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
                className="testimonial-slide flex flex-col rounded-2xl bg-white p-6 text-navy shadow-lg shadow-navy/10 sm:p-8 lg:p-9"
              >
                <span className="mb-5 text-4xl font-semibold leading-none text-accent" aria-hidden="true">
                  “
                </span>
                <blockquote className="flex-1 text-base leading-7 text-navy/80 sm:text-lg sm:leading-8">
                  {quote}
                </blockquote>
                <div className="testimonial-meta mt-7 flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary-accessible"
                  >
                    {initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-navy">{name}</p>
                    <p className="mt-1 text-sm text-navy/70">{role}</p>
                  </div>
                  <div
                    role="img"
                    aria-label="5 out of 5 stars"
                    className="testimonial-rating flex shrink-0 gap-0.5 text-accent"
                  >
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <Star
                        key={starIndex}
                        aria-hidden="true"
                        size={16}
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-white">
            Demonstration testimonials, not verified customer endorsements.
          </p>
        </div>

        <div className="mt-5 flex justify-center gap-3 min-[1024px]:hidden">
          {testimonials.map(({ name }, index) => (
            <button
              key={name}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              aria-pressed={activeIndex === index}
              onClick={() => {
                markInteraction()
                setActiveIndex(index)
              }}
              className={`size-3 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                activeIndex === index
                  ? 'bg-accent'
                  : 'bg-white/70 hover:bg-white'
              }`}
            />
          ))}
        </div>

        <div className="mt-10 flex w-full justify-center sm:mt-12">
          <p className="w-full max-w-3xl text-center text-base leading-7 text-white sm:text-lg sm:leading-8">
            Join thousands of families and healthcare professionals using
            CareLoop for better home health management.
          </p>
        </div>

        <div className="mt-7 flex justify-center">
          <Link
            to="/auth/login"
            className="hero-button inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-navy shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Start Monitoring
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
