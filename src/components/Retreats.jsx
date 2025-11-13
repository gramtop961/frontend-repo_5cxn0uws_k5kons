import { motion } from 'framer-motion'
import { BedDouble, Waves, Sailboat, Trees } from 'lucide-react'

const cards = [
  {
    title: 'Oceanfront Suites',
    desc: 'Wake up to sunrise over the waves in premium, modern suites.',
    icon: BedDouble,
    accent: 'from-cyan-400 to-blue-500'
  },
  {
    title: 'Sea Adventures',
    desc: 'Kayaking, sailing, and guided marine wildlife encounters.',
    icon: Sailboat,
    accent: 'from-sky-400 to-cyan-500'
  },
  {
    title: 'Nature Immersion',
    desc: 'Forest bathing, coastal hikes, and mindful meditation by the shore.',
    icon: Trees,
    accent: 'from-emerald-400 to-teal-500'
  },
]

export default function Retreats() {
  return (
    <section id="retreats" className="relative py-24 bg-gradient-to-b from-[#07121F] to-[#081826]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Curated Coastal Retreats</h2>
          <p className="mt-4 text-white/80">Designed for deep rest, connection with nature, and effortless luxury.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="absolute -inset-px bg-gradient-to-br opacity-0 group-hover:opacity-100 transition from-white/10 to-transparent" />
              <div className="relative p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${c.accent} text-white shadow-lg`}>
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-white/80">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
