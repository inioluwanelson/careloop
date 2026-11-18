import { Building2, Languages, Radio, ShieldCheck } from 'lucide-react'

const trustItems = [
  { label: 'HIPAA Compliant', Icon: ShieldCheck },
  { label: 'Trusted by 120+ Hospitals', Icon: Building2 },
  { label: '24/7 Remote Monitoring', Icon: Radio },
  { label: 'Multi-language Support', Icon: Languages },
]

function TrustBar() {
  return (
    <aside
      aria-label="CareLoop trust and support information"
      className="trust-bar overflow-hidden bg-primary text-white"
    >
      <ul className="mx-auto hidden max-w-7xl grid-cols-4 px-4 sm:px-6 min-[1024px]:grid xl:px-8">
        {trustItems.map(({ label, Icon }, index) => (
          <li
            key={label}
            className={`flex min-h-[4.5rem] items-center justify-center gap-3 whitespace-nowrap border-white/25 py-4 text-center text-sm font-medium min-[1024px]:px-2 min-[1280px]:px-3 min-[1024px]:border-r ${
              index === trustItems.length - 1 ? 'min-[1024px]:border-r-0' : ''
            }`}
          >
            <Icon aria-hidden="true" className="shrink-0" size={19} />
            <span>{label}</span>
          </li>
        ))}
      </ul>

      <div
        aria-label="Trust information ticker"
        className="trust-bar-ticker overflow-hidden py-4 min-[1024px]:hidden"
        role="region"
        tabIndex={0}
      >
        <div className="trust-ticker-track flex w-max">
          {[false, true].map((isDuplicate) => (
            <ul
              key={isDuplicate ? 'duplicate' : 'original'}
              aria-hidden={isDuplicate || undefined}
              className="trust-ticker-group flex shrink-0 items-center gap-8 pr-8"
            >
              {trustItems.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="flex shrink-0 items-center gap-3 whitespace-nowrap text-sm font-medium"
                >
                  <Icon aria-hidden="true" className="shrink-0" size={19} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default TrustBar
