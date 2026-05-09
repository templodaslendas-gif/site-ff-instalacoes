import { useEffect, useRef } from 'react'

const ITEMS = [
  {
    id: 1,
    title: 'Atendimento rápido',
    description: 'Resposta ágil ao contato e execução dentro do prazo acordado.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Profissionais qualificados',
    description: 'Técnicos com treinamento, NR10 e experiência comprovada em campo.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Garantia de serviço',
    description: 'Todos os serviços prestados possuem garantia e suporte pós-instalação.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Equipamentos modernos',
    description: 'Trabalhamos com ferramentas e equipamentos de última geração.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Orçamento sem compromisso',
    description: 'Avaliamos sua necessidade e apresentamos proposta transparente e detalhada.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Suporte técnico',
    description: 'Atendimento pós-serviço para dúvidas, ajustes e manutenção futura.',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.19 18.9a19.5 19.5 0 01-5.46-5.46 19.79 19.79 0 01-3.07-8.67A2 2 0 014.68 2H8a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.91 9.91a16 16 0 006.29 6.29l1.27-.63a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
]

function DiffCard({ item }) {
  return (
    <div className="diff-card fade-up">
      <div
        className="w-11 h-11 rounded-[10px] flex items-center justify-center flex-shrink-0 text-brand"
        style={{ background: 'linear-gradient(135deg,#e8f1ff,#d0e3ff)' }}
      >
        {item.icon}
      </div>
      <div>
        <div className="font-sora font-bold text-[15px] text-navy mb-1">{item.title}</div>
        <div className="text-[#6b87a0] text-sm leading-[1.6]">{item.description}</div>
      </div>
    </div>
  )
}

export default function Differentials() {
  const ref = useRef(null)

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
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: title */}
          <div className="fade-up">
            <div className="section-label">Por que escolher a F&amp;F</div>
            <h2
              className="font-sora font-extrabold text-navy leading-[1.2] mb-4"
              style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)' }}
            >
              O que nos torna a{' '}
              <span className="text-brand">melhor escolha</span>
            </h2>
            <p className="text-[#6b87a0] text-base leading-[1.8]">
              Combinamos técnica, tecnologia e compromisso para entregar sempre mais do que o esperado.
            </p>
          </div>

          {/* Right: cards */}
          <div className="flex flex-col gap-4">
            {ITEMS.map((item) => (
              <DiffCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
