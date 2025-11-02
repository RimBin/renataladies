# Video Thumbnails - RenataLadies

## Dabartiniai thumbnail šaltiniai

### Unsplash (dabartinis)
Visi video ir programų thumbnails dabar naudoja **Unsplash** - nemokamą, aukštos kokybės nuotraukų biblioteką.

### Naudojami URL pavyzdžiai:

```typescript
// Video thumbnails
'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1280&h=720&fit=crop&q=80'
'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1280&h=720&fit=crop&q=80'
'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1280&h=720&fit=crop&q=80'

// Parametrai:
// - w=1280 (width)
// - h=720 (height - 16:9 aspect ratio)
// - fit=crop (iškerpa į reikiamą formatą)
// - q=80 (kokybė 80%)
```

---

## Kategorijos pagal video tipus

### 🏋️ Jėgos treniruotės (Strength)
- v1: `photo-1571019614242-c5c5dee9f50b` - Moteris su hanteliais
- v5: `photo-1571019613454-1cb2f99b2d8b` - Pilvo presui
- v7: `photo-1517836357463-d25dfeac3438` - Rankų/pečių

### 🏃 Kardio (Cardio)
- v2: `photo-1518611012118-696072aa579a` - Bėgimas/kardio
- v8: `photo-1524594152303-9fd13543fe6e` - Šokių kardio

### 🧘 Yoga
- v3: `photo-1544367567-0f2fcb009e0b` - Yoga pozicija

### ⚡ HIIT
- v4: `photo-1534438327276-14e5300c3a48` - Intensyvios treniruotės

### 🤸 Tempimas (Stretching)
- v6: `photo-1506126613408-eca07ce68773` - Tempimas/atsipalaidavimas

---

## Programų thumbnails

### p1: Sėdmenų treniruotė
`photo-1550345332-09e3ac987658` - Squats/sėdmenų treniruotė

### p2: Sėdmenų namuose
`photo-1598971639058-fab3c3109a00` - Home workout

### p3: Stipri nugara
`photo-1574680096145-d05b474e2155` - Nugaros treniruotė

### p4: Six pack
`photo-1571019614242-c5c5dee9f50b` - Pilvo raumenys/core

---

## Kaip pridėti naujus thumbnails

### 1. Unsplash (rekomenduojama)

**Privalumai:**
- ✅ Nemokamai
- ✅ Aukšta kokybė
- ✅ Greitas CDN
- ✅ Jau sukonfigūruota Next.js

**Kaip naudoti:**
```typescript
// 1. Eikite į https://unsplash.com
// 2. Ieškokite: "fitness workout woman"
// 3. Pasirinkite nuotrauką
// 4. Copy URL iš nuotraukos
// 5. Pridėkite parametrus:

thumbnail: 'https://images.unsplash.com/photo-XXXXXX?w=1280&h=720&fit=crop&q=80'
```

### 2. Sanity CMS (ateityje)

Kai prijungsite Sanity:
```typescript
// sanity/schemas/video.ts
export default {
  name: 'video',
  fields: [
    {
      name: 'thumbnail',
      type: 'image',
      options: {
        hotspot: true, // Crop position
      }
    }
  ]
}

// Tada query:
const imageUrl = urlFor(video.thumbnail)
  .width(1280)
  .height(720)
  .format('webp')
  .quality(80)
  .url()
```

### 3. Savi video thumbnails

Jei turėsite YouTube/Vimeo video:
```typescript
// YouTube
thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

// Vimeo
// Reikia API call gauti thumbnail URL
```

---

## Optimizacija

### Next.js Image komponentas

Jei naudosite `<Image>` komponentą vietoj `<img>`:
```tsx
import Image from 'next/image'

<Image
  src={video.thumbnail}
  alt={video.title}
  width={1280}
  height={720}
  className="object-cover"
  loading="lazy"
/>
```

**Privalumai:**
- Auto WebP conversion
- Lazy loading
- Responsive images
- Cache optimization

### Dabartinis setup (su `<img>`)

next.config.mjs jau turi:
```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

Jei pridėsite kitų šaltinių (pvz., YouTube), pridėkite:
```javascript
{
  protocol: 'https',
  hostname: 'img.youtube.com',
},
```

---

## Performance patarimai

### 1. Thumbnail dydis
- **Rekomenduojamas:** 1280x720 (16:9)
- **Minimum:** 640x360
- **Maximum:** 1920x1080

### 2. Failų dydis
- **Tikslas:** <100KB per thumbnail
- Unsplash su `q=80` automatiškai optimizuoja

### 3. Format
- **WebP** (moderniems browsers)
- **JPEG** (fallback)
- Unsplash palaiko abu

### 4. Lazy loading
Dabar naudojamas native lazy loading:
```html
<img loading="lazy" ... />
```

---

## Ateities planas

- [ ] Pereiti prie Sanity CMS thumbnail valdymui
- [ ] Pridėti video preview (GIF arba short clip)
- [ ] Įdiegti progressive image loading (blur placeholder)
- [ ] Generuoti multiple sizes (responsive images)
- [ ] Pridėti custom upload'ą administratoriams

---

## Quick Reference

### Fitness kategorijos Unsplash

Ieškoti žodžiais:
- `fitness woman workout`
- `yoga woman stretch`
- `hiit training`
- `strength training female`
- `cardio exercise`
- `home workout`
- `gym training`

### Spalvų filtrai

Unsplash leidžia filtruoti pagal spalvas:
- Pink tones: tinka brand'ui
- Purple tones: tinka brand'ui
- Neutral: universalus

URL pavyzdys su spalva:
```
https://unsplash.com/s/photos/fitness?color=pink
```
