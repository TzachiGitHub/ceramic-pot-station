import { useLanguage } from '../i18n'
import type { Language } from '../types'

export default function Footer() {
  const { language, setLanguage, t } = useLanguage()
  const langs: Language[] = ['ru', 'en', 'he']

  return (
    <footer className="bg-earth-900 text-earth-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-earth-50 mb-3">Ceramic Pot Station</h3>
            <p className="text-earth-400 text-sm leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-earth-100 mb-4">{t('nav.home')}</h4>
            <ul className="space-y-2 text-sm">
              {['gallery', 'classes', 'about', 'contact'].map(k => (
                <li key={k}>
                  <a href={`#${k}`} className="text-earth-400 hover:text-clay transition-colors">
                    {t(`nav.${k}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-earth-100 mb-4">{t('footer.social')}</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/972535678545"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-earth-400 hover:text-[#25D366] transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.605-1.467A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.33 0-4.481-.764-6.229-2.055l-.447-.334-2.73.87.914-2.633-.368-.476A9.723 9.723 0 012.25 12 9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12 9.75 9.75 0 0112 21.75z"/></svg>
                WhatsApp
              </a>
              <a
                href="https://instagram.com/ceramic_pot_station/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-earth-400 hover:text-pink-400 transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Instagram
              </a>
            </div>
          </div>

          {/* Language */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-earth-100 mb-4">Language</h4>
            <div className="flex gap-2">
              {langs.map(l => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    language === l ? 'bg-terracotta text-white' : 'bg-earth-800 text-earth-400 hover:text-earth-200'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-earth-800 mt-12 pt-8 text-center text-earth-500 text-sm">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
