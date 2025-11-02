/**
 * Example API routes showing how to use email templates
 * 
 * These are example implementations. Integrate them into your actual
 * checkout, auth, and subscription flows.
 */

import { NextRequest, NextResponse } from 'next/server'
import { EmailTemplates, EMAIL_SUBJECTS } from '@/emails/templates'
import { sendEmail } from '@/lib/email'

/**
 * Example: Send order confirmation email
 * POST /api/emails/order-confirmation
 */
export async function POST_OrderConfirmation(req: NextRequest) {
  try {
    const body = await req.json()
    const { 
      email, 
      customerName, 
      orderNumber, 
      orderDate,
      items,
      subtotal,
      vat,
      shipping,
      total,
      shippingAddress
    } = body

    // Render email HTML
    const html = await EmailTemplates.orderConfirmation({
      customerName,
      orderNumber,
      orderDate,
      items,
      subtotal,
      vat,
      shipping,
      total,
      shippingAddress
    })

    // Send email
    const result = await sendEmail({
      to: email,
      subject: EMAIL_SUBJECTS.orderConfirmation(orderNumber),
      html
    })

    if (result.success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 })
    }
  } catch (error) {
    console.error('Error sending order confirmation:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}

/**
 * Example: Send password reset email
 * POST /api/emails/password-reset
 */
export async function POST_PasswordReset(req: NextRequest) {
  try {
    const { email, userName, resetToken } = await req.json()

    const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/reset-password?token=${resetToken}`
    
    const html = await EmailTemplates.passwordReset({
      userName,
      resetUrl,
      expiresIn: '1 valanda'
    })

    const result = await sendEmail({
      to: email,
      subject: EMAIL_SUBJECTS.passwordReset,
      html
    })

    return NextResponse.json({ success: result.success })
  } catch (error) {
    console.error('Error sending password reset:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}

/**
 * Example: Send welcome email
 * POST /api/emails/welcome
 */
export async function POST_Welcome(req: NextRequest) {
  try {
    const { email, userName } = await req.json()

    const dashboardUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/paskyra`
    
    const html = await EmailTemplates.welcome({
      userName,
      userEmail: email,
      dashboardUrl
    })

    const result = await sendEmail({
      to: email,
      subject: EMAIL_SUBJECTS.welcome,
      html
    })

    return NextResponse.json({ success: result.success })
  } catch (error) {
    console.error('Error sending welcome email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}

/**
 * Example: Send order shipped notification
 * POST /api/emails/order-shipped
 */
export async function POST_OrderShipped(req: NextRequest) {
  try {
    const {
      email,
      customerName,
      orderNumber,
      trackingNumber,
      trackingUrl,
      carrier,
      estimatedDelivery,
      items
    } = await req.json()

    const html = await EmailTemplates.orderShipped({
      customerName,
      orderNumber,
      trackingNumber,
      trackingUrl,
      carrier,
      estimatedDelivery,
      items
    })

    const result = await sendEmail({
      to: email,
      subject: EMAIL_SUBJECTS.orderShipped(orderNumber),
      html
    })

    return NextResponse.json({ success: result.success })
  } catch (error) {
    console.error('Error sending order shipped email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}

/**
 * Example: Send subscription confirmation
 * POST /api/emails/subscription-confirmation
 */
export async function POST_SubscriptionConfirmation(req: NextRequest) {
  try {
    const {
      email,
      userName,
      planName,
      planType,
      price,
      startDate,
      nextBillingDate,
      features
    } = await req.json()

    const dashboardUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/paskyra`
    const videosUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/treniruociu-video`

    const html = await EmailTemplates.subscriptionConfirmation({
      userName,
      planName,
      planType,
      price,
      startDate,
      nextBillingDate,
      features,
      dashboardUrl,
      videosUrl
    })

    const result = await sendEmail({
      to: email,
      subject: EMAIL_SUBJECTS.subscriptionConfirmation(planName),
      html
    })

    return NextResponse.json({ success: result.success })
  } catch (error) {
    console.error('Error sending subscription confirmation:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}

// Export usage examples
export const EmailExamples = {
  orderConfirmation: POST_OrderConfirmation,
  passwordReset: POST_PasswordReset,
  welcome: POST_Welcome,
  orderShipped: POST_OrderShipped,
  subscriptionConfirmation: POST_SubscriptionConfirmation
}
