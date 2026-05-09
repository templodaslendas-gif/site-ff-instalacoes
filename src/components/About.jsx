import { useEffect, useRef } from 'react'

const equipeImg = new URL('../assets/images/equipe-tecnica.jpg', import.meta.url).href

const STATS = [
  { number: '500+', label: 'Projetos entregues' },
  { number: '5+',   label: 'Anos de mercado' },
  { number: '6',    label: 'Cidades atendidas' },
]

const WA_LINK = `https://wa.me/5545988114290?text=${encodeURIComponent('Olá! Quero conhecer mais os serviços da F&F Instalações.')}`

export default function About() {
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
    <section id="sobre" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image column */}
          <div className="fade-up relative">
            <div className="rounded-[20px] overflow-hidden bg-navy aspect-[4/3] relative">
              <img
                src={equipeImg}
                alt="Equipe técnica F&F Instalações"
                className="w-full h-full object-cover opacity-[0.85]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>

            {/* Floating credential card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-[14px] px-6 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#e2ecf8] max-w-[220px]">
              <div className="flex items-center gap-2.5 mb-1">
                <svg width="20" height="20" fill="none" stroke="var(--brand)" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="font-sora text-[14px] font-bold text-navy">Serviço Certificado</span>
              </div>
              <p className="text-xs text-[#6b87a0] leading-relaxed m-0">
                Técnicos habilitados com equipamentos de alta precisão
              </p>
            </div>
          </div>

          {/* Text column */}
          <div className="fade-up">
            <div className="section-label">Sobre a empresa</div>
            <h2 className="font-sora font-extrabold text-navy leading-[1.2] mb-5"
              style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}>
              Referência em climatização e segurança no{' '}
              <span className="text-brand">Oeste do Paraná</span>
            </h2>
            <p className="text-[#6b87a0] leading-[1.8] text-base mb-6">
              A F & F Instalações oferece soluções em climatização e segurança eletrônica com atendimento
              técnico profissional para residências, empresas e comércios. Nossa equipe é formada por
              técnicos qualificados, comprometidos com a qualidade e a satisfação de cada cliente.
            </p>
            <p className="text-[#6b87a0] leading-[1.8] text-base mb-9">
              Trabalhamos com equipamentos modernos, agilidade no atendimento e suporte pós-serviço —
              porque acreditamos que excelência não termina na entrega do projeto.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-9">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white border border-[#e2ecf8] rounded-xl p-6 text-center">
                  <div className="font-sora text-[36px] font-extrabold text-brand leading-none">{s.number}</div>
                  <div className="text-[13px] text-[#6b87a0] mt-1.5 font-medium">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-vivid text-white font-sora font-semibold text-[15px] px-8 py-4 rounded-[8px] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(26,108,245,0.35)]"
            >
              Falar com a equipe →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
