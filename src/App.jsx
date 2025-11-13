import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Retreats from './components/Retreats'
import Experiences from './components/Experiences'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#050F14]">
      <Navbar />
      <main>
        <Hero />
        <Retreats />
        <Experiences />
        <Gallery />
        <Contact />
        <footer className="py-10 text-center text-white/60 border-t border-white/10 bg-[#050F14]">© {new Date().getFullYear()} Relax by the Ocean. All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
