import { useLanguage } from '../i18n'
import { classTypes } from '../data/classes'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import type { Language } from '../types'

const langSuffix: Record<Language, string> = { ru: 'Ru', en: 'En', he: 'He' }
function localize(item: Record<string, unknown>, field: string, lang: Language): string {
  return (item[field + langSuffix[lang]] as string) || (item[field + 'En'] as string) || ''
}

export default function Classes() {
  const { language, t } = useLanguage()
  const ref = useScrollAnimation()

  return (
    <section id="classes" className="py-20 sm:py-28 bg-warm-100 relative vintage-texture" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 fade-in-up">
          <span className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium">
            {t('classes.label')}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-text text-4xl sm:text-5xl font-bold mt-2 mb-4">
            {t('classes.title')}
          </h2>
          <p className="text-text/60 max-w-xl mx-auto">
            {t('classes.subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {classTypes.map((cls, i) => (
            <div
              key={cls.id}
              className="fade-in-up bg-cream rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-warm-200/50 hover:-translate-y-1 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{cls.icon}</div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-heading)] text-text text-xl font-bold mb-2">
                {localize(cls as unknown as Record<string, unknown>, 'name', language)}
              </h3>

              {/* Description */}
              <p className="text-text/60 text-sm leading-relaxed mb-5">
                {localize(cls as unknown as Record<string, unknown>, 'description', language)}
              </p>

              {/* Details */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-text/70">
                  <span>⏱</span>
                  <span>{cls.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text/70">
                  <span>👥</span>
                  <span>{cls.groupSize}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-terracotta">
                  <span>💰</span>
                  <span>₪{cls.price}</span>
                </div>
              </div>

              {/* Book Button */}
              <a
                href={`https://wa.me/972535678545?text=${encodeURIComponent(
                  t('classes.whatsappMessage').replace('{class}', localize(cls as unknown as Record<string, unknown>, 'name', language))
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-cream rounded-full text-sm font-semibold transition-all duration-300 group-hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.838-6.313-2.236l-.44-.36-2.642.886.886-2.642-.36-.44A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                {t('classes.book')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
