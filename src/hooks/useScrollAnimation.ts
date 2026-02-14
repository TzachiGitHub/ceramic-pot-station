import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('section-hidden')
          el.classList.add('section-visible')
          // Also trigger stagger children
          el.querySelectorAll('.stagger').forEach(s => s.classList.add('visible'))
        }
      },
      { threshold: 0.1 }
    )

    el.classList.add('section-hidden')
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
