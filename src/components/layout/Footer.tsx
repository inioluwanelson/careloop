import { AtSign, Camera, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import careLoopLogo from '../../assets/careloop-logo-nobg.png'

const productLinks = [
  { label: 'How It Works', href: '/#features' },
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Testimonials', href: '/#testimonials' },
]

const resourceLinks = [{ label: 'FAQs', href: '/contact#faq' }]

const unavailableResourceItems = [
  'Help Center',
  'Blog',
  'Community',
  'Case Studies',
]

const companyLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/contact' },
]

const companyLinksWithExistingDestination = [
  { label: 'Partnerships', href: '/contact#contact-form' },
]

const unavailableCompanyItems = [
  'Careers',
  'Privacy Policy',
  'Terms of Service',
]

const unavailableProducts = ['Accessibility']

const socialItems = [
  { label: 'Social updates', Icon: Share2 },
  { label: 'Photo updates', Icon: Camera },
  { label: 'Email updates', Icon: AtSign },
]

function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="site-footer bg-white px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl pt-14 pb-10 sm:pt-16 lg:pt-20">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-10 min-[768px]:grid-cols-4 lg:gap-x-4 lg:gap-y-8 min-[1025px]:grid-cols-12 xl:gap-8">
          <div className="col-span-2 flex flex-col items-start text-left min-[768px]:col-span-4 min-[1025px]:col-span-3">
            <Link
              to="/#home"
              aria-label="CareLoop home"
              className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <img src={careLoopLogo} alt="CareLoop" className="h-auto w-40" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-navy/80">
              CareLoop connects patients, caregivers, and healthcare providers
              through compassionate technology. We make care feel closer,
              safer, and smarter.
            </p>
            <ul
              aria-label="Social and update channels"
              className="mt-5 flex items-center gap-4 text-primary"
            >
              {socialItems.map(({ label, Icon }) => (
                <li key={label}>
                  <span
                    aria-label={`${label} channel`}
                    className="inline-flex size-8 items-center justify-center"
                  >
                    <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Products" className="text-left min-[1025px]:col-span-2">
            <h2 className="text-sm font-semibold text-navy">Products</h2>
            <ul className="mt-4 flex flex-col items-start gap-3 text-sm">
              {productLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="inline-flex min-h-9 items-center rounded-sm text-navy/80 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              {unavailableProducts.map((label) => (
                <li key={label} className="text-navy/80">
                  {label}
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources" className="text-left min-[1025px]:col-span-2">
            <h2 className="text-sm font-semibold text-navy">Resources</h2>
            <ul className="mt-4 flex flex-col items-start gap-3 text-sm text-navy/80">
              {resourceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="inline-flex min-h-9 items-center rounded-sm text-navy/80 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              {unavailableResourceItems.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="text-left min-[1025px]:col-span-2">
            <h2 className="text-sm font-semibold text-navy">Company</h2>
            <ul className="mt-4 flex flex-col items-start gap-3 text-sm">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="inline-flex min-h-9 items-center rounded-sm text-navy/80 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              {companyLinksWithExistingDestination.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="inline-flex min-h-9 items-center rounded-sm text-navy/80 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              {unavailableCompanyItems.map((label) => (
                <li key={label} className="text-navy/80">
                  {label}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-start text-left min-[1025px]:col-span-3">
            <h2 className="text-sm font-semibold text-navy">Get started</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-navy/80">
              Join 120+ hospitals and thousands of families using CareLoop for
              better care.
            </p>
            <Link
              to="/auth/login"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-slate-200 pt-6 text-center text-sm text-navy/80 sm:mt-14 lg:flex-row lg:justify-between lg:text-left">
          <p>© {new Date().getFullYear()} CareLoop. All rights reserved.</p>
          <p className="text-primary">Designed with empathy — built for care.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
