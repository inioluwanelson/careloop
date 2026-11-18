import { Link } from 'react-router-dom'
import type { UserRole } from '../../types/auth'

const roleLabels: Record<UserRole, string> = {
  patient: 'Patient',
  caregiver: 'Caregiver',
  'healthcare-professional': 'Healthcare Professional',
}

function DashboardPlaceholder({
  title,
  role,
}: {
  title: string
  role?: UserRole
}) {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-navy">
      <section className="max-w-lg text-center">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="mt-4 leading-7">
          This protected dashboard is a placeholder.
          {role && ` It is intended for ${roleLabels[role]}.`} Role assignment
          and role-specific access checks have not been implemented.
        </p>
        <Link className="mt-6 inline-block text-primary underline" to="/">
          Return to CareLoop
        </Link>
      </section>
    </main>
  )
}

export default DashboardPlaceholder
