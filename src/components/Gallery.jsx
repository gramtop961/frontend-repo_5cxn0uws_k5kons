import { useState } from 'react'
import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1400',
  'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1400',
  'https://images.unsplash.com/photo-1501959915551-4e8d30928317?q=80&w=1400',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400',
]

export default function Gallery() {
  const [active, setActive] = useState(0)

  return (
    <section id="gallery" className="relative py-24 bg-gradient-to-b from-[#07121F] to-[#06131A]">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">Galería</h2>
            <p className="mt-4 text-white/80">Imágenes de referencia del entorno costero y estilo del alojamiento.</p>
          </div>
          <div className="hidden sm:flex gap-2">
            {images.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} aria-label={`Ir a imagen ${i+1}`} className={`w-2 h-2 rounded-full ${active === i ? 'bg-white' : 'bg-white/40'}`}></button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10"
            >
              <img src={src} alt={`Vista costera ${i+1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
