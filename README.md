# F & F Instalações — Site Institucional

> React + Vite + Tailwind CSS · Pronto para deploy na Vercel

## Stack

- **React 18** — UI
- **Vite 5** — build & dev server
- **Tailwind CSS 3** — utility classes instalado localmente
- **PostCSS + Autoprefixer** — processamento CSS

---

## Rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev
# Acesse http://localhost:5173
```

## Build de produção

```bash
npm run build      # gera /dist
npm run preview    # preview local do build
```

## Deploy na Vercel

1. Faça push do projeto para um repositório GitHub/GitLab
2. Importe o repositório na [Vercel](https://vercel.com)
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output dir: `dist`
6. Clique em **Deploy** — pronto.

O arquivo `vercel.json` já está configurado para SPA routing.

---

## Imagens

As imagens estão em `src/assets/images/`. Substitua os placeholders pelas fotos reais dos serviços:

| Arquivo | Uso |
|---|---|
| `ar-condicionado-01.jpg` | Card da galeria — split residencial |
| `camera-seguranca-01.jpg` | Card central da galeria (alto) |
| `infraestrutura-eletrica-01.jpg` | Galeria |
| `condensadora-01.jpg` | Galeria |
| `ambiente-comercial-01.jpg` | Galeria |
| `equipe-tecnica.jpg` | Seção Sobre |

**Resolução recomendada:** 800×600 px (landscape) · 800×1000 px para `camera-seguranca-01.jpg`

---

## Estrutura

```
src/
├── components/
│   ├── Header.jsx          # Header fixo com glassmorphism + menu mobile
│   ├── Hero.jsx            # Seção hero com overlay, headline e CTAs
│   ├── Services.jsx        # 6 cards de serviços com hover animado
│   ├── About.jsx           # Seção institucional com stats
│   ├── Gallery.jsx         # Galeria assimétrica desktop / grid mobile
│   ├── Differentials.jsx   # Diferenciais com ícones
│   ├── Testimonials.jsx    # 3 depoimentos
│   ├── CtaBanner.jsx       # Banner CTA WhatsApp
│   ├── Contact.jsx         # Formulário + mapa + info de contato
│   ├── Footer.jsx          # Rodapé completo
│   └── FloatingWhatsApp.jsx # Botão flutuante com pulse
├── data/
│   ├── services.js         # Dados dos serviços
│   ├── testimonials.js     # Dados dos depoimentos
│   └── gallery.js          # Metadados da galeria
├── assets/images/          # Imagens locais (substituir pelos reais)
├── App.jsx
├── main.jsx
└── index.css               # CSS global + utilitários customizados
```

---

## Customização rápida

- **Número WhatsApp:** buscar `5545988114290` e trocar pelo novo
- **Cores:** CSS vars em `src/index.css` → `:root { --brand, --navy... }`
- **Serviços:** editar `src/data/services.js`
- **Depoimentos:** editar `src/data/testimonials.js`

