import { useEffect, useRef } from 'react'

const WA_LINK = `https://wa.me/5545988114290?text=${encodeURIComponent('Olá! Quero solicitar um orçamento gratuito.')}`

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.127 1.529 5.857L0 24l6.29-1.652A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.5-5.193-1.373l-.371-.22-3.733.98.999-3.648-.241-.378A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

export default function CtaBanner() {
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
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--navy)' }}
    >
      {/* Animated grid pattern */}
      <div className="absolute inset-0 hero-grid-overlay opacity-50" aria-hidden="true" />

      {/* Multiple radial glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '900px',
          height: '500px',
          background: 'radial-gradient(ellipse,rgba(26,108,245,0.25) 0%,transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(74,158,255,0.15) 0%,transparent 60%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(26,108,245,0.10) 0%,transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center fade-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand/15 border border-brand/30 text-brand-glow font-sora text-[12px] font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-7 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-glow opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-glow"></span>
          </span>
          Atendimento imediato pelo WhatsApp
        </div>

        {/* Headline */}
        <h2
          className="font-sora font-extrabold text-white leading-[1.1] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(2.2rem,5vw,3.6rem)' }}
        >
          Solicite agora seu<br />
          <span className="bg-gradient-to-r from-brand-glow via-white to-brand-glow bg-clip-text text-transparent">
            orçamento gratuito
          </span>
        </h2>

        <p className="text-white/65 text-[17px] sm:text-[19px] leading-[1.6] mb-10 max-w-2xl mx-auto">
          Atendimento rápido e profissional para climatização e segurança.
          <span className="block mt-2 text-white/85 font-medium">Resposta em minutos pelo WhatsApp.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-brand hover:bg-brand-vivid text-white font-sora font-bold text-[17px] px-10 py-[20px] rounded-[12px] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(26,108,245,0.4)] hover:shadow-[0_12px_40px_rgba(26,108,245,0.6)] relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <WhatsAppIcon size={22} />
              Falar no WhatsApp agora
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:translate-x-1" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>

          <a
            href="tel:+5545988114290"
            className="flex items-center gap-3 bg-white/[0.08] hover:bg-white/[0.15] backdrop-blur-sm text-white font-sora font-semibold text-[15px] px-8 py-[19px] rounded-[12px] border border-white/15 hover:border-white/30 transition-all duration-300"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.19 18.9a19.5 19.5 0 01-5.46-5.46 19.79 19.79 0 01-3.07-8.67A2 2 0 014.68 2H8a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.91 9.91a16 16 0 006.29 6.29l1.27-.63a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            (45) 98811-4290
          </a>
        </div>

        {/* Trust line */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-white/50 text-[13px]">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-brand-glow">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Orçamento 100% gratuito
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-brand-glow">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Sem compromisso
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-brand-glow">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Atendimento regional
          </div>
        </div>
      </div>
    </section>
  )
}