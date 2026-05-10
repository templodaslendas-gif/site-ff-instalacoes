import { useEffect, useRef } from 'react'

const ITEMS = [
  {
    id: 1,
    title: 'Atendimento rápido',
    description: 'Resposta ágil pelo WhatsApp e execução dentro do prazo combinado.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Equipe qualificada',
    description: 'Técnicos com treinamento especializado e 18 anos de experiência no ramo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Garantia em todos os serviços',
    description: 'Cobertura completa pós-instalação com suporte técnico para qualquer ajuste necessário.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Equipamentos modernos',
    description: 'Ferramentas e equipamentos de última geração para precisão em cada instalação.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Orçamento sem compromisso',
    description: 'Avaliação técnica gratuita com proposta transparente e detalhada antes de qualquer contratação.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Atendimento regional',
    description: 'Cobertura em Marechal Cândido Rondon, Cascavel, Pato Bragado e toda região Oeste.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

function DiffCard({ item, index }) {
  return (
    <div
      className="diff-card-premium fade-up group"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="diff-icon-bg">
        <div className="diff-icon-inner text-brand">{item.icon}</div>
      </div>
      <h3 className="font-sora font-bold text-[17px] text-navy mb-2 leading-tight">
        {item.title}
      </h3>
      <p className="text-[#6b87a0] text-[14px] leading-[1.7]">
        {item.description}
      </p>
    </div>
  )
}

export default function Differentials() {
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
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(26,108,245,0.04) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(74,158,255,0.04) 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto fade-up">
          <div className="section-label justify-center">Por que escolher a F&F</div>
          <h2
            className="font-sora font-extrabold text-navy leading-[1.15] mb-5"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
          >
            O que nos torna a{' '}
            <span className="bg-gradient-to-r from-brand to-brand-glow bg-clip-text text-transparent">melhor escolha</span>
          </h2>
          <p className="text-[#6b87a0] text-[16px] sm:text-[17px] leading-[1.7]">
            Combinamos experiência consolidada, técnica apurada e compromisso real com cada cliente.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((item, i) => (
            <DiffCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}