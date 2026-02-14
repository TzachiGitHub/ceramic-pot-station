import { useLanguage } from '../i18n'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const { t } = useLanguage()
  const ref = useScrollAnimation()

  return (
    <section id="contact" className="py-20 sm:py-28 bg-warm-100 relative vintage-texture" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 fade-in-up">
          <span className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium">
            {t('contact.label')}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-text text-4xl sm:text-5xl font-bold mt-2 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-text/60 max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="fade-in-up space-y-6">
            {/* WhatsApp - Big and prominent */}
            <a
              href="https://wa.me/972535678545"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-[#25D366] hover:bg-[#20BD5A] rounded-2xl text-white transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] group"
            >
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.838-6.313-2.236l-.44-.36-2.642.886.886-2.642-.36-.44A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg">{t('contact.whatsapp')}</div>
                <div className="text-white/80 text-sm">{t('contact.whatsappSub')}</div>
              </div>
              <span className="ml-auto text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ceramic_pot_station/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-cream rounded-2xl border border-warm-200 hover:border-terracotta/30 transition-all duration-300 hover:shadow-md group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-text">{t('contact.instagram')}</div>
                <div className="text-text/50 text-sm">@ceramic_pot_station</div>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-5 bg-cream rounded-2xl border border-warm-200">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
                📍
              </div>
              <div>
                <div className="font-semibold text-text">{t('contact.location')}</div>
                <div className="text-text/50 text-sm">{t('contact.locationDetail')}</div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-4 p-5 bg-cream rounded-2xl border border-warm-200">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
                🕐
              </div>
              <div>
                <div className="font-semibold text-text">{t('contact.hours')}</div>
                <div className="text-text/50 text-sm">{t('contact.hoursDetail')}</div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="fade-in-up" style={{ transitionDelay: '150ms' }}>
            <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-warm-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27040.36!2d34.8!3d32.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a0a8c35e5cd%3A0x7e20ccb0f4560fed!2sRamat%20Gan!5e0!3m2!1sen!2sil!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
