import { useEffect, useRef } from 'react'
import { services } from '../data/services'

const ICONS = {
  ac: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="8" rx="2" /><path d="M2 13h20M7 17h10M12 21v-4" />
    </svg>
  ),
  maintenance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  hygiene: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0" /><path d="M12 8v4l3 3" />
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" />
      <path d="M2 12h2M20 12h2M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  ),
  alarm: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  fence: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
}

function ServiceCard({ service }) {
  const waLink = `https://wa.me/5545988114290?text=${encodeURIComponent(service.waMessage)}`
  return (
    <div className="service-card fade-up">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-brand"
        style={{ background: 'linear-gradient(135deg,#e8f1ff,#d0e3ff)' }}>
        <div className="w-[26px] h-[26px]">{ICONS[service.icon]}</div>
      </div>
      <h3 className="font-sora font-bold text-[18px] text-navy mb-2.5">{service.title}</h3>
      <p className="text-[#6b87a0] text-sm leading-[1.7] mb-5">{service.description}</p>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="font-sora text-[13px] font-semibold text-brand no-underline hover:underline"
      >
        Saiba mais →
      </a>
    </div>
  )
}

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    const cards = sectionRef.current?.querySelectorAll('.fade-up')
    cards?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" ref={sectionRef} className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14 fade-up">
          <div className="section-label justify-center">Nossos Serviços</div>
          <h2 className="font-sora font-extrabold text-navy leading-[1.2] mb-4"
            style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)' }}>
            Soluções completas para sua<br />
            <span className="text-brand">residência e empresa</span>
          </h2>
          <p className="text-[#6b87a0] max-w-[520px] mx-auto text-base leading-[1.7]">
            Da instalação à manutenção, oferecemos um portfólio completo com execução técnica de alto nível.
          </p>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
