import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import FeaturedWork from '@/components/sections/FeaturedWork'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <FeaturedWork />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
