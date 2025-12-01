# Offline - Next.js Web Application

A modern, high-performance website built with Next.js 14, TypeScript, and Tailwind CSS featuring dark theme, video backgrounds, and smooth scroll effects.

## 🚀 Features

- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety
- **Tailwind CSS** for modern, utility-first styling
- **Framer Motion** for smooth animations
- **React Hook Form** for form validation
- **Three.js** for 3D visualizations
- Video background with scroll-based fade effects
- Fully responsive design
- Contact form with validation
- SEO optimized

## 📦 Tech Stack

- **Framework**: Next.js 16.0.5 (React 19.2.0)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion 12
- **3D Graphics**: Three.js with React Three Fiber
- **Form Handling**: React Hook Form 7
- **Utilities**: clsx, tailwind-merge

## 🛠️ Installation

1. Clone the repository:
```bash
cd offline-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
offline-nextjs/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Main navigation header
│   │   │   ├── Footer.tsx          # Site footer
│   │   │   └── MobileMenu.tsx      # Mobile navigation menu
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Hero section with tagline
│   │   │   ├── HowItWorks.tsx      # Getting started steps
│   │   │   ├── NoConnectivity.tsx  # Offline features showcase
│   │   │   ├── NoSurveillance.tsx  # Privacy messaging
│   │   │   ├── PersonalizeAgent.tsx # AI personalization with 3D viz
│   │   │   └── ProductBrief.tsx    # Product feature cards
│   │   └── ui/
│   │       ├── Button.tsx          # Reusable button component
│   │       ├── ContactForm.tsx     # Contact form with validation
│   │       ├── Modal.tsx           # Modal wrapper component
│   │       ├── VideoBackground.tsx # Video background component
│   │       └── ScrollFadeOverlay.tsx # Scroll-based fade overlay
│   ├── lib/
│   │   ├── hooks.ts               # Custom React hooks
│   │   └── utils.ts               # Utility functions
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Main page component
│   └── globals.css                # Global styles and Tailwind
├── public/
│   ├── videos/                    # Video assets
│   └── images/                    # Image assets
│       ├── social/                # Social media icons
│       └── remote/                # Background images
├── tailwind.config.ts             # Tailwind configuration
├── next.config.ts                 # Next.js configuration
└── package.json                   # Project dependencies
```

## 🎨 Key Components

### Layout Components
- **Header**: Fixed navigation with scroll effects, desktop/mobile menus, and CTA button
- **Footer**: Site information, links, and social media
- **MobileMenu**: Slide-in menu with Framer Motion animations

### Section Components
- **Hero**: Main landing section with video background and tagline
- **ProductBrief**: Feature cards with logo integrations (arXiv, Wikipedia)
- **HowItWorks**: Three-step getting started guide
- **NoConnectivity**: Full-screen section showcasing offline capabilities
- **NoSurveillance**: Privacy-focused messaging
- **PersonalizeAgent**: AI personalization with Three.js sphere network

### UI Components
- **Button**: Reusable button with primary/secondary variants and loading states
- **Modal**: Accessible modal with keyboard support and body scroll lock
- **ContactForm**: Form with validation using react-hook-form
- **VideoBackground**: Optimized video background with fallback
- **ScrollFadeOverlay**: Smooth scroll-based fade to black effect

## 🎯 Custom Hooks

### `useScrollPosition()`
Tracks current scroll position for header animations.

### `useScrollFade()`
Calculates scroll-based fade progress for video overlay.

### `useLockBodyScroll(lock: boolean)`
Prevents body scroll when modals or menus are open.

## 🎨 Styling

The project uses Tailwind CSS with custom configuration:

- **Colors**: Custom primary color (#ff471d) with hover/dark variants
- **Dark Theme**: Black background (#0e0e0e) throughout
- **Animations**: Custom fade, slide, and glow animations
- **Responsive**: Mobile-first approach with breakpoints
- **Typography**: Inter font family

## 🚢 Building for Production

Build the application:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- ESC key closes modals and menus

## 🔧 Configuration

### Next.js Config
- Image optimization with remote patterns for external sources
- Configured for optimal build output

### Tailwind Config
- Custom color palette
- Custom animations and keyframes
- Extended font families
- Utility classes for common patterns

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For questions or issues, please contact the development team.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
