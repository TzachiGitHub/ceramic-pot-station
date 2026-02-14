import { useLanguage } from '../i18n'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const processSteps = ['🧱', '🎡', '🔥', '🎨', '✨']

export default function About() {
  const { t } = useLanguage()
  const ref = useScrollAnimation()

  const stats = [
    { key: 'years', value: '8+', emoji: '🎯' },
    { key: 'students', value: '500+', emoji: '🎓' },
    { key: 'pieces', value: '2000+', emoji: '🏺' },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 bg-cream relative vintage-texture" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 fade-in-up">
          <span className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium">
            {t('about.label')}
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-text text-4xl sm:text-5xl font-bold mt-2">
            {t('about.title')}
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Photo Placeholder */}
          <div className="fade-in-up">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary to-primary-dark overflow-hidden shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-8xl block mb-4 opacity-30">👩‍🎨</span>
                    <span className="text-cream/30 text-sm">{t('about.photoPlaceholder')}</span>
                  </div>
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-terracotta/30 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Story Text */}
          <div className="fade-in-up" style={{ transitionDelay: '150ms' }}>
            <h3 className="font-[family-name:var(--font-heading)] text-text text-2xl sm:text-3xl font-bold mb-6">
              {t('about.storyTitle')}
            </h3>
            <div className="space-y-4 text-text/70 leading-relaxed">
              <p>{t('about.story1')}</p>
              <p>{t('about.story2')}</p>
              <p>{t('about.story3')}</p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="fade-in-up mb-20">
          <h3 className="font-[family-name:var(--font-heading)] text-text text-xl font-bold text-center mb-8">
            {t('about.processTitle')}
          </h3>
          <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
            {processSteps.map((emoji, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-warm-100 border-2 border-warm-200 flex items-center justify-center text-2xl sm:text-3xl shadow-sm hover:shadow-md hover:scale-110 transition-all">
                  {emoji}
                </div>
                {i < processSteps.length - 1 && (
                  <span className="text-warm-300 text-lg">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.key}
              className="fade-in-up text-center p-8 rounded-2xl bg-warm-100 border border-warm-200/50"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-3xl mb-2 block">{stat.emoji}</span>
              <div className="font-[family-name:var(--font-heading)] text-primary text-4xl font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-text/60 text-sm uppercase tracking-wider">
                {t(`about.stat.${stat.key}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
