import { useLanguage } from '../i18n'

export default function Hero() {
  const { t } = useLanguage()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient (placeholder for image) */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          background: `
            linear-gradient(135deg, 
              #3D2B1F 0%, 
              #5C4033 20%, 
              #8B6F47 40%, 
              #C67B5C 60%, 
              #D4A574 80%, 
              #8B6F47 100%
            )`,
        }}
      />

      {/* Animated clay circles in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-terracotta/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full bg-clay/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-cream/5 blur-2xl" />
      </div>

      {/* Vintage texture overlay */}
      <div className="vintage-texture absolute inset-0" />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-dark/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Small decorative element */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="block w-12 h-px bg-clay/60" />
          <span className="text-clay text-sm tracking-[0.3em] uppercase font-medium">
            {t('hero.subtitle')}
          </span>
          <span className="block w-12 h-px bg-clay/60" />
        </div>

        {/* Main heading */}
        <h1 className="font-[family-name:var(--font-heading)] text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6">
          {t('hero.title')}
        </h1>

        {/* Tagline */}
        <p className="text-cream/80 text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto mb-4 leading-relaxed">
          {t('hero.tagline')}
        </p>

        {/* Description */}
        <p className="text-cream/60 text-sm sm:text-base max-w-xl mx-auto mb-10">
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('gallery')}
            className="group px-8 py-4 bg-terracotta hover:bg-terracotta/90 text-cream rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {t('hero.cta.gallery')}
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            onClick={() => scrollTo('classes')}
            className="px-8 py-4 border-2 border-cream/40 hover:border-cream/80 text-cream rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-cream/10 hover:scale-105"
          >
            {t('hero.cta.classes')}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scrollTo('gallery')}
          className="flex flex-col items-center gap-2 text-cream/50 hover:text-cream/80 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">{t('hero.scroll')}</span>
          <div className="w-5 h-8 border-2 border-cream/30 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-cream/50 rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  )
}
