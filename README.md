# Alex Rivera — Portfolio

A modern, production-ready personal portfolio built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**.

## ✨ Features

- ⚡ Vite + React 18 + TypeScript
- 🎨 Tailwind CSS with custom design tokens
- 🌙 Dark / Light mode (persisted in localStorage)
- 🎞 Framer Motion animations (page load, scroll reveal, hover)
- 📱 Fully responsive (mobile-first)
- 🧭 Sticky navbar with active section highlight
- 🔝 Scroll-to-top button
- 📬 Contact form (mock submit — swap in EmailJS)
- 🔍 SEO meta tags + Open Graph
- 🚀 Vercel-ready

## 📁 Folder Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── SectionWrapper.tsx
│   └── ScrollToTop.tsx
├── sections/         # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
├── hooks/            # Custom React hooks
│   ├── useTheme.ts
│   └── useActiveSection.ts
├── data/
│   └── portfolio.ts  # All your portfolio data
├── App.tsx
├── main.tsx
└── index.css
```

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## 🎨 Customisation

All content lives in **`src/data/portfolio.ts`** — edit:
- `projects` array for your projects
- `experiences` for work history
- `education` for academic background
- `skills` object for categorised skills

Update personal info (name, tagline, email, social links) in:
- `src/sections/Hero.tsx`
- `src/sections/About.tsx`
- `src/sections/Contact.tsx`
- `src/components/Footer.tsx`
- `index.html` (SEO meta tags)

## 📬 EmailJS Setup (Contact Form)

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. In `Contact.tsx`, replace the mock submit with:

```ts
import emailjs from '@emailjs/browser';

await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { name: form.name, email: form.email, message: form.message },
  'YOUR_PUBLIC_KEY'
);
```

## 🚀 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deploys.

## 🎨 Color Palette

| Token | Light | Dark |
|-------|-------|------|
| `accent` | `#E8FF47` | `#E8FF47` |
| `surface` | `#F5F4EF` | `#0D0D0D` |
| Text | zinc-900 | zinc-100 |

## 📝 License

MIT — use freely for your own portfolio!
