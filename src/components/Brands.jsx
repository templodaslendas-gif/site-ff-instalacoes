import { useEffect, useRef } from 'react'

// Marcas com logos em SVG inline (sem precisar baixar imagens externas)
const BRANDS = [
  { name: 'LG', component: () => (
    <svg viewBox="0 0 100 40" className="h-8 w-auto">
      <text x="50" y="28" textAnchor="middle" className="fill-current" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '24px', letterSpacing: '-0.02em' }}>LG</text>
    </svg>
  )},
  { name: 'Samsung', component: () => (
    <svg viewBox="0 0 140 40" className="h-7 w-auto">
      <text x="70" y="28" textAnchor="middle" className="fill-current" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '20px', letterSpacing: '-0.02em' }}>SAMSUNG</text>
    </svg>
  )},
  { name: 'Gree', component: () => (
    <svg viewBox="0 0 100 40" className="h-8 w-auto">
      <text x="50" y="28" textAnchor="middle" className="fill-current" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '22px', letterSpacing: '0.05em' }}>GREE</text>
    </svg>
  )},
  { name: 'Midea', component: () => (
    <svg viewBox="0 0 110 40" className="h-7 w-auto">
      <text x="55" y="28" textAnchor="middle" className="fill-current" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '21px', letterSpacing: '0.02em' }}>Midea</text>
    </svg>
  )},
  { name: 'Springer', component: () => (
    <svg viewBox="0 0 130 40" className="h-7 w-auto">
      <text x="65" y="28" textAnchor="middle" className="fill-current" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '20px', letterSpacing: '0.02em' }}>Springer</text>
    </svg>
  )},
  { name: 'TCL', component: () => (
    <svg viewBox="0 0 100 40" className="h-8 w-auto">
      <text x="50" y="28" textAnchor="middle" className="fill-current" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '22px', letterSpacing: '0.05em' }}>TCL</text>
    </svg>
  )},
  { name: 'Philco', component: () => (
    <svg viewBox="0 0 110 40" className="h-7 w-auto">
      <text x="55" y="28" textAnchor="middle" className="fill-current" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '21px', letterSpacing: '0.02em' }}>PHILCO</text>
    </svg>
  )},
  { name: 'Electrolux', component: () => (
    <svg viewBox="0 0 140 40" className="h-7 w-auto">
      <text x="70" y="28" textAnchor="middle" className="fill-current" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '0.02em' }}>Electrolux</text>
    </svg>
  )},
]

// Duplicamos a lista para criar loop infinito
const LOOP_BRANDS = [...BRANDS, ...BRANDS]

export default function Brands() {
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
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden border-y border-[#e2ecf8]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <div className="section-label justify-center">Parceiros de qualidade</div>
          <h2 className="font-sora font-extrabold text-navy leading-[1.2] mb-3"
            style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>
            Marcas que <span className="text-brand">trabalhamos</span>
          </h2>
          <p className="text-[#6b87a0] text-[15px] sm:text-[16px] max-w-xl mx-auto leading-[1.7]">
            Atendemos as principais marcas do mercado de climatização com peças originais e instalação certificada.
          </p>
        </div>

        {/* Infinite carousel */}
        <div className="brands-carousel-container fade-up">
          {/* Fade gradients on edges */}
          <div className="brands-fade-left" />
          <div className="brands-fade-right" />

          <div className="brands-track">
            {LOOP_BRANDS.map((brand, i) => {
              const BrandLogo = brand.component
              return (
                <div
                  key={`${brand.name}-${i}`}
                  className="brand-item"
                  title={brand.name}
                >
                  <BrandLogo />
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-10 fade-up">
          <p className="text-[#6b87a0] text-[13px]">
            <span className="text-brand font-medium">+8 marcas</span> de equipamentos de climatização atendidas com profissionalismo
          </p>
        </div>
      </div>
    </section>
  )
}