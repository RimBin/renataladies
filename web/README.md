# Renataladies Storefront (Next.js + Tailwind)

This is a minimal e‑commerce storefront scaffold using Next.js (App Router) and Tailwind CSS. It ships with:

- App Router structure (`/app`), Tailwind configured
- Mock product data and product pages
- Client cart state and a demo checkout API stub

You can later connect a headless CMS (Sanity/Strapi) and Stripe/Paysera checkout.

## Prerequisites
- Node.js 18+ (recommended LTS)

## Setup

1. Install dependencies
```powershell
# from the web folder
cd web
npm install
```

2. Start dev server
```powershell
npm run dev
```

Open http://localhost:3000

## Environment
Copy `.env.example` to `.env.local` if you plan to add Stripe or any secrets later.

## Build
```powershell
npm run build ; npm start
```

## Deploy
- Vercel: import the repo, set env vars if needed, deploy.
- Hostinger: build locally or in CI, upload `.next`, `package.json`, and run with Node (or use Docker). Ensure Node 18+ and `npm run start` as the start command.

## Next steps
- Replace mock data in `lib/products.ts` with real CMS/API
- Implement Stripe Checkout in `app/api/checkout/route.ts`
- Add SEO metadata, sitemap, and image optimizations
