import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-navy">
      <section className="text-center">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="mt-4">The page you requested does not exist.</p>
        <Link className="mt-6 inline-block text-primary underline" to="/">
          Return to CareLoop
        </Link>
      </section>
    </main>
  )
}

export default NotFoundPage
