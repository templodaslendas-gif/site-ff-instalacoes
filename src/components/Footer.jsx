import logoImg from '../assets/images/logo.png'

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

const SERVICES = [
  'Ar Condicionado',
  'Manutenção',
  'Higienização',
  'Câmeras de Segurança',
  'Alarmes',
  'Cerca Elétrica',
]

function SocialBtn({ href, children, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-[10px] flex items-center justify-center text-white/70 bg-white/[0.06] hover:bg-brand hover:text-white border border-white/10 hover:border-brand transition-all duration-300 hover:-translate-y-0.5"
    >
      {children}
    </a>
  )
}

function ColTitle({ children }) {
  return (
    <div className="font-sora text-[13px] font-bold text-white uppercase tracking-[0.1em] mb-5 flex items-center gap-2">
      <span className="w-4 h-[2px] bg-brand-glow rounded-full" />
      {children}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, var(--navy) 0%, #050d1a 100%)' }}>
      {/* Decorative top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(26,108,245,0.12) 0%,transparent 60%)' }}
        aria-hidden="true"
      />

      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14">

          {/* Brand column - 4/12 */}
          <div className="lg:col-span-4">
            <a href="#inicio" className="inline-block mb-5">
              <img
                src={logoImg}
                alt="F&F Instalações"
                className="h-14 w-auto"
              />
            </a>

            <p className="text-white/55 text-[14px] leading-[1.8] max-w-[320px] mb-6">
              Especialistas em climatização e segurança eletrônica no Oeste do Paraná. Mais de <span className="text-white/85 font-semibold">7 mil instalações</span> realizadas com qualidade técnica e compromisso.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-7">
              <span className="inline-flex items-center gap-1.5 bg-brand/10 border border-brand/20 text-brand-glow text-[11px] font-sora font-semibold px-3 py-1.5 rounded-full">
                <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Desde 2010
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/[0.06] border border-white/10 text-white/70 text-[11px] font-sora font-semibold px-3 py-1.5 rounded-full">
                18 anos no ramo
              </span>
            </div>

            {/* Social links */}
            <div className="flex gap-2.5">
              <SocialBtn href="https://wa.me/5545988114290" label="WhatsApp">
                <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.127 1.529 5.857L0 24l6.29-1.652A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.5-5.193-1.373l-.371-.22-3.733.98.999-3.648-.241-.378A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </SocialBtn>
              <SocialBtn href="mailto:f.f_instalacoes@outlook.com" label="E-mail">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </SocialBtn>
              <SocialBtn href="tel:+5545988114290" label="Telefone">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.19 18.9a19.5 19.5 0 01-5.46-5.46 19.79 19.79 0 01-3.07-8.67A2 2 0 014.68 2H8a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.91 9.91a16 16 0 006.29 6.29l1.27-.63a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </SocialBtn>
            </div>
          </div>

          {/* Menu column - 2/12 */}
          <div className="lg:col-span-2">
            <ColTitle>Navegação</ColTitle>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[14px] text-white/60 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                  <span className="w-0 h-px bg-brand-glow transition-all duration-300 group-hover:w-3" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services column - 3/12 */}
          <div className="lg:col-span-3">
            <ColTitle>Serviços</ColTitle>
            <div className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <span key={s} className="text-[14px] text-white/60">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Contact column - 3/12 */}
          <div className="lg:col-span-3">
            <ColTitle>Contato</ColTitle>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-[8px] bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" fill="none" stroke="var(--brand-glow)" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider font-bold mb-0.5">Localização</div>
                  <div className="text-[13px] text-white/75 leading-[1.5]">
                    Marechal Cândido Rondon — PR
                  </div>
                </div>
              </div>

              <a href="tel:+5545988114290" className="flex gap-3 items-start group">
                <div className="w-9 h-9 rounded-[8px] bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 group-hover:border-brand/30 transition-colors">
                  <svg width="14" height="14" fill="none" stroke="var(--brand-glow)" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.19 18.9a19.5 19.5 0 01-5.46-5.46 19.79 19.79 0 01-3.07-8.67A2 2 0 014.68 2H8a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.91 9.91a16 16 0 006.29 6.29l1.27-.63a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider font-bold mb-0.5">Telefone</div>
                  <div className="text-[13px] text-white/75 group-hover:text-white transition-colors">
                    (45) 98811-4290
                  </div>
                </div>
              </a>

              <a href="mailto:f.f_instalacoes@outlook.com" className="flex gap-3 items-start group">
                <div className="w-9 h-9 rounded-[8px] bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 group-hover:border-brand/30 transition-colors">
                  <svg width="14" height="14" fill="none" stroke="var(--brand-glow)" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-white/40 uppercase tracking-wider font-bold mb-0.5">E-mail</div>
                  <div className="text-[13px] text-white/75 group-hover:text-white transition-colors break-all">
                    f.f_instalacoes@outlook.com
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-7" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[13px] text-white/35 text-center md:text-left">
            © {new Date().getFullYear()} F & F Instalações. Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-6 text-[12px] text-white/35">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Disponível agora
            </span>
            <span>CNPJ: F & F Instalações</span>
          </div>
        </div>
      </div>
    </footer>
  )
}