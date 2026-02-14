import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n'

const navLinks = ['home', 'gallery', 'classes', 'about', 'contact'] as const

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  const langs: Array<{ code: 'en' | 'ru' | 'he'; label: string }> = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
    { code: 'he', label: 'HE' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary-dark/90 backdrop-blur-md shadow-lg'
          : 'bg-primary-dark/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 group"
          >
            <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">🏺</span>
            <span className="font-[family-name:var(--font-heading)] text-cream text-lg sm:text-xl font-bold tracking-wide">
              {t('siteName')}
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="px-3 py-2 text-cream/80 hover:text-cream text-sm font-medium tracking-wide uppercase transition-colors hover:bg-white/10 rounded-lg"
              >
                {t(`nav.${link}`)}
              </button>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-0.5 ml-4 bg-white/10 rounded-full p-0.5">
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                    language === l.code
                      ? 'bg-terracotta text-cream'
                      : 'text-cream/60 hover:text-cream'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cream p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-cream transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-cream transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-cream transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 space-y-1 bg-primary-dark/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left px-4 py-3 text-cream/80 hover:text-cream hover:bg-white/10 rounded-lg text-sm font-medium uppercase tracking-wide transition-colors"
            >
              {t(`nav.${link}`)}
            </button>
          ))}
          <div className="flex items-center gap-2 px-4 pt-2">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLanguage(l.code); setIsOpen(false) }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  language === l.code
                    ? 'bg-terracotta text-cream'
                    : 'text-cream/60 hover:text-cream bg-white/10'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
