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

async function checkData() {
  console.log('🔍 Checking Sanity data...\n')

  try {
    const plans = await client.fetch('*[_type == "plan"]')
    console.log(`✅ Found ${plans.length} plans:`)
    
    plans.forEach((plan: any) => {
      console.log(`  - ${plan.title} (${plan.kcal} kcal)`)
    })
  } catch (error) {
    console.error('❌ Error:', error)
  }
}

checkData()