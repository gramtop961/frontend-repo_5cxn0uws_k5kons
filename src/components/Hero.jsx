import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0C1630] via-[#0B1E36] to-[#06202A]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white drop-shadow-xl"
        >
          Find Your Calm by the Ocean
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-white/90"
        >
          Boutique retreats, mindful experiences, and soul-soothing stays on the coast.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="mt-8 flex items-center gap-4"
        >
          <a href="#retreats" className="px-6 py-3 rounded-full bg-white text-slate-900 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition">
            Explore Retreats
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full border border-white/30 text-white bg-white/10 backdrop-blur hover:bg-white/20 transition">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
