import {
  Activity,
  MessageCircleHeart,
  ChartNoAxesCombined,
} from 'lucide-react'

const features = [
  {
    title: 'Real-Time Health Tracking',
    description:
      'Get automatic updates from wearable devices and vital sensors.',
    Icon: Activity,
  },
  {
    title: 'Emotional Check-Ins',
    description:
      'Patients can message or video chat caregivers anytime.',
    Icon: MessageCircleHeart,
  },
  {
    title: 'Insightful Reports',
    description:
      'Simple dashboards keep families and doctors informed.',
    Icon: ChartNoAxesCombined,
  },
]

function Features() {
  return (
    <section id="features" aria-labelledby="features-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 sm:pt-20 sm:pb-10 lg:px-8 lg:pt-24 lg:pb-12">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary-accessible">
            Care that stays connected
          </p>
          <h2 id="features-heading" className="text-navy">
            Support for every step of care
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:[&>article:last-child]:col-span-2 md:[&>article:last-child]:w-[calc(50%-0.625rem)] md:[&>article:last-child]:justify-self-center lg:gap-6 lg:[&>article:last-child]:w-[calc(50%-0.75rem)] xl:grid-cols-3 xl:[&>article:last-child]:col-span-1 xl:[&>article:last-child]:w-auto xl:[&>article:last-child]:justify-self-stretch">
          {features.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="feature-card group flex h-full flex-col items-center rounded-2xl border border-transparent bg-white px-6 py-8 text-center shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/5 sm:px-8 sm:py-9"
            >
              <span className="mb-6 inline-flex size-16 items-center justify-center rounded-2xl border border-accent/70 bg-accent/15 text-primary-accessible transition-colors duration-200 group-hover:bg-accent/25">
                <Icon aria-hidden="true" size={30} strokeWidth={1.8} />
              </span>
              <h3 className="text-xl font-semibold text-navy">{title}</h3>
              <p className="mt-3 max-w-sm text-base leading-7 text-navy/70">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
