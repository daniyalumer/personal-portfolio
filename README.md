# Personal Portfolio - Daniyal Umer Haral

A modern, interactive portfolio website built with Next.js and Tailwind CSS, featuring animated particles, custom cursor effects, and a sleek dark theme.

![Portfolio Preview](public/placeholder.svg)

## Features

- ✨ Interactive particle background using particlesJS
- 🖱️ Custom cursor effects for a unique user experience
- 🌈 Animated gradient sections with smooth transitions
- 📱 Fully responsive design that works on all devices
- 🎨 Tailwind CSS for styling with shadcn/ui components
- 🌙 Dark theme with purple accents
- 🔄 Smooth scrolling and section transitions

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Reusable UI components
- [Lucide React](https://lucide.dev/) - Beautiful SVG icons
- [Particles.js](https://vincentgarreau.com/particles.js/) - Particle animation library

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the developement server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open http://localhost:3000 in your browser to see the result.

### Project Structure

personal-portfolio/
├── app/                   # Next.js App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with cursor effects
│   └── page.tsx           # Main portfolio page
├── components/
│   └── ui/                # UI components
│       ├── badge.tsx      # Badge component
│       ├── button.tsx     # Button component
│       ├── card.tsx       # Card component for projects
│       ├── clientscripts.tsx  # Client-side effects (particles, cursor)
│       └── tabs.tsx       # Tabs component for skills section
├── lib/
│   └── utils.ts           # Utility functions
├── public/                # Static assets
└── ...config files