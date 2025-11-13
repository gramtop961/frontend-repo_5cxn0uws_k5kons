import { motion } from 'framer-motion'
import { BedDouble, ShowerHead, Wifi, Waves, UtensilsCrossed, Car } from 'lucide-react'

const cards = [
  {
    title: 'Dormitorio principal',
    desc: 'Cama doble, ropa de cama de calidad hotelera y balcón con vista al mar.',
    icon: BedDouble,
    accent: 'from-cyan-400 to-blue-500'
  },
  {
    title: 'Baño moderno',
    desc: 'Ducha tipo lluvia, toallas suaves y amenities ecológicos.',
    icon: ShowerHead,
    accent: 'from-sky-400 to-cyan-500'
  },
  {
    title: 'Wi‑Fi rápido',
    desc: 'Ideal para trabajar en remoto o compartir tus recuerdos al instante.',
    icon: Wifi,
    accent: 'from-emerald-400 to-teal-500'
  },
  {
    title: 'Frente al océano',
    desc: 'A 2 minutos andando de la playa, con sonido de olas de fondo.',
    icon: Waves,
    accent: 'from-blue-400 to-indigo-500'
  },
  {
    title: 'Cocina equipada',
    desc: 'Electrodomésticos, cafetera y menaje completo para estancias cortas.',
    icon: UtensilsCrossed,
    accent: 'from-teal-400 to-emerald-500'
  },
  {
    title: 'Parking cercano',
    desc: 'Aparcamiento en la zona y fácil acceso al edificio.',
    icon: Car,
    accent: 'from-cyan-500 to-sky-500'
  },
]

export default function Retreats() {
  return (
    <section id="retreats" className="relative py-24 bg-gradient-to-b from-[#07121F] to-[#081826]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">El apartamento</h2>
          <p className="mt-4 text-white/80">Todo lo que necesitas para desconectar junto al mar y sentirte como en casa.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
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
