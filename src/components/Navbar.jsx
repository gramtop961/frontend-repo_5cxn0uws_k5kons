import { useState, useEffect } from 'react'
import { Menu, X, Waves, Leaf, Shell } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Retreats', href: '#retreats' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={classNames(
      'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
      scrolled ? 'backdrop-blur-xl bg-white/10 border-b border-white/10' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <Waves className="h-6 w-6 text-cyan-300 drop-shadow" />
              <Leaf className="h-3 w-3 text-emerald-300 absolute -right-1 -bottom-1" />
            </div>
            <span className="font-semibold text-white drop-shadow-sm tracking-wide group-hover:text-cyan-100 transition-colors">Relax by the Ocean</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/20 transition">
              Book Now
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden backdrop-blur-lg bg-white/10 border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-white/90 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md bg-white/10 text-white border border-white/20 text-center">
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
