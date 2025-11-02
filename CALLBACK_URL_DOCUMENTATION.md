# Callback URL funkcionalumas - RenataLadies

## Apžvalga
Sistema dabar palaiko `callbackUrl` - tai reiškia, kad kai vartotojas prisijungia, jis grįžta į tą pačią vietą, kurioje buvo prieš prisijungimą.

## Kaip tai veikia?

### 1. NextAuth konfigūracija
Failas: `web/app/api/auth/[...nextauth]/route.ts`

```typescript
callbacks: {
  async redirect({ url, baseUrl }) {
    // If url is a relative path, return it as-is
    if (url.startsWith('/')) return `${baseUrl}${url}`
    // If url is from the same origin, return it
    if (new URL(url).origin === baseUrl) return url
    // Otherwise return to home
    return baseUrl
  },
}
pages: {
  signIn: '/auth/signin',
}
```

### 2. Prisijungimo puslapis
Failas: `web/app/auth/signin/page.tsx`

- Priima `callbackUrl` parametrą iš URL query string
- Po sėkmingo prisijungimo nukreipia į `callbackUrl`
- Jei `callbackUrl` nepateiktas, nukreipia į `/`

### 3. Access Modal komponentai
Failai:
- `web/app/videos/page.tsx`
- `web/app/programs/[slug]/page.tsx`

Kai vartotojas paspaudžia "Prisijungti" mygtukką:

```typescript
const callbackUrl = encodeURIComponent(
  window.location.pathname + 
  window.location.search + 
  window.location.hash
)
window.location.href = `/auth/signin?callbackUrl=${callbackUrl}`
```

## Pavyzdžiai

### 1. Vartotojas žiūri video puslapį su filtrais
- **Dabartinis URL**: `/videos?category=cardio#video-5`
- **Paspauda "Prisijungti"**: Nukreipiamas į `/auth/signin?callbackUrl=%2Fvideos%3Fcategory%3Dcardio%23video-5`
- **Po prisijungimo**: Grįžta į `/videos?category=cardio#video-5`

### 2. Vartotojas žiūri programos detales
- **Dabartinis URL**: `/programs/sedmenu-treniruote`
- **Paspauda "Prisijungti"**: Nukreipiamas į `/auth/signin?callbackUrl=%2Fprograms%2Fsedmenu-treniruote`
- **Po prisijungimo**: Grįžta į `/programs/sedmenu-treniruote`

### 3. Vartotojas yra home puslapyje
- **Dabartinis URL**: `/`
- **Eina į prisijungimą**: `/auth/signin`
- **Po prisijungimo**: Grįžta į `/`

## Demo credentials
Testavimui naudokite:
- **El. paštas**: `member@example.com`
- **Slaptažodis**: `demo123`

## Testavimas

### Test Case 1: Video puslapis
1. Eikite į `/videos`
2. Paspauskite bet kurį video (jei neprisijungęs)
3. Matysite access modal
4. Paspauskite "Prisijungti"
5. Įveskite demo credentials
6. Turėtumėte grįžti į `/videos`

### Test Case 2: Programos puslapis
1. Eikite į `/programs/sedmenu-treniruote`
2. Paspauskite ant video korteles (jei premium ir neprisijungęs)
3. Matysite access modal
4. Paspauskite "Prisijungti"
5. Įveskite demo credentials
6. Turėtumėte grįžti į `/programs/sedmenu-treniruote`

### Test Case 3: Su filtrais
1. Eikite į `/videos?category=cardio&level=beginner`
2. Paspauskite bet kurį video
3. Paspauskite "Prisijungti"
4. Prisijunkite
5. Turėtumėte grįžti į `/videos?category=cardio&level=beginner`

## Kodėl tai svarbu?

- **UX**: Vartotojas nepraranda konteksto (filtrai, paieška, scroll pozicija)
- **Conversion**: Mažesnė trinties - vartotojas grįžta tiesiai į turinį, kurį norėjo matyti
- **Engagement**: Didesnė tikimybė, kad vartotojas tęs veiklą po prisijungimo

## Ateities patobulinimai

- [ ] Išsaugoti scroll poziciją
- [ ] Išsaugoti modal būseną (jei buvo atidarytas video)
- [ ] Pridėti "Grįžti atgal" funkciją su browser history
- [ ] OAuth providers (Google, Facebook) su callback support
