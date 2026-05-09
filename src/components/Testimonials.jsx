import { useEffect, useRef } from 'react'
import { testimonials } from '../data/testimonials'

function Stars() {
  return <div className="text-amber-400 text-sm tracking-[2px]">★★★★★</div>
}

function Avatar({ initials, gradient }) {
  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center font-sora font-bold text-sm text-white flex-shrink-0 bg-gradient-to-br ${gradient}`}
    >
      {initials}
    </div>
  )
}

function TestimonialCard({ item }) {
  return (
    <div className="testimonial-card fade-up">
      <Stars />
      <p className="text-[#4a6070] leading-[1.8] text-[15px] my-4 relative z-10">
        {item.text}
      </p>
      <div className="flex items-center gap-3 border-t border-[#e2ecf8] pt-4">
        <Avatar initials={item.initials} gradient={item.color} />
        <div>
          <div className="font-sora font-semibold text-sm text-navy">{item.name}</div>
          <div className="text-xs text-[#6b87a0]">{item.city}</div>
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
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 120)
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
    <section ref={ref} className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14 fade-up">
          <div className="section-label justify-center">Depoimentos</div>
          <h2
            className="font-sora font-extrabold text-navy mb-4"
            style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}
          >
            O que nossos clientes{' '}
            <span className="text-brand">dizem</span>
          </h2>
          <p className="text-[#6b87a0] max-w-[480px] mx-auto text-base">
            Satisfação comprovada em cada projeto entregue.
          </p>
        </div>

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} item={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
