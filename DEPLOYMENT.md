# Deployment Guide - RenataLadies

## ✅ Build Completed Successfully

Production build sukurtas sėkmingai! Visi puslapiai sukompiliuoti ir paruošti deployment'ui.

## 📦 Deployment Options

### 1. **Vercel (Rekomenduojama - Zero Config)**

#### Greitas Deployment:
```bash
# Instaliuok Vercel CLI
npm i -g vercel

# Iš web/ direktorijos
cd web
vercel

# Arba production deployment
vercel --prod
```

#### Per Git:
1. Push į GitHub
2. Eik į [vercel.com](https://vercel.com)
3. Import repository
4. Nustatyk root directory: `web`
5. Deploy automatically

**Environment Variables:**
- `.env.local` faile esančias reikšmes įkelk į Vercel dashboard
- `NEXTAUTH_URL` - Tavo production URL
- `NEXTAUTH_SECRET` - Generuok: `openssl rand -base64 32`
- Stripe keys (jei naudoji)

---

### 2. **Hostinger (Shared Hosting)**

#### Reikalavimai:
- Node.js 18+ palaikymas
- SSH prieiga

#### Deployment Steps:

1. **Build lokaliai:**
```bash
cd web
npm run build
```

2. **Upload į serverį per FTP/SSH:**
```
web/
├── .next/          # Build folder
├── public/         # Static files
├── node_modules/   # Dependencies (arba npm install serveryje)
├── package.json
├── package-lock.json
└── next.config.mjs
```

3. **SSH į serverį ir paleisk:**
```bash
cd /path/to/your/web
npm install --production
npm start
```

4. **Setup process manager (PM2):**
```bash
npm install -g pm2
pm2 start npm --name "renataladies" -- start
pm2 save
pm2 startup
```

---

### 3. **Manual Server (VPS - DigitalOcean, Linode, AWS)**

#### Setup:
```bash
# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repo
git clone <your-repo>
cd renataladies/web

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
npm install -g pm2
pm2 start npm --name "renataladies" -- start
pm2 startup
pm2 save
```

#### Nginx Reverse Proxy:
```nginx
server {
    listen 80;
    server_name renataladies.lt;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔧 Environment Variables

Būtinos environment variables production'e:

```env
# Auth (Next-Auth)
NEXTAUTH_URL=https://tavo-domain.lt
NEXTAUTH_SECRET=<generuok su openssl rand -base64 32>

# Stripe (jei naudoji)
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# Database (jei naudosi)
DATABASE_URL=postgresql://...

# Email (jei naudosi)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
```

---

## 🚀 Quick Vercel Deploy

**Greičiausias būdas (1 minutė):**

1. Push projektą į GitHub
2. Eik į [vercel.com/new](https://vercel.com/new)
3. Import `renataladies` repo
4. Set Root Directory: `web`
5. Click Deploy ✅

Vercel automatiškai:
- Detektuos Next.js
- Sukurs build
- Paruoš production URL
- Auto-deploy su kiekvienu push

---

## 📊 Build Info

```
✓ Compiled successfully
✓ 38 pages generated
✓ Optimized for production
✓ Static: 37 pages
✓ Dynamic: 1 page (studio)
```

---

## 🔍 Pre-Deployment Checklist

- [x] Build sukurtas be klaidų
- [ ] `.env.local` variables nukopijuotos į deployment platform
- [ ] Images/assets teisingai veikia
- [ ] API routes testuoti
- [ ] Authentication setup (jei naudoji)
- [ ] Analytics pridėti (Google Analytics, etc.)
- [ ] Domain DNS nustatytas
- [ ] SSL/HTTPS enabled

---

## 🆘 Troubleshooting

### Build klaidos:
```bash
# Išvalyk cache ir rebuild
rm -rf .next
npm run build
```

### Port užimtas:
```bash
# Nustatyk kitą portą
npm start -- -p 3001
```

### Vercel deployment error:
- Patikrink, ar Root Directory nustatytas į `web`
- Patikrink environment variables
- Pažiūrėk deployment logs Vercel dashboard

---

## 📞 Support

Jei reikia pagalbos su deployment:
- Vercel docs: https://vercel.com/docs
- Next.js deployment: https://nextjs.org/docs/deployment
- Hostinger: https://www.hostinger.com/tutorials/
