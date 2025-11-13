import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Enviando...')

    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value || undefined,
      check_in: e.target.check_in.value || undefined,
      check_out: e.target.check_out.value || undefined,
      guests: e.target.guests.value ? Number(e.target.guests.value) : undefined,
      message: e.target.message.value,
    }

    try {
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('¡Gracias! Te responderemos en breve.')
      e.target.reset()
    } catch (err) {
      setStatus('Algo ha fallado. Inténtalo de nuevo más tarde.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#06131A] to-[#050F14]">
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Consulta disponibilidad</h2>
          <p className="mt-4 text-white/80 max-w-xl">Cuéntanos tus fechas y número de personas y te enviaremos precio y detalles.</p>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 text-sm mb-1">Nombre</label>
              <input name="name" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1">Email</label>
              <input name="email" type="email" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="tu@email.com" />
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1">Teléfono</label>
              <input name="phone" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Opcional" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/80 text-sm mb-1">Entrada</label>
                <input name="check_in" type="date" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-1">Salida</label>
                <input name="check_out" type="date" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1">Huéspedes</label>
              <input name="guests" type="number" min="1" max="12" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="2" />
            </div>
          </div>

          <div>
            <label className="block text-white/80 text-sm mb-1">Mensaje</label>
            <textarea name="message" required rows="4" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Comparte tus fechas y cualquier detalle adicional" />
          </div>
          <button className="w-full px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-cyan-50">Enviar</button>
          {status && <p className="text-white/80 text-sm text-center">{status}</p>}
        </motion.form>
      </div>
    </section>
  )
}
