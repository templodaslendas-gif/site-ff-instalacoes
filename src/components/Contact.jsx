import { useEffect, useRef, useState } from 'react'

const WA_NUMBER = '5545988114290'

const REGIONS = [
  'Marechal Cândido Rondon',
  'Cascavel',
  'Pato Bragado',
  'Entre Rios do Oeste',
  'Região Oeste do PR',
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

function ContactItem({ icon, label, value, href }) {
  const Tag = href ? 'a' : 'div'
  return (
    <Tag
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-3.5 px-5 py-[18px] bg-[#f8fafc] border border-[#e2ecf8] rounded-xl no-underline transition-all duration-200 hover:border-brand/30 group"
    >
      <div className="w-11 h-11 rounded-[10px] flex items-center justify-center flex-shrink-0 text-white"
        style={{ background: icon.bg }}>
        {icon.svg}
      </div>
      <div>
        <div className="font-sora text-[12px] font-semibold text-[#6b87a0] uppercase tracking-[0.08em] mb-0.5">
          {label}
        </div>
        <div className="font-sora text-[15px] font-bold text-navy">{value}</div>
      </div>
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

  const waIcon = {
    bg: '#25d366',
    svg: (
      <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.127 1.529 5.857L0 24l6.29-1.652A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.5-5.193-1.373l-.371-.22-3.733.98.999-3.648-.241-.378A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  }

  const phoneIcon = {
    bg: 'var(--brand)',
    svg: (
      <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.19 18.9a19.5 19.5 0 01-5.46-5.46 19.79 19.79 0 01-3.07-8.67A2 2 0 014.68 2H8a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.91 9.91a16 16 0 006.29 6.29l1.27-.63a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  }

  const emailIcon = {
    bg: 'var(--navy)',
    svg: (
      <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  }

  return (
    <section id="contato" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Info column */}
          <div className="fade-up">
            <div className="section-label">Contato</div>
            <h2
              className="font-sora font-extrabold text-navy leading-[1.2] mb-4"
              style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)' }}
            >
              Fale com a{' '}
              <span className="text-brand">nossa equipe</span>
            </h2>
            <p className="text-[#6b87a0] text-base leading-[1.8] mb-9">
              Estamos prontos para atender você com agilidade. Entre em contato pelo canal de sua preferência.
            </p>

            <div className="flex flex-col gap-4 mb-9">
              <ContactItem
                icon={waIcon}
                label="WhatsApp"
                value="(45) 98811-4290"
                href={`https://wa.me/${WA_NUMBER}`}
              />
              <ContactItem
                icon={phoneIcon}
                label="Telefone"
                value="(45) 98811-4290"
                href="tel:+5545988114290"
              />
              <ContactItem
                icon={emailIcon}
                label="E-mail"
                value="f.f_instalacoes@outlook.com"
                href="mailto:f.f_instalacoes@outlook.com"
              />
            </div>

            {/* Regions */}
            <div>
              <div className="font-sora text-[13px] font-bold text-navy mb-3 uppercase tracking-[0.08em]">
                Áreas atendidas
              </div>
              <div className="flex flex-wrap gap-2">
                {REGIONS.map((r) => (
                  <span
                    key={r}
                    className="inline-flex items-center gap-1.5 bg-[#f0f6ff] border border-[#d0e3ff] text-brand text-[13px] font-medium px-3.5 py-1.5 rounded-full"
                  >
                    📍 {r}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="fade-up">
            <div className="bg-[#f8fafc] border border-[#e2ecf8] rounded-[20px] p-10">
              <h3 className="font-sora font-bold text-xl text-navy mb-2">Envie uma mensagem</h3>
              <p className="text-[#6b87a0] text-sm mb-7">Preencha o formulário e retornaremos em breve.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block font-sora text-[12px] font-semibold text-navy uppercase tracking-[0.06em] mb-2">
                    Nome completo
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
                  <label className="block font-sora text-[12px] font-semibold text-navy uppercase tracking-[0.06em] mb-2">
                    Telefone / WhatsApp
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

                <div>
                  <label className="block font-sora text-[12px] font-semibold text-navy uppercase tracking-[0.06em] mb-2">
                    Serviço desejado
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
                  <label className="block font-sora text-[12px] font-semibold text-navy uppercase tracking-[0.06em] mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    placeholder="Descreva sua necessidade..."
                    value={form.mensagem}
                    onChange={handleChange}
                    rows={4}
                    className="form-input resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand hover:bg-brand-vivid text-white font-sora font-semibold text-[15px] rounded-[8px] border-0 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 tracking-wide"
                >
                  Enviar mensagem via WhatsApp →
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-[16px] overflow-hidden border border-[#e2ecf8] fade-up" style={{ height: '340px' }}>
          <iframe
            title="Localização F&F Instalações - Marechal Cândido Rondon"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57967.40127!2d-54.058819!3d-24.549395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f46e8e4f5b9f0b%3A0x1f58b35e1c27a8af!2sMarechal%20C%C3%A2ndido%20Rondon%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1704000000000"
            width="100%"
            height="340"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
