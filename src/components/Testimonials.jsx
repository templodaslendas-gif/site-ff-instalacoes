import { useEffect, useRef } from 'react'
import { testimonials } from '../data/testimonials'

function Stars() {
  return (
    <div className="flex items-center gap-0.5 mb-5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function Avatar({ initials, gradient }) {
  return (
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center font-sora font-bold text-[15px] text-white flex-shrink-0 bg-gradient-to-br ${gradient} shadow-md`}
    >
      {initials}
    </div>
  )
}

function TestimonialCard({ item, index }) {
  return (
    <div
      className="testimonial-card-premium fade-up group"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Decorative quote mark */}
      <svg
        className="absolute top-6 right-6 w-12 h-12 text-brand/8 group-hover:text-brand/15 transition-colors duration-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      <Stars />

      <p className="text-[#3d5266] leading-[1.75] text-[15px] sm:text-[16px] mb-6 relative z-10 italic">
        "{item.text}"
      </p>

      <div className="flex items-center gap-3 pt-5 border-t border-[#e2ecf8]">
        <Avatar initials={item.initials} gradient={item.color} />
        <div>
          <div className="font-sora font-bold text-[14px] text-navy">{item.name}</div>
          <div className="text-[12px] text-[#6b87a0] flex items-center gap-1.5 mt-0.5">
            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {item.city}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] relative overflow-hidden">
      {/* Decorative blobs */}
      <div
        className="absolute top-1/4 -left-20 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(245,158,11,0.06) 0%,transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(26,108,245,0.06) 0%,transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto fade-up">
          <div className="section-label justify-center">Depoimentos</div>
          <h2
            className="font-sora font-extrabold text-navy mb-5 leading-[1.15]"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
          >
            O que nossos{' '}
            <span className="bg-gradient-to-r from-brand to-brand-glow bg-clip-text text-transparent">clientes</span>{' '}
            dizem
          </h2>
          <p className="text-[#6b87a0] text-[16px] sm:text-[17px] leading-[1.7]">
            Mais de 7 mil instalações realizadas com a satisfação que entregamos.
          </p>
        </div>

        {/* Trust banner */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mb-14 fade-up">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="0.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <div className="font-sora">
              <div className="font-bold text-navy text-[18px] leading-none">5.0</div>
              <div className="text-[11px] text-[#6b87a0] uppercase tracking-wider mt-1">Avaliação média</div>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-[#e2ecf8]" />
          <div className="font-sora">
            <div className="font-bold text-navy text-[18px] leading-none">7.000+</div>
            <div className="text-[11px] text-[#6b87a0] uppercase tracking-wider mt-1">Instalações realizadas</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-[#e2ecf8]" />
          <div className="font-sora">
            <div className="font-bold text-navy text-[18px] leading-none">18 anos</div>
            <div className="text-[11px] text-[#6b87a0] uppercase tracking-wider mt-1">No mercado</div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} item={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}