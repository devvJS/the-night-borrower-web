import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Features from '../components/Features/Features'
import Characters from '../components/Characters/Characters'
import Screenshots from '../components/Screenshots/Screenshots'
import Devlog from '../components/Devlog/Devlog'
import Wishlist from '../components/Wishlist/Wishlist'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <main className="pt-16">
        <Hero />
        <About />
        <Features />
        <Characters />
        <Screenshots />
        <Devlog />
        <Wishlist />
      </main>
      <Footer />
    </>
  )
}
