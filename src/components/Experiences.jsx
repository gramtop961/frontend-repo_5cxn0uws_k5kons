import { motion } from 'framer-motion'
import { Heart, HandHeart, Sparkles, Waves } from 'lucide-react'

const experiences = [
  {
    title: 'Mindful Mornings',
    desc: 'Guided breathwork and sunrise yoga on the beach.',
  },
  {
    title: 'Coastal Wellness',
    desc: 'Sauna & cold plunge rituals with ocean views.',
  },
  {
    title: 'Evening Rituals',
    desc: 'Sound baths and stargazing under clear coastal skies.',
  },
]

export default function Experiences() {
  return (
    <section id="experiences" className="relative py-24 bg-gradient-to-b from-[#081826] to-[#07121F]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_0%,rgba(16,185,129,0.1),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Experiences for Body & Mind</h2>
          <p className="mt-4 text-white/80 max-w-xl">We combine nature, movement, and ritual to bring you back to balance.</p>

          <div className="mt-8 space-y-6">
            {experiences.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-white">{e.title}</h3>
                <p className="mt-1 text-white/80">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-80 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-tr from-cyan-400/20 to-emerald-400/20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_0%_0%,rgba(34,211,238,0.2),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(60deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:24px_24px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Waves className="w-24 h-24 text-cyan-300/70" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
