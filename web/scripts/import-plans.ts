import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as path from 'path'

// Load .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
})

const PLANS = [
  {
    id: 'fatloss-1600',
    title: 'Riebalų mažinimo planas (1600 kcal)',
    goal: 'weight-loss',
    diet: 'balanced',
    days: 7,
    kcal: 1600,
    recipes: 35,
    price: 29.99,
    includes: ['4 valgiai per dieną', 'Pirkinių sąrašai', 'Pakaitalai'],
    thumbUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    samplePdf: '/samples/mityba-1600.pdf',
    rating: 4.9,
    description: 'Subalansuotas mitybos planas skirtas sveikam svorio mažinimui. 1600 kcal per dieną užtikrina energiją ir sotumą.',
  },
  {
    id: 'muscle-2000',
    title: 'Raumenų auginimas (2000–2200 kcal)',
    goal: 'muscle-gain',
    diet: 'balanced',
    days: 7,
    kcal: 2100,
    recipes: 40,
    price: 34.99,
    includes: ['Baltyminiai užkandžiai', 'Variantai sporto dienoms', 'Pirkinių sąrašai'],
    thumbUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1400&auto=format&fit=crop',
    samplePdf: '/samples/mityba-2000.pdf',
    rating: 4.8,
    description: 'Mitybos planas raumenų augimui su padidintu baltymų kiekiu ir treniruočių dienų variantais.',
  },
  {
    id: 'vegan-1800',
    title: 'Augalinis balansas (1800 kcal)',
    goal: 'weight-loss',
    diet: 'vegan',
    days: 7,
    kcal: 1800,
    recipes: 38,
    price: 31.99,
    includes: ['Augaliniai baltymai', 'Greiti pietūs', 'Sezoniniai produktai'],
    thumbUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop',
    samplePdf: '/samples/mityba-vegan.pdf',
    rating: 4.7,
    description: '100% augalinis mitybos planas su visais reikalingais maisto medžiagomis ir baltymais.',
  },
  {
    id: 'glutenfree-1700',
    title: 'Be gliuteno (1700 kcal)',
    goal: 'weight-loss',
    diet: 'balanced',
    days: 7,
    kcal: 1700,
    recipes: 34,
    price: 29.99,
    includes: ['Be glitimo alternatyvos', 'Pirkinių sąrašai', 'Pakaitalai'],
    thumbUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1400&auto=format&fit=crop',
    samplePdf: '/samples/mityba-glutenfree.pdf',
    rating: 4.6,
    description: 'Mitybos planas be gliuteno turinčių produktų, tinkantis celiakija sergantiems.',
  },
]

async function importPlans() {
  console.log('🚀 Starting import...\n')

  for (const plan of PLANS) {
    try {
      // Create slug from title
      const slug = plan.id

      const doc = {
        _type: 'plan',
        _id: plan.id,
        title: plan.title,
        slug: {
          _type: 'slug',
          current: slug,
        },
        goal: plan.goal,
        diet: plan.diet,
        kcal: plan.kcal,
        days: plan.days,
        recipes: plan.recipes,
        price: plan.price,
        rating: plan.rating,
        includes: plan.includes,
        description: plan.description,
        // Note: Images need to be uploaded separately via Studio
        // or use Sanity's image upload API
      }

      const result = await client.createOrReplace(doc)
      console.log(`✅ Imported: ${plan.title}`)
    } catch (error) {
      console.error(`❌ Error importing ${plan.title}:`, error)
    }
  }

  console.log('\n✨ Import complete!')
}

importPlans()
