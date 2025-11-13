import { motion } from 'framer-motion'
import { MapPin, Ship, UtensilsCrossed, Camera } from 'lucide-react'

const experiences = [
  {
    title: 'Paseos por el paseo marítimo',
    desc: 'Cafés acogedores, mercadillos y atardeceres dorados a pocos pasos.',
    icon: MapPin,
  },
  {
    title: 'Excursiones en barco',
    desc: 'Avistamiento de delfines y calas escondidas con aguas turquesa.',
    icon: Ship,
  },
  {
    title: 'Gastronomía local',
    desc: 'Pescado fresco, arroces y marisco en restaurantes frente al mar.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Rincones fotogénicos',
    desc: 'Faros, miradores y senderos costeros para tus mejores recuerdos.',
    icon: Camera,
  },
]

export default function Experiences() {
  return (
    <section id="experiences" className="relative py-24 bg-gradient-to-b from-[#081826] to-[#07121F]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_0%,rgba(16,185,129,0.1),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Alrededores</h2>
          <p className="mt-4 text-white/80 max-w-xl">Descubre planes cerca del apartamento para una escapada perfecta.</p>

          <div className="mt-8 space-y-6">
            {experiences.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur flex items-start gap-3"
              >
                <e.icon className="w-5 h-5 text-emerald-300 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{e.title}</h3>
                  <p className="mt-1 text-white/80">{e.desc}</p>
                </div>
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
            <span className="text-cyan-100/80 text-lg">Costa Azul</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
