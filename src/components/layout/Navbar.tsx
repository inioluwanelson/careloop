import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import careLoopLogo from '../../assets/careloop-logo-nobg.png'

const navigationLinks = [
  { label: 'Home', to: '/', activePath: '#home' },
  { label: 'Features', to: '/#features', activePath: '#features' },
  { label: 'Pricing', to: '/#pricing', activePath: '#pricing' },
  { label: 'About Us', to: '/#about', activePath: '#about' },
  { label: 'Contact Us', to: '/contact', activePath: '/contact' },
]

function Navbar() {
  const location = useLocation()
  const activeHref =
    location.pathname === '/contact'
      ? '/contact'
      : location.hash || '#home'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMobileMenuOpen])

  const handleNavigation = () => {
    setIsMobileMenuOpen(false)
  }

  const linkClassName = (isActive: boolean) =>
    `navbar-link relative rounded-md px-2 py-2 text-sm font-medium text-navy transition-colors hover:text-navy/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-6 after:-translate-x-1/2 after:rounded-full after:bg-accent after:transition-transform after:duration-200 after:content-[''] ${
      isActive ? 'after:scale-x-100' : 'after:scale-x-0'
    }`

  return (
    <header className="animate-fade-down sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:min-h-20 lg:px-8"
      >
        <Link
          to="/"
          onClick={handleNavigation}
          className="inline-flex shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          aria-label="CareLoop home"
        >
          <span className="relative block h-10 w-[150px] overflow-hidden sm:w-[180px]">
            <img
              src={careLoopLogo}
              alt="CareLoop"
              className="absolute left-0 top-1/2 w-[150px] max-w-none -translate-y-1/2 sm:w-[180px]"
            />
          </span>
        </Link>

        <div className="hidden shrink-0 items-center gap-1 min-[900px]:flex xl:gap-3">
          {navigationLinks.map(({ label, to, activePath }) => {
            const isActive = activeHref === activePath
            return (
              <Link
                key={label}
                to={to}
                onClick={handleNavigation}
                className={`${linkClassName(isActive)} whitespace-nowrap`}
                aria-current={isActive ? 'location' : undefined}
              >
                {label}
              </Link>
            )
          })}
        </div>

        <Link
          to="/auth/login"
          className="hidden shrink-0 whitespace-nowrap rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary min-[900px]:inline-flex"
        >
          Start Monitoring
        </Link>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-primary-accessible transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary min-[900px]:hidden"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          {isMobileMenuOpen ? (
            <X aria-hidden="true" size={22} />
          ) : (
            <Menu aria-hidden="true" size={22} />
          )}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        hidden={!isMobileMenuOpen}
        className="absolute inset-x-0 top-full border-b border-slate-200 bg-white px-4 pb-5 pt-2 shadow-lg sm:px-6 lg:hidden"
      >
        <div className="mx-auto flex max-w-7xl flex-col">
          {navigationLinks.map(({ label, to, activePath }) => {
            const isActive = activeHref === activePath
            return (
              <Link
                key={label}
                to={to}
                onClick={handleNavigation}
                className={`${linkClassName(isActive)} self-start`}
                aria-current={isActive ? 'location' : undefined}
              >
                {label}
              </Link>
            )
          })}
          <Link
            to="/auth/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-3 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Start Monitoring
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
