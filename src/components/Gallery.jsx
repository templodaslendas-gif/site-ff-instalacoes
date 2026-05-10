import { useEffect, useRef, useState } from 'react'
import { galleryItems } from '../data/gallery'

const imgs = {
  'ar-condicionado-01.jpg':         new URL('../assets/images/ar-condicionado-01.jpg', import.meta.url).href,
  'camera-seguranca-01.jpg':        new URL('../assets/images/camera-seguranca-01.jpg', import.meta.url).href,
  'infraestrutura-eletrica-01.jpg': new URL('../assets/images/infraestrutura-eletrica-01.jpg', import.meta.url).href,
  'condensadora-01.jpg':            new URL('../assets/images/condensadora-01.jpg', import.meta.url).href,
  'ambiente-comercial-01.jpg':      new URL('../assets/images/ambiente-comercial-01.jpg', import.meta.url).href,
}

const FILTERS = ['Todos', 'Climatização', 'Segurança']

const CATEGORY_STYLES = {
  Climatização: 'bg-brand text-white',
  Segurança: 'bg-orange-500 text-white',
}

function GalleryCard({ item, index }) {
  const isLarge = item.size === 'large'
  return (
    <div
      className={`gallery-premium-item fade-up group ${isLarge ? 'md:col-span-2' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <img
        src={imgs[item.file]}
        alt={item.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay (always visible, more visible on hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Category tag - top left */}
      <div className="absolute top-4 left-4 transform transition-all duration-500 group-hover:translate-y-0">
        <span className={`inline-flex items-center font-sora text-[10px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full ${CATEGORY_STYLES[item.category]}`}>
          {item.category}
        </span>
      </div>

      {/* "Ver projeto" icon - top right (appears on hover) */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500">
        <h3 className="font-sora text-white font-bold text-[18px] sm:text-[20px] mb-1 leading-tight">
          {item.label}
        </h3>
        <div className="flex items-center gap-2 text-white/70 text-[12px] font-sora">
          <span className="w-6 h-px bg-brand-glow" />
          Projeto F & F Instalações
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const ref = useRef(null)
  const [filter, setFilter] = useState('Todos')

  const filtered = filter === 'Todos'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter)

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
  }, [filter])

  return (
    <section id="projetos" ref={ref} className="py-24 lg:py-32 bg-[#f8fafc] relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute -top-40 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(26,108,245,0.06) 0%,transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto fade-up">
          <div className="section-label justify-center">Portfólio</div>
          <h2
            className="font-sora font-extrabold text-navy mb-5 leading-[1.15]"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
          >
            Projetos <span className="bg-gradient-to-r from-brand to-brand-glow bg-clip-text text-transparent">realizados</span> pela F & F
          </h2>
          <p className="text-[#6b87a0] text-[16px] sm:text-[17px] leading-[1.7]">
            Cada instalação é tratada com rigor técnico e atenção ao detalhe — qualidade que você vê desde o acabamento.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 fade-up">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-sora text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                filter === f
                  ? 'bg-navy text-white shadow-[0_8px_20px_-5px_rgba(10,22,40,0.4)]'
                  : 'bg-white text-[#6b87a0] hover:text-navy border border-[#e2ecf8] hover:border-navy/30'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery grid - mosaic on desktop */}
        <div className="hidden md:grid grid-cols-3 gap-5 auto-rows-[280px]">
          {filtered.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Mobile: simple stack */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="gallery-premium-item fade-up group h-[260px]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={imgs[item.file]}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className={`inline-flex items-center font-sora text-[10px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full ${CATEGORY_STYLES[item.category]}`}>
                  {item.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-sora text-white font-bold text-[18px] mb-1 leading-tight">{item.label}</h3>
                <div className="flex items-center gap-2 text-white/70 text-[12px] font-sora">
                  <span className="w-6 h-px bg-brand-glow" />
                  Projeto F & F Instalações
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-14 fade-up">
          <p className="text-[#6b87a0] text-[14px] mb-5">
            Esta é uma pequena amostra dos nossos projetos
          </p>
          <a
            href={`https://wa.me/5545988114290?text=${encodeURIComponent('Olá! Gostaria de ver mais projetos da F&F Instalações.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sora text-[14px] font-semibold text-brand hover:text-brand-vivid transition-colors group"
          >
            Ver mais projetos no WhatsApp
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:translate-x-1" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}