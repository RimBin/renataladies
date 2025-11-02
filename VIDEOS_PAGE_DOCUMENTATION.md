# Treniruočių Video Puslapis - Implementacija

## 📋 Sukurti failai

### 1. **web/lib/videoData.ts** - Video duomenų biblioteka
- Video tipo definicija (TypeScript interface)
- 8 pavyzdiniai video įrašai su pilnais duomenimis
- Filtrų sąrašai (kategorijos, lygiai, trukmė)
- Helper funkcijos labeliams gauti

### 2. **web/components/VideoCard.tsx** - Video kortelės komponentas
- Atsakingas dizainas su hover efektais
- Play mygtukas su hover animacija
- Premium badge premium turiniui
- Trukmės indikatorius
- Kategorijos, lygio ir įrangos ženkleliai
- Nuotraukos zoom efektas on hover

### 3. **web/app/videos/page.tsx** - Pagrindinis video puslapis
- Pilnas prisijungimo patikrinimas (NextAuth)
- Hero sekcija su gradientu
- Sticky filtravimo juosta (4 filtrai)
- Responsive video grid (1/2/3 stulpeliai)
- Video grotuvo modal su pilna informacija
- CTA sekcija premium planams
- "Nerasta" būsena su filtro valymu

## 🎨 UX/UI Ypatybės

### Dizaino Sistema
- ✅ Naudoja svetainės gradient spalvas (#F28ACD → #AB57F4)
- ✅ Konsistentūs border-radius (rounded-2xl = 1rem)
- ✅ Standartiniai shadow efektai (hover:shadow-xl)
- ✅ Responsive padding ir spacing
- ✅ Tipografija: font-bold, font-semibold

### Interaktyvumas
- **Hover efektai**: 
  - Kortelė: shadow pakyla
  - Nuotrauka: zoom-in (scale-105)
  - Play mygtukas: fade-in overlay
  - Pavadinimas: spalva → pink
- **Sticky filtrai**: lieka viršuje scrollinant
- **Modal**: backdrop blur, click-outside uždarymui
- **Responsive**: 1 col (mobile) → 2 col (tablet) → 3 col (desktop)

### Filtravimas
1. **Paieška** - tikrina title ir description
2. **Kategorija** - 5 tipai (strength, cardio, yoga, hiit, stretching)
3. **Lygis** - 3 lygiai (beginner, intermediate, advanced)
4. **Trukmė** - 3 intervalai (0-15, 15-30, 30+ min)

### Rezultatų atvaizdavimas
- Rodomas filtruotų video skaičius
- Tuščia būsena su "Išvalyti filtrus" mygtuku
- Premium badge aukštai kokybės turiniui

## 🎬 Video Modal Funkcionalumas

### Modal Struktūra
- **Header**: Title + close button (×)
- **Video Player**: 16:9 iframe (YouTube/Vimeo palaikymas)
- **Info sekcija**:
  - Kategorijos badge su gradient
  - Lygio ir trukmės badges
  - Pilnas aprašymas
  - Reikalingos įrangos sąrašas

### Accessibility
- Click-outside uždarymui
- Stop propagation ant modal turinio
- Scroll lock modal viduje
- ESC klavišas (galima pridėti ateityje)

## 📱 Responsive Breakpoints

```css
Mobile (default):     grid-cols-1
Tablet (sm: 640px):   sm:grid-cols-2
Desktop (lg: 1024px): lg:grid-cols-3
```

## 🔐 Autentifikacija

### Neprisijungęs vartotojas
- Rodo CTA: "Turinys tik narėms"
- 2 mygtukai:
  1. "Rinktis planą" → /plans
  2. "Prisijungti" → NextAuth signIn()

### Prisijungęs vartotojas
- Pilna prieiga prie video bibliotekos
- Gali filtruoti ir žiūrėti video

## 🎯 Best UX Practices Pritaikytos

1. ✅ **Progressive Disclosure** - filtrai sticky, nesikrauna pirmame ekrane
2. ✅ **Instant Feedback** - filtravimas realiu laiku
3. ✅ **Clear Hierarchy** - Hero → Filters → Grid → CTA
4. ✅ **Visual Affordance** - play button, hover states, pointer cursor
5. ✅ **Error Prevention** - empty state su helper textu
6. ✅ **Consistency** - visur naudojami GradientButton, kortelių stiliai
7. ✅ **Performance** - useMemo filtravimui, transition tik kur reikia
8. ✅ **Accessibility** - semantic HTML, contrast ratios, focus states

## 🚀 Ateities Tobulinimas

### Vėliau pridėti
- [ ] Keyboard navigation (ESC, arrows)
- [ ] Favorito funkcionalumas
- [ ] Video progress tracking
- [ ] Playlist kūrimas
- [ ] Social sharing
- [ ] Video completion badges
- [ ] Filtruoti pagal įrangą
- [ ] Sortavimas (naujausi, populiariausi, trumpiausi)
- [ ] "Peržiūrėti vėliau" funkcija

### Sanity CMS Integracija
```typescript
// Ateityje pakeisti mock data su:
import { client } from '@/lib/sanity'

const videos = await client.fetch(`
  *[_type == "video"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category,
    duration,
    level,
    videoUrl,
    "thumbnail": thumbnail.asset->url,
    description,
    equipment,
    isPremium
  }
`)
```

## 📊 Video Duomenys

### Kategorijos
- Jėgos treniruotės (strength) - 3 video
- Kardio (cardio) - 2 video
- Yoga (yoga) - 1 video
- HIIT (hiit) - 1 video
- Tempimas (stretching) - 1 video

### Lygiai
- Pradedantis - 4 video
- Vidutinis - 3 video
- Pažengęs - 1 video

### Premium vs Free
- Free: 5 video
- Premium: 3 video

## 🎨 Placeholder Images

Dabar naudojami placehold.co API su gradient spalvomis.
Production: pakeisti tikromis nuotraukomis `web/public/video-thumbs/`

## ✅ Kokybiški sprendimai

1. **TypeScript** - pilnas type safety
2. **Client Component** - interaktyvumas su hooks
3. **Memoization** - performance filtruojant
4. **Semantic HTML** - SEO ir accessibility
5. **Gradient Consistency** - brand colors visur
6. **Mobile-First** - responsive nuo mobiliojo
7. **Loading States** - "Rasta X treniruočių"
8. **Error States** - tuščia būsena su CTA
