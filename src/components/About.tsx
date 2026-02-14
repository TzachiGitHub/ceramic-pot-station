import { useLanguage } from '../i18n'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const processSteps = [
  { emoji: '🧱', label: { ru: 'Глина', en: 'Clay', he: 'חימר' } },
  { emoji: '🤲', label: { ru: 'Форма', en: 'Shape', he: 'עיצוב' } },
  { emoji: '🔥', label: { ru: 'Обжиг', en: 'Fire', he: 'שריפה' } },
  { emoji: '🎨', label: { ru: 'Глазурь', en: 'Glaze', he: 'זיגוג' } },
  { emoji: '✨', label: { ru: 'Искусство', en: 'Art', he: 'אומנות' } },
]

export default function About() {
  const { language, t } = useLanguage()
  const ref = useScrollAnimation()

  return (
    <section id="about" ref={ref} className="py-20 sm:py-28 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-earth-900 text-center mb-4">
          {t('about.title')}
        </h2>
        <div className="w-16 h-1 bg-terracotta mx-auto mb-14 rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Photo placeholder — 2 cols */}
          <div className="lg:col-span-2 relative">
            <div className="relative">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}images/studio-interior.jpg`}
                  alt="Ceramic Pot Station studio"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative offset border */}
              <div className="absolute -bottom-4 -end-4 w-full h-full border-2 border-terracotta rounded-2xl -z-10" />
            </div>
          </div>

          {/* Story — 3 cols */}
          <div className="lg:col-span-3">
            <p className="text-earth-700 text-lg leading-relaxed whitespace-pre-line">
              {t('about.story')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { num: '8+', label: { ru: 'лет опыта', en: 'years', he: 'שנים' } },
                { num: '500+', label: { ru: 'учеников', en: 'students', he: 'תלמידים' } },
                { num: '1000+', label: { ru: 'изделий', en: 'pieces', he: 'יצירות' } },
              ].map(s => (
                <div key={s.num} className="text-center bg-white rounded-xl p-5 shadow-sm">
                  <div className="font-heading text-3xl font-bold text-terracotta">{s.num}</div>
                  <div className="text-earth-600 text-sm mt-1">{s.label[language]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process timeline */}
        <div className="mt-20">
          <div className="flex items-center justify-between max-w-3xl mx-auto relative">
            {/* Connecting line */}
            <div className="absolute top-6 inset-x-0 h-0.5 bg-earth-300" />

            {processSteps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center z-10">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-2xl border-2 border-earth-200">
                  {step.emoji}
                </div>
                <span className="text-earth-700 text-xs sm:text-sm font-medium mt-2">{step.label[language]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
