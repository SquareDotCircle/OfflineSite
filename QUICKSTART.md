# Quick Start Guide

## Running the Development Server

1. Navigate to the project directory:
```bash
cd /Users/jordanrogan/Documents/Offline/Offline_Web_Preppers/offline-nextjs
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit:
```
http://localhost:3000
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run start` - Start production server (requires build first)
- `npm run lint` - Run ESLint to check for code issues

## Key Features to Test

### Header
- Scroll down to see header background change
- Click "Get in touch" to open contact form
- On mobile, test the hamburger menu

### Hero Section
- Video background should play automatically
- As you scroll down, video fades to black smoothly
- Click filter buttons to jump to sections

### Product Brief Section
- Four feature cards with hover effects
- Logo integrations (arXiv, Wikipedia)

### How It Works Section
- Social media icons with hover effects
- Three-step getting started guide

### No Connectivity Section
- Full-height background image
- Large responsive heading

### No Surveillance Section
- Right-aligned content
- Light background image

### Personalize Agent Section
- Three.js sphere network animation
- Two-column responsive layout
- Powerful tagline callout

### Contact Form
- Click "Get in touch" button
- Form validation on all fields
- Loading state on submit
- Success notification

### Footer
- Company information
- Navigation links
- Social media links
- Responsive grid layout

## File Structure

```
offline-nextjs/
├── app/                      # Next.js App Router
│   ├── components/          # React components
│   │   ├── layout/         # Header, Footer, MobileMenu
│   │   ├── sections/       # Page sections
│   │   └── ui/             # Reusable UI components
│   ├── lib/                # Utilities and hooks
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── public/                  # Static assets
│   ├── videos/             # Video files
│   └── images/             # Image files
└── package.json            # Dependencies
```

## Troubleshooting

### Video not playing
- Check that `/public/videos/0823.mp4` exists
- Clear browser cache and reload
- Some browsers require user interaction before autoplay

### Images not loading
- Verify images exist in `/public/images/`
- Check browser console for 404 errors
- External images (arXiv logo) require internet connection

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Delete `.next` folder and rebuild: `rm -rf .next && npm run build`
- Check Node.js version (requires Node 18+)

### Three.js visualization not working
- Ensure Three.js dependencies are installed
- Check browser console for WebGL errors
- Some older browsers may not support WebGL

## Making Changes

### Adding a new section
1. Create component in `app/components/sections/`
2. Import and add to `app/page.tsx`
3. Update navigation links in `Header.tsx`

### Styling changes
- Edit `tailwind.config.ts` for theme changes
- Use Tailwind utility classes in components
- Global styles in `app/globals.css`

### Adding new pages
1. Create folder in `app/` (e.g., `app/about/`)
2. Add `page.tsx` in that folder
3. Update navigation links

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Platforms
```bash
npm run build
npm run start
```

## Support

For issues or questions, contact the development team.


