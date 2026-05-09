// Substitua os caminhos pelos arquivos reais em src/assets/images/
// Resolução recomendada: 800x600 para cards, 800x1000 para o card central

export const galleryItems = [
  {
    id: 1,
    src: '/src/assets/images/ar-condicionado-01.jpg',
    alt: 'Instalação de ar condicionado split residencial',
    label: 'Split Residencial',
    style: { gridColumn: '1/2', gridRow: '1/2' },
  },
  {
    id: 2,
    src: '/src/assets/images/camera-seguranca-01.jpg',
    alt: 'Sistema de câmeras de segurança instalado',
    label: 'Sistema de Segurança',
    style: { gridColumn: '2/3', gridRow: '1/3' },
    tall: true,
  },
  {
    id: 3,
    src: '/src/assets/images/infraestrutura-eletrica-01.jpg',
    alt: 'Infraestrutura elétrica para ar condicionado',
    label: 'Infraestrutura Elétrica',
    style: { gridColumn: '3/4', gridRow: '1/2' },
  },
  {
    id: 4,
    src: '/src/assets/images/condensadora-01.jpg',
    alt: 'Condensadora externa de ar condicionado',
    label: 'Condensadora',
    style: { gridColumn: '1/2', gridRow: '2/3' },
  },
  {
    id: 5,
    src: '/src/assets/images/ambiente-comercial-01.jpg',
    alt: 'Ambiente comercial climatizado',
    label: 'Ambiente Comercial',
    style: { gridColumn: '3/4', gridRow: '2/3' },
  },
]
