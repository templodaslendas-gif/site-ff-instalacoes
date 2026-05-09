const WA_ORCAMENTO = `https://wa.me/5545988114290?text=${encodeURIComponent('Olá! Quero solicitar um orçamento.')}`

const TRUST_ITEMS = [
  'Atendimento regional',
  'Equipe especializada',
  'Resposta rápida',
  'Qualidade garantida',
]

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.127 1.529 5.857L0 24l6.29-1.652A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.5-5.193-1.373l-.371-.22-3.733.98.999-3.648-.241-.378A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-[0.18]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80')",
        }}
        aria-hidden="true"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 hero-grid-overlay" aria-hidden="true" />

      {/* Dark gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg,rgba(10,22,40,.97) 0%,rgba(10,22,40,.85) 50%,rgba(13,31,60,.95) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Blue glow accent */}
      <div
        className="absolute -top-24 -right-24 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle,rgba(26,108,245,.12) 0%,transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 text-brand-glow font-sora text-[12px] font-semibold tracking-[0.1em] uppercase px-[14px] py-[6px] rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-glow inline-block" />
            Marechal Cândido Rondon — PR
          </div>

          {/* Headline */}
          <h1 className="font-sora font-extrabold text-white leading-[1.12] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)' }}>
            Especialistas em<br />
            <span className="text-brand-glow">Climatização</span> e<br />
            Segurança Eletrônica
          </h1>

          {/* Subheadline */}
          <p className="text-white/65 leading-[1.7] max-w-[580px] mb-10"
            style={{ fontSize: 'clamp(1rem,2.2vw,1.2rem)' }}>
            Instalação, manutenção e soluções profissionais em ar condicionado, câmeras e segurança
            residencial e comercial. Atendemos o Oeste do Paraná com qualidade técnica e agilidade.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={WA_ORCAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[10px] bg-brand hover:bg-brand-vivid text-white font-sora font-semibold text-[15px] px-8 py-4 rounded-[8px] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(26,108,245,0.35)] hover:shadow-[0_8px_30px_rgba(26,108,245,0.5)]"
            >
              <WhatsAppIcon />
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="flex items-center gap-[10px] bg-transparent text-white font-sora font-medium text-[15px] px-8 py-4 rounded-[8px] border border-white/25 hover:border-white hover:bg-white/[0.06] transition-all duration-200"
            >
              Ver Serviços
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
          </div>

          {/* Trust items */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {TRUST_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-[10px] text-sm text-white/65">
                <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <div className="w-px h-10 bg-white scroll-indicator" />
      </div>
    </section>
  )
}
