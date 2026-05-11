import { useEffect, useRef } from 'react'
import { services } from '../data/services'

const ICONS = {
  ac: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="9" rx="2" />
      <path d="M2 14h20M7 18h10M12 22v-4" />
      <line x1="6" y1="8" x2="6" y2="9" /><line x1="10" y1="8" x2="10" y2="9" />
      <line x1="14" y1="8" x2="14" y2="9" /><line x1="18" y1="8" x2="18" y2="9" />
    </svg>
  ),
  maintenance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  hygiene: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 8v8c0 4.5 3.5 8 8 8s8-3.5 8-8V8l-8-6z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  infra: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="5" rx="1" />
      <path d="M4 8v13M20 8v13M8 8v8a2 2 0 004 0V8M12 16h4" />
      <line x1="4" y1="14" x2="8" y2="14" />
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7l4-3h10l4 3v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
      <circle cx="12" cy="13" r="4" />
      <circle cx="12" cy="13" r="1.5" fill="currentColor" />
    </svg>
  ),
  fence: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21V8l4-3 4 3 4-3 4 3v13" />
      <line x1="4" y1="13" x2="20" y2="13" />
      <line x1="8" y1="5" x2="8" y2="21" />
      <line x1="12" y1="5" x2="12" y2="21" />
      <line x1="16" y1="5" x2="16" y2="21" />
    </svg>
  ),
}

const CATEGORY_STYLES = {
  Climatização: 'bg-blue-50 text-brand border-blue-100',
  Segurança: 'bg-orange-50 text-orange-600 border-orange-100',
}

// ── MARCAS (carrossel azul inline, logo abaixo dos cards) ──
const BRANDS = [
  'LG', 'Samsung', 'Gree', 'Midea', 'Springer', 'TCL',
  'Philco', 'Electrolux', 'Intelbras', 'HiLook', 'Hikvision',
]
const LOOP_BRANDS = [...BRANDS, ...BRANDS]

function BrandsCarousel() {
  return (
    <div
      className="relative overflow-hidden py-10 mt-20 rounded-[24px]"
      style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1a6cf5 100%)' }}
    >
      {/* Header do carrossel */}
      <div className="text-center mb-8 px-5">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 font-sora text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-3">
          Parceiros de qualidade
        </div>
        <h3 className="font-sora font-bold text-white text-[20px] sm:text-[22px]">
          Marcas que trabalhamos
        </h3>
      </div>

      {/* Fade nas bordas */}
      <div
        className="absolute top-0 bottom-0 left-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0d1f3c, transparent)' }}
      />
      <div
        className="absolute top-0 bottom-0 right-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #1a6cf5, transparent)' }}
      />

      {/* Track */}
      <div
        className="flex items-center gap-10"
        style={{
          width: 'max-content',
          animation: 'scroll-brands 30s linear infinite',
        }}
      >
        {LOOP_BRANDS.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex-shrink-0 flex items-center justify-center px-6 py-3"
          >
            <span
              className="font-sora font-bold text-white whitespace-nowrap"
              style={{ fontSize: 'clamp(15px, 2vw, 20px)', letterSpacing: '0.03em', opacity: 0.85 }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll-brands {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

function ServiceCard({ service, index }) {
  const waLink = `https://wa.me/5545988114290?text=${encodeURIComponent(service.waMessage)}`
  const categoryStyle = CATEGORY_STYLES[service.category] || CATEGORY_STYLES.Climatização

  return (
    <div className="service-card-premium fade-up group" style={{ transitionDelay: `${index * 60}ms` }}>
      {/* Number */}
      <div className="absolute top-6 right-6 font-sora font-extrabold text-[40px] text-[#e8f1ff] leading-none transition-all duration-500 group-hover:text-brand/15 group-hover:scale-110">
        {service.number}
      </div>

      {/* Category tag */}
      <div className={`inline-flex items-center text-[10px] font-sora font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border ${categoryStyle} mb-5`}>
        {service.category}
      </div>

      {/* Icon + Emoji */}
      <div className="relative mb-5">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-brand transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
          style={{ background: 'linear-gradient(135deg,#e8f1ff,#d0e3ff)' }}>
          <div className="w-8 h-8">{ICONS[service.icon]}</div>
        </div>
        <span className="absolute -top-2 -right-2 text-[22px] leading-none select-none">
          {service.emoji}
        </span>
        <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-brand/20 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
      </div>

      {/* Title */}
      <h3 className="font-sora font-bold text-[18px] text-navy mb-3 leading-tight pr-8">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[#6b87a0] text-[14px] leading-[1.7] mb-6 min-h-[88px]">
        {service.description}
      </p>

      {/* CTA */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-sora text-[13px] font-semibold text-brand hover:text-brand-vivid transition-colors duration-200 group/btn"
      >
        Solicitar orçamento
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
          className="transition-transform duration-300 group-hover/btn:translate-x-1" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  )
}

export default function Services() {
  const sectionRef = useRef(null)

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
    sectionRef.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-b from-white via-[#f8fafc] to-white relative overflow-hidden">
      <div
        className="absolute top-1/3 -left-40 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(26,108,245,0.05) 0%,transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(74,158,255,0.05) 0%,transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto fade-up">
          <div className="section-label justify-center">Nossos Serviços</div>
          <h2 className="font-sora font-extrabold text-navy leading-[1.15] mb-5"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Soluções completas em<br />
            <span className="bg-gradient-to-r from-brand to-brand-glow bg-clip-text text-transparent">
              climatização e segurança
            </span>
          </h2>
          <p className="text-[#6b87a0] text-[16px] sm:text-[17px] leading-[1.7]">
            Da instalação à manutenção, oferecemos um portfólio completo com execução técnica de alto nível para sua casa ou empresa.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        {/* Carrossel de marcas logo abaixo dos cards */}
        <BrandsCarousel />

        {/* Bottom CTA */}
        <div className="mt-12 fade-up">
          <div className="bg-gradient-to-r from-navy via-navy-mid to-navy rounded-[20px] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_60px_-20px_rgba(10,22,40,0.4)] relative overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-[300px] h-[300px] pointer-events-none"
              style={{ background: 'radial-gradient(circle,rgba(26,108,245,0.25) 0%,transparent 60%)' }}
              aria-hidden="true"
            />
            <div className="text-center sm:text-left relative z-10">
              <div className="text-brand-glow text-[12px] font-sora font-bold uppercase tracking-[0.12em] mb-2">
                Não encontrou o que precisa?
              </div>
              <div className="font-sora text-white text-[20px] sm:text-[24px] font-bold">
                Atendemos serviços personalizados
              </div>
            </div>
            <a
              href={`https://wa.me/5545988114290?text=${encodeURIComponent('Olá! Preciso de um serviço personalizado.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex items-center gap-2 bg-white text-navy hover:bg-brand hover:text-white font-sora font-semibold text-[14px] px-6 py-3.5 rounded-[10px] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Falar com um especialista
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}