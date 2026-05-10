import { useEffect, useRef } from 'react'

const equipeImg = new URL('../assets/images/equipe-tecnica.jpg', import.meta.url).href

const STATS = [
  { number: '7.000+', label: 'Instalações realizadas' },
  { number: '18',     label: 'Anos de experiência' },
  { number: '2010',   label: 'No mercado desde' },
]

const HIGHLIGHTS = [
  'Equipe técnica especializada e treinada',
  'Atendimento em toda região Oeste do Paraná',
  'Suporte pós-serviço e garantia em todos os projetos',
  'Trabalhamos com as principais marcas do mercado',
]

const WA_LINK = `https://wa.me/5545988114290?text=${encodeURIComponent('Olá! Quero conhecer mais os serviços da F&F Instalações.')}`

function CheckIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 100)
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
    <section id="sobre" ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative blue glow */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(26,108,245,0.06) 0%,transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image column */}
          <div className="fade-up relative order-2 lg:order-1">
            <div className="rounded-[24px] overflow-hidden bg-navy aspect-[4/5] relative shadow-[0_30px_80px_-20px_rgba(10,22,40,0.4)]">
              <img
                src={equipeImg}
                alt="Equipe técnica F&F Instalações"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />

              {/* Years badge - top left */}
              <div className="absolute top-6 left-6 bg-brand text-white px-4 py-2 rounded-full font-sora font-bold text-sm tracking-wide shadow-lg">
                Desde 2010
              </div>

              {/* Bottom info card on image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-sora font-bold text-navy text-[15px] leading-tight">Empresa Certificada</div>
                    <div className="text-[#6b87a0] text-xs mt-0.5">Profissional há 18 anos no ramo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="fade-up order-1 lg:order-2">
            <div className="section-label">Sobre a empresa</div>
            <h2 className="font-sora font-extrabold text-navy leading-[1.15] mb-6"
              style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)' }}>
              Mais de <span className="text-brand">7 mil instalações</span> no Oeste do Paraná
            </h2>

            <p className="text-[#4a6070] leading-[1.8] text-lg mb-5">
              A <strong className="text-navy">F & F Instalações</strong> está no mercado desde 2010, com 18 anos de experiência técnica do profissional responsável. Especializada em climatização e segurança eletrônica, atendemos residências, empresas e comércios em toda região Oeste do Paraná.
            </p>

            <p className="text-[#6b87a0] leading-[1.8] text-base mb-8">
              Combinamos experiência consolidada com tecnologia de ponta para entregar serviços com qualidade técnica, agilidade e suporte completo — antes, durante e depois da instalação.
            </p>

            {/* Highlights list */}
            <ul className="space-y-3 mb-10">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon />
                  </span>
                  <span className="text-[#4a6070] text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-10 pt-8 border-t border-[#e2ecf8]">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-sora text-[28px] sm:text-[34px] font-extrabold text-brand leading-none mb-1.5">
                    {s.number}
                  </div>
                  <div className="text-[12px] sm:text-[13px] text-[#6b87a0] font-medium leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-vivid text-white font-sora font-semibold text-[15px] px-8 py-4 rounded-[10px] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(26,108,245,0.3)] hover:shadow-[0_12px_32px_rgba(26,108,245,0.45)]"
            >
              Solicitar atendimento
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}