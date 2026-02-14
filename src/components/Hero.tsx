import { useLanguage } from '../i18n'

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={`${BASE}images/hero-collection.jpg`}
          alt="Anna's handmade ceramics collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="block w-12 h-px bg-clay/60" />
          <span className="text-clay text-sm tracking-[0.3em] uppercase font-medium">
            {t('hero.subtitle')}
          </span>
          <span className="block w-12 h-px bg-clay/60" />
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
          {t('hero.tagline')}
        </h1>
        <p className="text-white/70 text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#gallery"
            className="group px-8 py-4 bg-terracotta text-white font-semibold rounded-full hover:bg-terracotta/80 transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {t('hero.cta.gallery')}
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#classes"
            className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-lg"
          >
            {t('hero.cta.classes')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#gallery" className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors">
          <span className="text-xs tracking-widest uppercase">{t('hero.scroll')}</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  )
}
