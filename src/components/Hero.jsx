const WA_ORCAMENTO = `https://wa.me/5545988114290?text=${encodeURIComponent('Olá! Quero solicitar um orçamento.')}`

const TRUST_BADGES = [
  { text: 'Atendimento rápido' },
  { text: 'Equipe especializada' },
  { text: 'Orçamento sem compromisso' },
  { text: 'Atendimento regional' },
]

const QUICK_STATS = [
  { number: '7K+', label: 'Instalações' },
  { number: '18', label: 'Anos no ramo' },
  { number: '2010', label: 'Desde' },
]

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.127 1.529 5.857L0 24l6.29-1.652A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.5-5.193-1.373l-.371-.22-3.733.98.999-3.648-.241-.378A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover scale-110"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=85')",
          opacity: 0.15,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 hero-grid-overlay" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(125deg,rgba(10,22,40,0.98) 0%,rgba(10,22,40,0.88) 45%,rgba(13,31,60,0.92) 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(26,108,245,0.18) 0%,transparent 60%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(74,158,255,0.10) 0%,transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full pt-32 pb-16 lg:pb-24">
        <div className="max-w-4xl">

          {/* Badge — 3 cidades */}
          <div className="inline-flex flex-wrap items-center gap-2 bg-brand/10 border border-brand/30 text-brand-glow font-sora text-[12px] font-semibold tracking-[0.08em] uppercase px-4 py-2 rounded-full mb-7 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-glow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-glow"></span>
            </span>
            <span>Marechal Cândido Rondon</span>
            <span className="text-brand/50">·</span>
            <span>Toledo</span>
            <span className="text-brand/50">·</span>
            <span>Cascavel — PR</span>
          </div>

          {/* Headline */}
          <h1 className="font-sora font-extrabold text-white leading-[1.05] tracking-[-0.02em] mb-7"
            style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>
            Especialistas em<br />
            <span className="bg-gradient-to-r from-brand-glow via-brand to-brand-glow bg-clip-text text-transparent">
              Climatização
            </span> e<br />
            Segurança Eletrônica
          </h1>

          {/* Subheadline */}
          <p className="text-white/70 leading-[1.6] max-w-[640px] mb-10 font-light"
            style={{ fontSize: 'clamp(1.05rem,2vw,1.25rem)' }}>
            Instalação profissional de ar condicionado split, câmeras e cerca elétrica para residências e empresas.{' '}
            <span className="text-white/90 font-medium">Mais de 7 mil instalações realizadas no Oeste do Paraná.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
            <a
              href={WA_ORCAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-brand hover:bg-brand-vivid text-white font-sora font-semibold text-[16px] px-8 py-[18px] rounded-[10px] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(26,108,245,0.35)] hover:shadow-[0_12px_40px_rgba(26,108,245,0.55)]"
            >
              <WhatsAppIcon />
              Solicitar Orçamento
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                className="transition-transform duration-300 group-hover:translate-x-1" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-3 bg-white/[0.04] hover:bg-white/[0.10] backdrop-blur-sm text-white font-sora font-medium text-[16px] px-8 py-[18px] rounded-[10px] border border-white/15 hover:border-white/30 transition-all duration-300"
            >
              Ver Serviços
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-7 gap-y-3 mb-12">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.text} className="flex items-center gap-2.5 text-[13px] sm:text-[14px] text-white/65">
                <span className="w-5 h-5 rounded-full bg-brand/20 text-brand-glow flex items-center justify-center flex-shrink-0">
                  <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {badge.text}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-x-10 gap-y-5 pt-8 border-t border-white/[0.08]">
            {QUICK_STATS.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2.5">
                <div className="font-sora font-extrabold text-white text-[26px] sm:text-[30px] leading-none">
                  {stat.number}
                </div>
                <div className="text-white/50 text-[12px] sm:text-[13px] uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50">
        <span className="text-white/60 text-[10px] uppercase tracking-[0.25em] font-sora font-medium">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent scroll-indicator" />
      </div>
    </section>
  )
}