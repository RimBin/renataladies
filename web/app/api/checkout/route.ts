import { NextRequest, NextResponse } from 'next/server'
// Skeleton for Stripe: create a checkout session here in POST/GET.
export async function GET(req: NextRequest) {
  const plan = req.nextUrl.searchParams.get('plan')
  if (!plan) return NextResponse.json({ error: 'Missing plan' }, { status: 400 })
  return NextResponse.redirect(new URL(`/thank-you?plan=${plan}`, req.url))
}
