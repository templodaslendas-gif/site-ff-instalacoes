import { useState, useEffect } from 'react'
import logoImg from '../assets/images/logo.png'

const WA_NUMBER = '5545988114290'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de um orçamento.')}`

const NAV_LINKS = [
  { label: 'Início', href: '#inicio', id: 'inicio' },
  { label: 'Serviços', href: '#servicos', id: 'servicos' },
  { label: 'Sobre', href: '#sobre', id: 'sobre' },
  { label: 'Projetos', href: '#projetos', id: 'projetos' },
  { label: 'Contato', href: '#contato', id: 'contato' },
]

function Logo() {
  return (
    <a href="#inicio" className="flex items-center no-underline group">
      <img
        src={logoImg}
        alt="F&F Instalações"
        className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
      />
    </a>
  )
}

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.127 1.529 5.857L0 24l6.29-1.652A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.5-5.193-1.373l-.371-.22-3.733.98.999-3.648-.241-.378A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Detect active section
      const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
      const scrollPos = window.scrollY + 200
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Block scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'header-scrolled-premium' : 'header-transparent-premium'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-sora text-[14px] font-medium tracking-wide rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-white/65 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-glow" />
                  )}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* WhatsApp button - desktop */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-brand hover:bg-brand-vivid text-white font-sora text-[13px] font-semibold px-5 py-[11px] rounded-[8px] tracking-wide transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(26,108,245,0.35)] hover:shadow-[0_8px_24px_rgba(26,108,245,0.5)] relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <WhatsAppIcon />
                Fale Conosco
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>

            {/* Hamburger - mobile */}
            <button
              className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
                <span className={`absolute h-[2px] bg-white rounded transition-all duration-300 ${
                  mobileOpen ? 'w-6 rotate-45' : 'w-6 -translate-y-2'
                }`} />
                <span className={`absolute h-[2px] bg-white rounded transition-all duration-300 ${
                  mobileOpen ? 'w-0 opacity-0' : 'w-6 opacity-100'
                }`} />
                <span className={`absolute h-[2px] bg-white rounded transition-all duration-300 ${
                  mobileOpen ? 'w-6 -rotate-45' : 'w-6 translate-y-2'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - fullscreen overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'linear-gradient(135deg,rgba(10,22,40,0.98) 0%,rgba(13,31,60,0.98) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="flex flex-col h-full pt-28 pb-10 px-6">
          <nav className="flex flex-col gap-1 mb-auto">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="font-sora text-[24px] font-semibold text-white/85 hover:text-brand-glow py-4 border-b border-white/10 transition-all duration-300"
                style={{
                  transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms',
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-white/40">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </a>
            ))}
          </nav>

          {/* Bottom actions */}
          <div className="flex flex-col gap-3 mt-10">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-3 bg-brand text-white font-sora text-[15px] font-semibold px-6 py-4 rounded-[10px] shadow-[0_8px_24px_rgba(26,108,245,0.35)]"
            >
              <WhatsAppIcon size={18} />
              Falar no WhatsApp
            </a>
            <a
              href="tel:+5545988114290"
              onClick={closeMenu}
              className="flex items-center justify-center gap-3 bg-white/[0.06] border border-white/15 text-white font-sora text-[14px] font-medium px-6 py-3.5 rounded-[10px]"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.19 18.9a19.5 19.5 0 01-5.46-5.46 19.79 19.79 0 01-3.07-8.67A2 2 0 014.68 2H8a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.91 9.91a16 16 0 006.29 6.29l1.27-.63a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              (45) 98811-4290
            </a>
          </div>
        </div>
      </div>
    </>
  )
}