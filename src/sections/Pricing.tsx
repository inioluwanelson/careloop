import { Building2, Check, ShieldCheck, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Basic Plan',
    description: 'Stay connected to care.',
    price: 'Free',
    Icon: ShieldCheck,
    featured: false,
    features: [
      '1 patient account',
      'Real-time health monitoring',
      '1 caregiver connection',
      'Daily emotional check-ins',
      'Secure messaging',
      'HIPAA-compliant data storage',
    ],
    action: 'Start Free',
    destination: '/auth/sign-up?plan=basic',
  },
  {
    name: 'Family Plan',
    description: 'Caring together, made easy.',
    price: '$19/month',
    Icon: UsersRound,
    featured: true,
    features: [
      'Up to 5 family members',
      'Shared patient profiles',
      '24/7 remote monitoring',
      'Multi-language support',
      'Video calls & reminders',
      'Priority chat with support',
    ],
    action: 'Start 14-Day Free Trial',
    destination: '/auth/sign-up?plan=family',
  },
  {
    name: 'Care Team Plan',
    description: 'For hospitals and care organizations.',
    price: 'Custom Pricing',
    Icon: Building2,
    featured: false,
    features: [
      'Unlimited patient profiles',
      'Admin dashboards',
      'Integration with hospital EHR',
      'Dedicated support team',
      'Enterprise security (HIPAA)',
      'Monthly usage analytics',
    ],
    action: 'Contact Sales',
    destination: '/contact-sales',
  },
]

function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="bg-white px-4 pb-16 pt-8 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center rounded-t-[2rem] bg-primary px-5 pb-36 pt-16 text-center sm:px-10 sm:pt-20 lg:px-16 lg:pt-24">
          <h2 id="pricing-heading" className="w-full max-w-3xl text-white">
            Plans that fit every family and care team.
          </h2>
          <p className="mt-5 w-full max-w-3xl text-center text-base leading-7 text-on-primary sm:text-lg sm:leading-8">
            Transparent pricing for individuals, families, and healthcare
            providers. No hidden fees — just compassionate care made simple.
          </p>
        </div>

        <div className="-mt-24 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {plans.map(({ name, description, price, Icon, featured, features: planFeatures, action, destination }) => (
            <article
              key={name}
              className={`flex h-full flex-col rounded-2xl p-6 shadow-lg sm:p-8 md:last:col-span-2 md:last:w-[calc(50%-0.75rem)] md:last:justify-self-center lg:last:col-span-1 lg:last:w-full ${
                featured
                  ? 'bg-accent text-navy shadow-navy/15'
                  : 'border border-slate-200 bg-white text-navy shadow-navy/10'
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`inline-flex size-12 shrink-0 items-center justify-center rounded-xl ${
                    featured
                      ? 'bg-white/60 text-primary-accessible'
                      : 'bg-primary/10 text-primary-accessible'
                  }`}
                >
                  <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
                </span>
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-xl font-semibold text-navy">{name}</h3>
                  <p className="mt-1 text-sm leading-6 text-navy/70">
                    {description}
                  </p>
                </div>
              </div>

              <p className="mt-7 text-3xl font-semibold tracking-tight text-navy">
                {price}
              </p>

              <ul className="mt-7 flex flex-1 flex-col gap-3.5">
                {planFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-navy/80">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-primary-accessible"
                      size={18}
                      strokeWidth={2.5}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={destination}
                className={`mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-lg px-5 py-3 text-center text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-accessible ${
                  featured
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                {action}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-5 flex w-full justify-center">
          <p className="w-full max-w-3xl text-center text-xs leading-5 text-navy/70">
            Pricing, features, and healthcare-compliance references are
            illustrative demo content, not verified commercial or regulatory
            claims.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center rounded-b-3xl bg-primary px-5 py-10 text-center text-white sm:mt-16 sm:px-10 sm:py-12 lg:px-16">
          <p className="w-full max-w-3xl text-center text-lg font-medium leading-8 text-white sm:text-xl">
            Still unsure which plan is right for you? Start your free trial and
            explore CareLoop with no credit card required.
          </p>
          <Link
            to="/auth/sign-up?plan=family"
            className="mt-7 inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-lg bg-accent px-6 py-3 text-center text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:min-w-72"
          >
            Start 14-Day Free Trial
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Pricing
