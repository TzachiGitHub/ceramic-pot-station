import { useState } from 'react'
import { useLanguage } from '../i18n'
import { galleryItems } from '../data/gallery'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import type { Language } from '../types'

const langSuffix: Record<Language, string> = { ru: 'Ru', en: 'En', he: 'He' }
function localize(item: Record<string, unknown>, field: string, lang: Language): string {
  return (item[field + langSuffix[lang]] as string) || (item[field + 'En'] as string) || ''
}

const PLACEHOLDER_COLORS = [
  '#8B6F47', '#C67B5C', '#D4A574', '#5C4033', '#A0845C',
  '#B8956A', '#9B7653', '#C4956A', '#7D6242', '#B07D56',
]

export default function Gallery() {
  const { language, t } = useLanguage()
  const ref = useScrollAnimation()
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = ['all', ...new Set(galleryItems.map((item) => item.category))]

  const filtered =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream relative vintage-texture" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 fade-in-up">
          <span className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium">
            {t('gallery.label')}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-text text-4xl sm:text-5xl font-bold mt-2 mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-text/60 max-w-xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 fade-in-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-cream shadow-md'
                  : 'bg-warm-100 text-text/70 hover:bg-warm-200'
              }`}
            >
              {t(`gallery.category.${cat}`)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="fade-in-up group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 bg-warm-100">
                {/* Placeholder image */}
                <div
                  className="aspect-[4/5] transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundColor: PLACEHOLDER_COLORS[i % PLACEHOLDER_COLORS.length],
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl opacity-30">🏺</span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                  <p className="text-cream/90 text-center text-sm leading-relaxed mb-4">
                    {localize(item as unknown as Record<string, unknown>, 'description', language)}
                  </p>
                  <a
                    href={`https://wa.me/972535678545?text=${encodeURIComponent(
                      t('gallery.whatsappMessage').replace('{item}', localize(item as unknown as Record<string, unknown>, 'title', language))
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.838-6.313-2.236l-.44-.36-2.642.886.886-2.642-.36-.44A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                    </svg>
                    {t('gallery.contact')}
                  </a>
                </div>

                {/* Item info */}
                <div className="p-4">
                  <h3 className="font-[family-name:var(--font-heading)] text-text font-semibold text-lg">
                    {localize(item as unknown as Record<string, unknown>, 'title', language)}
                  </h3>
                  <p className="text-terracotta font-semibold mt-1">
                    ₪{item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
