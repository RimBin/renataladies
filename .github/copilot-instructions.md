# RenataLadies – AI assistant guide

This repo contains a Next.js (App Router) + Tailwind storefront scaffold under `web/` plus some legacy/alternate experiments. Follow these rules to be productive and consistent with the Empowering Feminine Minimalism style.

## Repo layout and scope
- Primary app: `web/` (Next.js 14 App Router, Tailwind 3). All feature work goes here.
- Mock data: `web/lib/products.ts` (replace with CMS later).
- Cart state: `web/components/CartProvider.tsx` (client component; wrap layout).
- API stub: `web/app/api/checkout/route.ts` (Stripe later; server-only).
- Unused for this stack: root `package.json` (Vite), `renataladies-custom/` (WordPress plugin). Don’t modify unless explicitly asked.

## Dev workflow (Windows)
- Always run from `web/`:
  - Install: `cd web` then `npm install`
  - Dev: `npm run dev` → http://localhost:3000
  - Build/Start: `npm run build` then `npm start`
  - Lint: `npm run lint`
- If you see a Vite error, you likely ran commands in repo root. Use `web/`.

## Architecture & conventions
- App Router folders: `web/app/(route)/page.tsx`, `layout.tsx`, API under `app/api/*`.
- Components: server by default; add `"use client"` for stateful/interactive UI (e.g., cart, buttons).
- Path alias: `@/*` → project root (`web/tsconfig.json`). Import like `@/lib/products`.
- Images: current pages use `<img>` with a lint override. If switching to `next/image`, add remote patterns in `web/next.config.mjs`.

## Styling system – Empowering Feminine Minimalism
- Tailwind is enabled via `app/globals.css` and `tailwind.config.ts`.
- Palette (use exact hex):
  - Primary pink `#F28ACD`, Secondary purple `#AB57F4`, Text `#28262C`, Background `#FFFFFF`.
- Gradient accents (buttons, heading spans):
  - CSS utility: `.gradient-text { background: linear-gradient(90deg,#F28ACD,#AB57F4); -webkit-background-clip:text; color:transparent; }`
  - Tailwind example: `bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white`.
- Buttons: rounded-full, gradient background, hover opacity 90%.
  - Example: `className="inline-flex items-center rounded-full px-6 py-3 bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white hover:opacity-90"`
- Cards: white bg, subtle shadow `shadow-[0_4px_12px_rgba(0,0,0,0.05)]`, image on top, consistent height.
- Typography: prefer Outfit or DM Sans. Currently `Inter` is loaded in `app/layout.tsx`; to align with brand, swap to `Outfit` via `next/font/google`.
- Layout principles: generous white space, centered blocks, clear hierarchy (Hero → Proof → Services → Testimonials → CTA), subtle reveal animations only (fade-in/slide-up).

## Data & integrations
- Products: in `web/lib/products.ts` for now. When adding a CMS (Sanity/Strapi), place queries in `web/lib/*` and keep server data fetching in server components or `route.ts`.
- Checkout: implement Stripe in `web/app/api/checkout/route.ts`; read secrets from `.env.local` (never expose in client). Example env keys: `STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID`.

## Patterns to follow
- Wrap app with `<CartProvider>` in `app/layout.tsx` (already done) and use `useCart()` in client components.
- Keep SSR/ISR-friendly code in server files; keep interactive logic in client components.
- Use the `@/` alias and colocate small components near routes when it helps readability.

## Deploy notes
- Vercel: zero-config for Next.js. Hostinger: ensure Node 18+, run `npm run build` then `npm start`. Upload `.next/`, `package.json`, `node_modules` (or rebuild on server).

## Gotchas
- Running npm scripts from repo root triggers the legacy Vite script. Always run inside `web/`.
- If switching to `next/image`, configure remote images or you’ll get build errors.
- Keep secrets in `.env.local` (not committed). Use server routes for sensitive logic.

If any of these sections are unclear or missing context (e.g., final font choice, CMS selection), tell me and I’ll update this guide accordingly.