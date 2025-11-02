import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]/route'

// Skeleton for Stripe/Paysera checkout integration
export async function GET(req: NextRequest) {
  const plan = req.nextUrl.searchParams.get('plan')
  if (!plan) return NextResponse.json({ error: 'Missing plan' }, { status: 400 })
  return NextResponse.redirect(new URL(`/thank-you?plan=${plan}`, req.url))
}

// POST: Handle checkout form submission
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    const body = await req.json()
    const { plan, email, name, phone, address } = body

    // Validate required fields
    if (!plan || !email || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // TODO: Integrate with actual database (Prisma/DB client)
    // For now, just log the order details
    console.log('📦 New order received:', {
      plan,
      email,
      name,
      phone,
      address,
      userId: session?.user?.email,
      timestamp: new Date().toISOString()
    })

    // TODO: Create/update user in database
    // await db.user.upsert({
    //   where: { email },
    //   create: {
    //     email,
    //     name,
    //     phone,
    //     address,
    //     subscription: plan, // 'basic', 'premium', 'vip'
    //     subscriptionExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // +30 days
    //   },
    //   update: {
    //     name,
    //     phone,
    //     address,
    //     subscription: plan,
    //     subscriptionExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    //   }
    // })

    // TODO: Create order record
    // const order = await db.order.create({
    //   data: {
    //     userId: email,
    //     plan,
    //     amount: getPlanPrice(plan),
    //     status: 'pending',
    //     items: JSON.stringify(body.cart || []),
    //   }
    // })

    // TODO: Initialize payment with Stripe/Paysera
    // const paymentSession = await stripe.checkout.sessions.create({...})
    // return NextResponse.json({ sessionId: paymentSession.id })

    // For demo: return success
    return NextResponse.json({
      success: true,
      message: 'Order created (demo mode)',
      redirectUrl: `/thank-you?plan=${plan}&email=${email}`
    })

  } catch (error) {
    console.error('❌ Checkout error:', error)
    return NextResponse.json(
      { error: 'Checkout failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// Helper: Get plan pricing (move to config later)
function getPlanPrice(plan: string): string {
  const prices: Record<string, string> = {
    basic: '29.00',
    premium: '49.00',
    vip: '99.00',
  }
  return prices[plan] || '0.00'
}
