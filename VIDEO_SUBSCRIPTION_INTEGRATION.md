# 🔐 Video Prieigos Integracijos Dokumentacija

## Kaip veikia prenumeratos sistema

### 1. **Prieigos lygiai (Access Modes)**

Konfigūruojama per `.env.local` → `NEXT_PUBLIC_OPEN_ACCESS`:

| Režimas | Vertė | Kas gali matyti video? |
|---------|-------|------------------------|
| **Demo** | `"true"` | Visi (net neprisijungę) |
| **Partial** | `"partial"` | Prisijungę vartotojai + nemokamus video visi |
| **Strict** | `"false"` | Tik aktyvią prenumeratą turintys vartotojai |

**Kolkas naudojamas:** `partial` (prisijungę mato viską)

---

### 2. **Vartotojo sesijos duomenys**

NextAuth sesija dabar palaiko papildomus laukus:

```typescript
session.user = {
  id: string
  name: string
  email: string
  image: string | null
  subscription: 'free' | 'basic' | 'premium' | 'vip'  // NEW
  subscriptionExpiry: string (ISO date)                // NEW
  avatar: string | null                                // NEW
}
```

**Demo vartotojas (member@example.com):**
- Subscription: `premium`
- Galioja: +30 dienų nuo prisijungimo
- Avatar: `null` (rodys inicialus)

---

### 3. **Video filtravimas pagal prenumeratą**

`/videos` puslapis automatiškai filtruoja premium video:

```typescript
// videoData.ts
{
  id: 'v1',
  title: 'Video pavadinimas',
  isPremium: true,  // 👈 Premium video
  // ...
}
```

**Logika:**
- Jei `isPremium: false` → rodo visiems
- Jei `isPremium: true` → rodo tik su aktyvią `subscription` ir valid `subscriptionExpiry`

---

### 4. **Checkout API integracija**

`POST /api/checkout`:
- Priima: plan, email, name, phone, address
- Sukuria užsakymą (kolkas tik log'ina)
- **TODO:** Atnaujina vartotojo DB įrašą su subscription

```typescript
// Kada integruosi DB:
await db.user.upsert({
  where: { email },
  create: {
    email,
    name,
    subscription: plan,  // 'basic' | 'premium' | 'vip'
    subscriptionExpiry: new Date(+30 days),
  },
  update: {
    subscription: plan,
    subscriptionExpiry: new Date(+30 days),
  }
})
```

---

### 5. **Kaip testuoti dabar**

#### **Scenarijus 1: Demo režimas**
```bash
# .env.local
NEXT_PUBLIC_OPEN_ACCESS=true
```
- Rezultatas: Visi video matomi visiems (net neprisijungus)

#### **Scenarijus 2: Partial režimas** (dabartinis)
```bash
NEXT_PUBLIC_OPEN_ACCESS=partial
```
- Prisijunk su `member@example.com` / `demo123`
- Rezultatas: Matai visus video (turi premium prenumeratą)
- Atsijunk → nematai nieko

#### **Scenarijus 3: Strict režimas**
```bash
NEXT_PUBLIC_OPEN_ACCESS=false
```
- Rezultatas: Tik su aktyvią subscription + valid expiry data

---

### 6. **Kas dar reikia padaryti vėliau**

#### ✅ **Padaryta dabar:**
- Prieigos kontrolės sistema su 3 režimais
- Session palaiko subscription duomenis
- Video filtruojami pagal isPremium flag
- Checkout API skeleton su TODO komentarais
- TypeScript tipai NextAuth sesijoms

#### 🔄 **Liko integruoti:**
1. **Duomenų bazė (Prisma + PostgreSQL/MySQL)**
   - User schema su subscription laukais
   - Order schema užsakymams
   - Prisma migrations

2. **Tikras checkout flow:**
   - Stripe/Paysera mokėjimo integracija
   - Webhook handler mokėjimui patvirtinti
   - Automatinis subscription atnaujinimas po apmokėjimo

3. **Profilio atnaujinimas:**
   - `/paskyra` puslapyje rodyti tikrą subscription info
   - Galimybė upgrade/downgrade planus
   - Subscription istorija

4. **Video CMS:**
   - Sanity/Strapi schema video
   - Dynamic video loading (ne hardcoded)
   - Premium flag valdymas per CMS

5. **Email notifications:**
   - Patvirtinimas po užsakymo
   - Subscription expiry warning
   - Renewal reminder

---

## Debug režimas

`/videos` puslapyje rodomas debug panel (kai neprisijungęs):

```
Access Mode: partial
Auth Status: unauthenticated
Has Session: No
Subscription: None
Access Granted: No
```

Šis panel'as padeda debuginti prieigos kontrolę development'e.

**Production:** pašalinti debug panel arba rodyti tik admins.

---

## Konfigūracija

### Environment variables:
```bash
# Access control
NEXT_PUBLIC_OPEN_ACCESS=partial  # "true" | "partial" | "false"

# NextAuth
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3005

# Database (vėliau)
DATABASE_URL=postgresql://...

# Payments (vėliau)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

---

## Greitas startas

**Kolkas (demo):**
1. Prisijunk su `member@example.com` / `demo123`
2. Eik į `/videos`
3. Matai visus video (turi premium subscription)

**Vėliau (production):**
1. Vartotojas registruojasi
2. Užsisako planą → Checkout → Mokėjimas
3. Po sėkmingo mokėjimo: DB atnaujinamas su subscription
4. Session refresh → video prieiga suteikiama
5. Po 30 dienų: subscription expiry → access denied

---

**Paruošta integracijai, bet veikia demo režime!** ✅
