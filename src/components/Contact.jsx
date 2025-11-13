import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }

    try {
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks! We will get back to you soon.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#06131A] to-[#050F14]">
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Plan Your Escape</h2>
          <p className="mt-4 text-white/80 max-w-xl">Tell us about your ideal coastal retreat and we’ll craft a personalized itinerary.</p>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur space-y-4"
        >
          <div>
            <label className="block text-white/80 text-sm mb-1">Name</label>
            <input name="name" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-white/80 text-sm mb-1">Email</label>
            <input name="email" type="email" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-white/80 text-sm mb-1">Message</label>
            <textarea name="message" required rows="4" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Share your dates and interests..." />
          </div>
          <button className="w-full px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-cyan-50">Send</button>
          {status && <p className="text-white/80 text-sm text-center">{status}</p>}
        </motion.form>
      </div>
    </section>
  )
}
