import { useEffect, useRef, useState } from 'react'

const WA_NUMBER = '5545988114290'

const REGIONS = [
  'Marechal Cândido Rondon',
  'Cascavel',
  'Pato Bragado',
  'Entre Rios do Oeste',
  'Quatro Pontes',
  'Toledo',
]

const SERVICES_OPTIONS = [
  'Instalação de Ar Condicionado',
  'Manutenção Preventiva',
  'Higienização de Split',
  'Câmeras de Segurança',
  'Alarmes',
  'Cerca Elétrica',
  'Outro',
]

const HOURS = [
  { day: 'Segunda a Sexta', time: '08h às 18h' },
  { day: 'Sábados', time: '08h às 12h' },
  { day: 'Domingos', time: 'Emergências' },
]

function ContactCard({ icon, label, value, href, accent }) {
  const Tag = href ? 'a' : 'div'
  return (
    <Tag
      href={href}
      target={href && href.startsWith('http') ? '_blank' : undefined}
      rel={href && href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="contact-card-premium group"
    >
      <div className="contact-icon-wrap" style={{ background: accent }}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-sora text-[11px] font-bold text-[#6b87a0] uppercase tracking-[0.1em] mb-1">
          {label}
        </div>
        <div className="font-sora text-[15px] sm:text-[16px] font-bold text-navy truncate">{value}</div>
      </div>
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[#9bb0c8] group-hover:text-brand group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </Tag>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ nome: '', tel: '', servico: '', mensagem: '' })

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

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nome.trim() || !form.tel.trim()) {
      alert('Por favor, preencha nome e telefone.')
      return
    }
    const text = [
      'Olá! Vim pelo site da F&F Instalações.',
      '',
      `*Nome:* ${form.nome}`,
      `*Telefone:* ${form.tel}`,
      `*Serviço:* ${form.servico || 'Não informado'}`,
      `*Mensagem:* ${form.mensagem || 'Sem mensagem adicional'}`,
    ].join('\n')
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
  }

  const waIcon = (
    <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.127 1.529 5.857L0 24l6.29-1.652A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.5-5.193-1.373l-.371-.22-3.733.98.999-3.648-.241-.378A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )

  const phoneIcon = (
    <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.19 18.9a19.5 19.5 0 01-5.46-5.46 19.79 19.79 0 01-3.07-8.67A2 2 0 014.68 2H8a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.91 9.91a16 16 0 006.29 6.29l1.27-.63a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )

  const emailIcon = (
    <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )

  return (
    <section id="contato" ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-white via-[#f8fafc] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div
        className="absolute top-1/3 -left-40 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(26,108,245,0.05) 0%,transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto fade-up">
          <div className="section-label justify-center">Entre em contato</div>
          <h2 className="font-sora font-extrabold text-navy leading-[1.15] mb-5"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Vamos conversar sobre seu{' '}
            <span className="bg-gradient-to-r from-brand to-brand-glow bg-clip-text text-transparent">projeto</span>
          </h2>
          <p className="text-[#6b87a0] text-[16px] sm:text-[17px] leading-[1.7]">
            Estamos prontos para atender você com agilidade e profissionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">

          {/* Info column - 2/5 */}
          <div className="lg:col-span-2 space-y-4 fade-up">

            {/* Contact cards */}
            <ContactCard
              icon={waIcon}
              label="WhatsApp"
              value="(45) 98811-4290"
              href={`https://wa.me/${WA_NUMBER}`}
              accent="#25d366"
            />
            <ContactCard
              icon={phoneIcon}
              label="Telefone"
              value="(45) 98811-4290"
              href="tel:+5545988114290"
              accent="var(--brand)"
            />
            <ContactCard
              icon={emailIcon}
              label="E-mail"
              value="f.f_instalacoes@outlook.com"
              href="mailto:f.f_instalacoes@outlook.com"
              accent="var(--navy)"
            />

            {/* Hours card */}
            <div className="bg-white border border-[#e2ecf8] rounded-[16px] p-6 mt-6">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-[10px] bg-brand/10 text-brand flex items-center justify-center">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="font-sora font-bold text-[14px] text-navy uppercase tracking-[0.06em]">Horário de Atendimento</h3>
              </div>
              <div className="space-y-2.5">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-[14px] py-1 border-b border-[#f0f4f8] last:border-0">
                    <span className="text-[#6b87a0]">{h.day}</span>
                    <span className="font-sora font-semibold text-navy">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Regions */}
            <div className="bg-gradient-to-br from-navy to-navy-mid rounded-[16px] p-6 text-white relative overflow-hidden">
              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 pointer-events-none"
                style={{ background: 'radial-gradient(circle,rgba(26,108,245,0.25) 0%,transparent 70%)' }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-[10px] bg-brand/20 text-brand-glow flex items-center justify-center">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="font-sora font-bold text-[14px] uppercase tracking-[0.06em]">Áreas atendidas</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {REGIONS.map((r) => (
                    <span key={r} className="inline-flex items-center bg-white/10 text-white text-[12px] font-medium px-3 py-1.5 rounded-full border border-white/15">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form column - 3/5 */}
          <div className="lg:col-span-3 fade-up">
            <div className="bg-white border border-[#e2ecf8] rounded-[24px] p-7 sm:p-10 shadow-[0_20px_60px_-20px_rgba(10,22,40,0.1)] relative overflow-hidden">
              {/* Decorative gradient corner */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 pointer-events-none"
                style={{ background: 'radial-gradient(circle,rgba(26,108,245,0.12) 0%,transparent 70%)' }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-[10px] bg-brand text-white flex items-center justify-center">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                  </div>
                  <h3 className="font-sora font-extrabold text-[20px] sm:text-[22px] text-navy">Solicite seu orçamento</h3>
                </div>
                <p className="text-[#6b87a0] text-[14px] mb-7 ml-[52px]">
                  Preencha o formulário e te respondemos pelo WhatsApp em minutos.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sora text-[12px] font-bold text-navy uppercase tracking-[0.06em] mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        placeholder="Seu nome"
                        value={form.nome}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-sora text-[12px] font-bold text-navy uppercase tracking-[0.06em] mb-2">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="tel"
                        placeholder="(45) 99999-9999"
                        value={form.tel}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sora text-[12px] font-bold text-navy uppercase tracking-[0.06em] mb-2">
                      Serviço de interesse
                    </label>
                    <select
                      name="servico"
                      value={form.servico}
                      onChange={handleChange}
                      className="form-input cursor-pointer"
                    >
                      <option value="">Selecione um serviço...</option>
                      {SERVICES_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-sora text-[12px] font-bold text-navy uppercase tracking-[0.06em] mb-2">
                      Conte sobre seu projeto
                    </label>
                    <textarea
                      name="mensagem"
                      placeholder="Descreva sua necessidade, tipo de imóvel, equipamentos..."
                      value={form.mensagem}
                      onChange={handleChange}
                      rows={4}
                      className="form-input resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-3 py-[18px] bg-brand hover:bg-brand-vivid text-white font-sora font-bold text-[15px] rounded-[12px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(26,108,245,0.35)] hover:shadow-[0_12px_30px_rgba(26,108,245,0.5)] relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.127 1.529 5.857L0 24l6.29-1.652A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.5-5.193-1.373l-.371-.22-3.733.98.999-3.648-.241-.378A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                      </svg>
                      Enviar via WhatsApp
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:translate-x-1" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>

                  <p className="text-center text-[#9bb0c8] text-[12px]">
                    🔒 Seus dados são seguros e usados apenas para contato.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 lg:mt-20 fade-up">
          <div className="rounded-[20px] overflow-hidden border border-[#e2ecf8] shadow-[0_20px_60px_-20px_rgba(10,22,40,0.15)] relative">
            <iframe
              title="Localização F&F Instalações - Marechal Cândido Rondon"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57967.40127!2d-54.058819!3d-24.549395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f46e8e4f5b9f0b%3A0x1f58b35e1c27a8af!2sMarechal%20C%C3%A2ndido%20Rondon%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1704000000000"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}