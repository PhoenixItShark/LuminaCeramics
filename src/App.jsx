import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Collections from './components/Collections'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text antialiased">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Collections />
        <Process />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
