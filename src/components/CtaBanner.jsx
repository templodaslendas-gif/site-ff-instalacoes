import { useEffect, useRef } from 'react'

const WA_LINK = `https://wa.me/5545988114290?text=${encodeURIComponent('Olá! Quero solicitar um orçamento gratuito.')}`

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
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
      className="relative py-24 overflow-hidden"
      style={{ background: 'var(--navy)' }}
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse,rgba(26,108,245,.15) 0%,transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center fade-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 text-brand-glow font-sora text-[12px] font-semibold tracking-[0.1em] uppercase px-[14px] py-[6px] rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-glow inline-block" />
          Atendimento imediato
        </div>

        <h2
          className="font-sora font-extrabold text-white leading-[1.15] mb-5"
          style={{ fontSize: 'clamp(2rem,4vw,3.2rem)' }}
        >
          Solicite agora o seu{' '}
          <span className="text-brand-glow">orçamento gratuito</span>
        </h2>

        <p className="text-white/60 text-lg leading-[1.7] mb-10">
          Atendimento rápido e profissional para climatização e segurança.
          <br className="hidden sm:block" />
          Resposta em minutos pelo WhatsApp.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brand hover:bg-brand-vivid text-white font-sora font-semibold text-lg px-10 py-[18px] rounded-[8px] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(26,108,245,0.4)] hover:shadow-[0_8px_30px_rgba(26,108,245,0.55)]"
        >
          <WhatsAppIcon />
          Falar no WhatsApp
        </a>

        <p className="mt-4 text-white/30 text-sm">
          Orçamento 100% gratuito e sem compromisso
        </p>
      </div>
    </section>
  )
}
