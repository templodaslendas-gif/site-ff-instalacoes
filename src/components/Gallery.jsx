import { useEffect, useRef } from 'react'

const imgs = {
  'ar-condicionado-01.jpg':         new URL('../assets/images/ar-condicionado-01.jpg', import.meta.url).href,
  'camera-seguranca-01.jpg':        new URL('../assets/images/camera-seguranca-01.jpg', import.meta.url).href,
  'infraestrutura-eletrica-01.jpg': new URL('../assets/images/infraestrutura-eletrica-01.jpg', import.meta.url).href,
  'condensadora-01.jpg':            new URL('../assets/images/condensadora-01.jpg', import.meta.url).href,
  'ambiente-comercial-01.jpg':      new URL('../assets/images/ambiente-comercial-01.jpg', import.meta.url).href,
}

const GALLERY = [
  { id:1, file:'ar-condicionado-01.jpg',         alt:'Instalação de ar condicionado split', label:'Split Residencial',    style:{ gridColumn:'1/2', gridRow:'1/2' } },
  { id:2, file:'camera-seguranca-01.jpg',         alt:'Sistema de câmeras de segurança',     label:'Sistema de Segurança', style:{ gridColumn:'2/3', gridRow:'1/3' }, tall:true },
  { id:3, file:'infraestrutura-eletrica-01.jpg',  alt:'Infraestrutura elétrica',              label:'Infraestrutura Elétrica', style:{ gridColumn:'3/4', gridRow:'1/2' } },
  { id:4, file:'condensadora-01.jpg',             alt:'Condensadora externa',                 label:'Condensadora',         style:{ gridColumn:'1/2', gridRow:'2/3' } },
  { id:5, file:'ambiente-comercial-01.jpg',       alt:'Ambiente comercial climatizado',       label:'Ambiente Comercial',  style:{ gridColumn:'3/4', gridRow:'2/3' } },
]

function GalleryItem({ item, mobileHeight = '180px', desktopHeight = '260px' }) {
  return (
    <div
      className="gallery-item hidden md:block"
      style={{ ...item.style, height: item.tall ? '100%' : desktopHeight }}
    >
      <img
        src={imgs[item.file]}
        alt={item.alt}
        loading="lazy"
        style={{ height: item.tall ? '540px' : desktopHeight }}
      />
      <div className="gallery-overlay">
        <span className="text-white font-sora text-[13px] font-semibold">{item.label}</span>
      </div>
    </div>
  )
}

function MobileItem({ item }) {
  return (
    <div className="gallery-item md:hidden" style={{ height: '180px' }}>
      <img src={imgs[item.file]} alt={item.alt} loading="lazy" style={{ height: '180px' }} />
      <div className="gallery-overlay">
        <span className="text-white font-sora text-xs font-semibold">{item.label}</span>
      </div>
    </div>
  )
}

export default function Gallery() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
        })
      },
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projetos" ref={ref} className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14 fade-up">
          <div className="section-label justify-center">Portfólio</div>
          <h2 className="font-sora font-extrabold text-navy mb-4" style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)' }}>
            Projetos <span className="text-brand">realizados</span>
          </h2>
          <p className="text-[#6b87a0] max-w-[480px] mx-auto text-base">
            Cada instalação é tratada com rigor técnico e atenção ao detalhe.
          </p>
        </div>

        {/* Desktop asymmetric grid */}
        <div
          className="hidden md:grid gap-4 fade-up"
          style={{ gridTemplateColumns:'repeat(3,1fr)', gridTemplateRows:'auto auto' }}
        >
          {GALLERY.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>

        {/* Mobile 2-col grid */}
        <div className="grid md:hidden grid-cols-2 gap-3 fade-up">
          {GALLERY.map((item) => (
            <MobileItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
