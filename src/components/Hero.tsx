import { useLanguage } from '../i18n'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-earth-900">
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-earth-900 via-earth-800 to-[#2a1f12]" />

      {/* Decorative SVG shapes */}
      <svg className="absolute top-20 left-10 w-32 h-32 text-clay/10 rotate-12" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="70" rx="40" ry="20" />
        <ellipse cx="50" cy="50" rx="30" ry="40" />
      </svg>
      <svg className="absolute bottom-32 right-16 w-40 h-40 text-terracotta/8 -rotate-6" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 10 C30 10 20 30 20 50 C20 75 35 90 50 90 C65 90 80 75 80 50 C80 30 70 10 50 10Z" />
      </svg>
      <svg className="absolute top-1/3 right-1/4 w-24 h-24 text-sage/10 rotate-45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
        <circle cx="50" cy="50" r="40" />
        <circle cx="50" cy="50" r="25" />
        <circle cx="50" cy="50" r="10" />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-earth-50 leading-tight mb-6 animate-fade-in-up">
          {t('hero.tagline')}
        </h1>
        <p className="text-earth-300 text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#classes"
            className="px-8 py-4 bg-terracotta text-white font-semibold rounded-full hover:bg-terracotta/80 transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {t('common.bookNow')}
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 border-2 border-earth-400 text-earth-200 font-semibold rounded-full hover:bg-earth-400/20 transition-all text-lg"
          >
            {t('common.learnMore')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-10 text-earth-400" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="1" width="22" height="38" rx="11" />
          <circle cx="12" cy="12" r="3" fill="currentColor">
            <animate attributeName="cy" values="12;24;12" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </section>
  )
}
