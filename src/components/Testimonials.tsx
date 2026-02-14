import { useState } from 'react'
import { useLanguage } from '../i18n'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const testimonialKeys = [1, 2, 3, 4, 5]

export default function Testimonials() {
  const { t } = useLanguage()
  const ref = useScrollAnimation()
  const [active, setActive] = useState(0)

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-earth-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-earth-50 text-center mb-4">
          {t('testimonials.title')}
        </h2>
        <div className="w-16 h-1 bg-terracotta mx-auto mb-14 rounded-full" />

        {/* Decorative quote */}
        <div className="text-center text-terracotta/30 text-[120px] leading-none font-heading -mb-16 select-none">"</div>

        {/* Scrollable cards */}
        <div className="flex gap-6 overflow-x-auto snap-x pb-6 scrollbar-hide -mx-4 px-4">
          {testimonialKeys.map((k, i) => (
            <div
              key={k}
              className="snap-center flex-shrink-0 w-[85vw] sm:w-[400px] bg-earth-800 rounded-2xl p-6 sm:p-8"
            >
              {/* Stars */}
              <div className="text-yellow-400 text-lg mb-4">★★★★★</div>

              <p className="text-earth-200 italic leading-relaxed mb-6">
                {t(`testimonials.${k}.text`)}
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar initial */}
                <div className="w-10 h-10 rounded-full bg-terracotta text-white flex items-center justify-center font-bold text-sm">
                  {t(`testimonials.${k}.name`).charAt(0)}
                </div>
                <span className="text-earth-100 font-medium">{t(`testimonials.${k}.name`)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonialKeys.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                active === i ? 'bg-terracotta w-6' : 'bg-earth-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
