import { useRef } from 'react'
import { useLanguage } from '../i18n'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Testimonials() {
  const { t } = useLanguage()
  const ref = useScrollAnimation()
  const scrollRef = useRef<HTMLDivElement>(null)

  const testimonials = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    quoteKey: `testimonials.items.${i}.quote`,
    nameKey: `testimonials.items.${i}.name`,
    stars: 5,
  }))

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: dir === 'left' ? -320 : 320,
      behavior: 'smooth',
    })
  }

  return (
    <section className="py-20 sm:py-28 bg-dark relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-terracotta to-clay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 fade-in-up">
          <span className="text-clay text-sm tracking-[0.3em] uppercase font-medium">
            {t('testimonials.label')}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-cream text-4xl sm:text-5xl font-bold mt-2 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative fade-in-up">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x scrollbar-none pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="snap-center flex-shrink-0 w-[300px] sm:w-[350px] bg-cream/95 rounded-2xl p-6 sm:p-8 shadow-lg"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.stars }, (_, i) => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-text/80 text-sm leading-relaxed mb-6 italic">
                  "{t(item.quoteKey)}"
                </p>

                {/* Name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {t(item.nameKey).charAt(0)}
                  </div>
                  <span className="font-semibold text-text text-sm">
                    {t(item.nameKey)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-cream/90 text-dark shadow-md hover:scale-110 transition-transform hidden sm:flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-cream/90 text-dark shadow-md hover:scale-110 transition-transform hidden sm:flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
