import { NextResponse } from 'next/server'
import { PLANS } from '@/lib/planData'

export async function GET() {
  return NextResponse.json(PLANS)
}
