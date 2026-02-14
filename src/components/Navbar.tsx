import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n'
import type { Language } from '../types'

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#classes', label: t('nav.classes') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ]

  const langs: Language[] = ['ru', 'en', 'he']

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-earth-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a href="#" className="font-heading text-xl sm:text-2xl font-bold text-earth-50 hover:text-clay transition-colors">
          Ceramic Pot Station
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-earth-100 hover:text-clay transition-colors relative group text-sm font-medium"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-clay transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* Language switcher */}
          <div className="flex bg-earth-800/60 rounded-full p-0.5 gap-0.5">
            {langs.map(l => (
              <button
                key={l}
                onClick={() => setLanguage(l)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  language === l
                    ? 'bg-terracotta text-white'
                    : 'text-earth-300 hover:text-earth-100'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-50"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-earth-50 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-earth-50 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-earth-50 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-earth-900/98 flex flex-col items-center justify-center gap-8 z-40">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-earth-50 text-3xl font-heading font-semibold hover:text-clay transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 mt-4">
            {langs.map(l => (
              <button
                key={l}
                onClick={() => { setLanguage(l); setMenuOpen(false) }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  language === l ? 'bg-terracotta text-white' : 'border border-earth-500 text-earth-300'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
