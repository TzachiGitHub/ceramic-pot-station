import { useLanguage } from '../i18n'
import { classTypes } from '../data/classes'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import type { Language } from '../types'

const langSuffix: Record<Language, string> = { ru: 'Ru', en: 'En', he: 'He' }
function localize(item: Record<string, unknown>, field: string, lang: Language): string {
  return (item[field + langSuffix[lang]] as string) || (item[field + 'En'] as string) || ''
}

const borderColors = ['border-terracotta', 'border-clay', 'border-sage', 'border-terracotta', 'border-clay', 'border-sage']

export default function Classes() {
  const { language, t } = useLanguage()
  const ref = useScrollAnimation()

  return (
    <section id="classes" ref={ref} className="py-20 sm:py-28 bg-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-earth-900 text-center mb-4">
          {t('classes.title')}
        </h2>
        <p className="text-earth-600 text-center text-lg max-w-2xl mx-auto mb-4">
          {t('classes.subtitle')}
        </p>
        <div className="w-16 h-1 bg-terracotta mx-auto mb-14 rounded-full" />

        <div className="space-y-8">
          {classTypes.map((cls, i) => (
            <div
              key={cls.id}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-10 items-center`}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                <span className="text-5xl sm:text-6xl">{cls.icon}</span>
              </div>

              {/* Card */}
              <div className={`flex-1 bg-white rounded-2xl shadow-md p-6 sm:p-8 border-s-4 ${borderColors[i]}`}>
                <h3 className="font-heading text-2xl font-bold text-earth-900 mb-2">
                  {localize(cls as unknown as Record<string, unknown>, 'name', language)}
                </h3>
                <p className="text-earth-600 mb-5 leading-relaxed">
                  {localize(cls as unknown as Record<string, unknown>, 'description', language)}
                </p>

                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-earth-100 text-earth-700 rounded-full text-sm font-medium">
                    ⏱️ {cls.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-earth-100 text-earth-700 rounded-full text-sm font-medium">
                    👥 {cls.groupSize}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-earth-100 text-earth-700 rounded-full text-sm font-medium">
                    💰 ₪{cls.price}
                  </span>
                </div>

                <a
                  href={`https://wa.me/972535678545?text=${encodeURIComponent(localize(cls as unknown as Record<string, unknown>, 'name', language))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#1fb855] transition-colors shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.605-1.467A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.33 0-4.481-.764-6.229-2.055l-.447-.334-2.73.87.914-2.633-.368-.476A9.723 9.723 0 012.25 12 9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12 9.75 9.75 0 0112 21.75z"/></svg>
                  {t('classes.book')} {t('classes.viaWhatsApp')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
