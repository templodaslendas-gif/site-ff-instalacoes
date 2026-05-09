const NAV_LINKS = ['Início', 'Serviços', 'Sobre', 'Projetos', 'Contato']
const SERVICE_LINKS = [
  'Ar Condicionado',
  'Manutenção',
  'Higienização',
  'Câmeras',
  'Alarmes',
  'Cerca Elétrica',
]
const HREF_MAP = {
  Início: '#inicio',
  Serviços: '#servicos',
  Sobre: '#sobre',
  Projetos: '#projetos',
  Contato: '#contato',
}

function FooterLogo() {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-brand rounded-[9px] flex items-center justify-center flex-shrink-0">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </div>
      <div>
        <div className="font-sora font-bold text-[17px] tracking-wide text-white leading-tight">
          F & F Instalações
        </div>
        <div className="text-[11px] tracking-[0.1em] uppercase text-white/40 font-medium">
          Climatização & Segurança
        </div>
      </div>
    </div>
  )
}

function SocialBtn({ href, children, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-[8px] flex items-center justify-center text-white bg-white/[0.08] hover:bg-brand transition-colors duration-200"
    >
      {children}
    </a>
  )
}

function ColTitle({ children }) {
  return (
    <div className="font-sora text-[13px] font-bold text-white uppercase tracking-[0.08em] mb-4">
      {children}
    </div>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.6)' }}>
      <div className="max-w-7xl mx-auto px-5 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">

          {/* Brand */}
          <div className="lg:col-span-1">
            <FooterLogo />
            <p className="text-sm leading-[1.8] text-white/45 max-w-[280px] mb-5">
              Soluções profissionais em ar condicionado e segurança eletrônica para residências e
              empresas no Oeste do Paraná.
            </p>
            <div className="flex gap-2.5">
              <SocialBtn href="https://wa.me/5545988114290" label="WhatsApp">
                <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.127 1.529 5.857L0 24l6.29-1.652A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.5-5.193-1.373l-.371-.22-3.733.98.999-3.648-.241-.378A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </SocialBtn>
              <SocialBtn href="mailto:f.f_instalacoes@outlook.com" label="E-mail">
                <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </SocialBtn>
            </div>
          </div>

          {/* Menu */}
          <div>
            <ColTitle>Menu</ColTitle>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={HREF_MAP[link]}
                  className="text-sm text-white/50 no-underline hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <ColTitle>Serviços</ColTitle>
            <div className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((s) => (
                <span key={s} className="text-sm text-white/50">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div>
            <ColTitle>Contato</ColTitle>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2.5 items-start">
                <svg width="15" height="15" fill="none" stroke="var(--brand-glow)" strokeWidth="2" viewBox="0 0 24 24" className="flex-shrink-0 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm text-white/50 leading-[1.6]">
                  Marechal Cândido Rondon, PR
                </span>
              </div>
              <div className="flex gap-2.5 items-center">
                <svg width="15" height="15" fill="none" stroke="var(--brand-glow)" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" className="flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.19 18.9a19.5 19.5 0 01-5.46-5.46 19.79 19.79 0 01-3.07-8.67A2 2 0 014.68 2H8a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.91 9.91a16 16 0 006.29 6.29l1.27-.63a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:+5545988114290" className="text-sm text-white/50 no-underline hover:text-white transition-colors">
                  (45) 98811-4290
                </a>
              </div>
              <div className="flex gap-2.5 items-center">
                <svg width="15" height="15" fill="none" stroke="var(--brand-glow)" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" className="flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:f.f_instalacoes@outlook.com" className="text-sm text-white/50 no-underline hover:text-white transition-colors break-all">
                  f.f_instalacoes@outlook.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-6">
          <span className="text-[13px] text-white/30">
            © {new Date().getFullYear()} F & F Instalações. Todos os direitos reservados.
          </span>
          <span className="text-[13px] text-white/30">
            Marechal Cândido Rondon — PR
          </span>
        </div>
      </div>
    </footer>
  )
}
