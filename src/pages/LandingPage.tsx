import Navbar from '../components/layout/Navbar'
import Hero from '../sections/Hero'
import TrustBar from '../sections/TrustBar'
import Features from '../sections/Features'
import About from '../sections/About'
import Testimonials from '../sections/Testimonials'
import Pricing from '../sections/Pricing'
import Footer from '../components/layout/Footer'
import ContactCTA from '../sections/ContactCTA'

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-navy">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <About />
        <Testimonials />
        <Pricing />
      </main>
      <ContactCTA />
      <Footer />
    </div>
  )
}

export default LandingPage
