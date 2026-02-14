import { useState } from 'react'
import { useLanguage } from '../i18n'
import { galleryItems } from '../data/gallery'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import type { Language, Category } from '../types'

const langSuffix: Record<Language, string> = { ru: 'Ru', en: 'En', he: 'He' }
function localize(item: Record<string, unknown>, field: string, lang: Language): string {
  return (item[field + langSuffix[lang]] as string) || (item[field + 'En'] as string) || ''
}

const categoryIcons: Record<Category, string> = {
  mugs: '☕',
  bowls: '🥣',
  vases: '🏺',
  decorative: '🎭',
  sets: '🍽️',
}

const categories: ('all' | Category)[] = ['all', 'mugs', 'bowls', 'vases', 'decorative', 'sets']

export default function Gallery() {
  const { language, t } = useLanguage()
  const [filter, setFilter] = useState<'all' | Category>('all')
  const ref = useScrollAnimation()

  const filtered = filter === 'all' ? galleryItems : galleryItems.filter(i => i.category === filter)

  return (
    <section id="gallery" ref={ref} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="font-heading text-4xl sm:text-5xl font-bold text-earth-900 text-center mb-4">
        {t('gallery.title')}
      </h2>
      <div className="w-16 h-1 bg-terracotta mx-auto mb-10 rounded-full" />

      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              filter === cat
                ? 'bg-earth-900 text-earth-50 shadow-md'
                : 'bg-earth-200 text-earth-700 hover:bg-earth-300'
            }`}
          >
            {cat === 'all' ? t('gallery.filter.all') : `${categoryIcons[cat]} ${t(`gallery.filter.${cat}`)}`}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="masonry stagger visible">
        {filtered.map((item) => {
          const heights = { mugs: 'h-56', bowls: 'h-48', vases: 'h-72', decorative: 'h-56', sets: 'h-64' }
          return (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              {/* Colored placeholder */}
              <div
                className={`${heights[item.category]} flex items-center justify-center`}
                style={{ backgroundColor: item.imagePlaceholder }}
              >
                <span className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-300">
                  {categoryIcons[item.category]}
                </span>
              </div>

              {/* Info bar */}
              <div className="bg-white p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-heading font-semibold text-earth-900 text-lg leading-tight">
                    {localize(item as unknown as Record<string, unknown>, 'title', language)}
                  </h3>
                  <span className="font-bold text-terracotta whitespace-nowrap ms-2">₪{item.price}</span>
                </div>
                <span className="inline-block text-xs font-medium bg-earth-100 text-earth-600 px-2 py-0.5 rounded-full">
                  {categoryIcons[item.category]} {t(`gallery.filter.${item.category}`)}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-earth-900/80 flex flex-col items-center justify-center p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-earth-100 text-center text-sm mb-4 leading-relaxed">
                  {localize(item as unknown as Record<string, unknown>, 'description', language)}
                </p>
                <a
                  href={`https://wa.me/972535678545?text=${encodeURIComponent(localize(item as unknown as Record<string, unknown>, 'title', language))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#25D366] text-white font-semibold rounded-full text-sm hover:bg-[#1fb855] transition-colors"
                >
                  💬 {t('common.whatsappUs')}
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
