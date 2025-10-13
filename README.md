# 🌸 RenataLadies - Empowering Feminine Minimalism

Next.js e-commerce platform for nutrition plans, consultations, and wellness content.

## 🚀 Quick Start

### Development
```bash
# Navigate to web directory
cd web

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
cd web
npm run build
npm start
```

## 📦 Project Structure

```
web/                    # Main Next.js application
├── app/               # App Router pages
│   ├── page.tsx       # Homepage
│   ├── products/      # Product catalog
│   ├── plans/         # Nutrition plans
│   ├── cart/          # Shopping cart
│   └── api/           # API routes
├── components/        # React components
├── lib/              # Utilities and data
├── public/           # Static assets
└── styles/           # Global styles
```

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Authentication**: NextAuth.js
- **CMS**: Sanity (planned)
- **Payments**: Stripe (planned)
- **Deployment**: Vercel

## 🌐 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
cd web
vercel
```

3. **Environment Variables** (Vercel Dashboard):
   - `NEXTAUTH_SECRET` - Generate with `openssl rand -base64 32`
   - `NEXTAUTH_URL` - Your production URL
   - Add Stripe/Sanity keys when ready

### Custom Domain
- Point DNS A record to `76.76.21.21`
- Add CNAME `www` to `cname.vercel-dns.com`
- Configure in Vercel Dashboard → Settings → Domains

## 📝 Environment Variables

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

See `.env.example` for required variables.

## 🛠️ Scripts

- `npm run dev` - Development server (port 3000)
- `npm run build` - Production build
- `npm start` - Production server
- `npm run lint` - ESLint check

## 📱 Features

- ✅ Responsive navigation
- ✅ Product grid with filtering
- ✅ Shopping cart (client-side)
- ✅ Nutrition plans showcase
- ✅ Testimonials slider
- 🔄 Stripe checkout (planned)
- 🔄 Sanity CMS integration (planned)
- 🔄 User authentication (planned)

## 🎯 Brand Guidelines

**Colors**:
- Primary Pink: `#F28ACD`
- Secondary Purple: `#AB57F4`
- Text: `#28262C`
- Background: `#FFFFFF`

**Typography**: Outfit, DM Sans (fallback: Inter)

**Design Principles**:
- Generous white space
- Subtle animations (fade-in, slide-up)
- Gradient accents on buttons and headings
- Card-based layouts with soft shadows

## 📄 License

Private - All rights reserved

---

Built with 💜 for empowering women through wellness
