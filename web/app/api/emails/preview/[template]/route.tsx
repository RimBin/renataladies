import { NextRequest, NextResponse } from 'next/server'
import { EmailTemplates } from '@/emails/templates'

// Mock data for previews
const mockData = {
  'order-confirmation': {
    customerName: 'Agnė Petraitė',
    orderNumber: 'RL-2025-0042',
    orderDate: '2025-10-24',
    items: [
      {
        name: 'Omega-3',
        quantity: 2,
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&auto=format&fit=crop'
      },
      {
        name: 'Vitaminas D3',
        quantity: 1,
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&auto=format&fit=crop'
      },
      {
        name: 'Baltymų milteliai',
        quantity: 1,
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=400&auto=format&fit=crop'
      }
    ],
    subtotal: 82.63,
    vat: 17.35,
    shipping: 0,
    total: 99.98,
    shippingAddress: {
      name: 'Agnė Petraitė',
      street: 'Gedimino pr. 12-34',
      city: 'Vilnius',
      postalCode: '01103',
      country: 'Lietuva'
    },
    trackingUrl: 'https://renataladies.lt/tracking/RL-2025-0042'
  },
  
  'password-reset': {
    userName: 'Agnė',
    resetUrl: 'https://renataladies.lt/auth/reset-password?token=abc123xyz789mock',
    expiresIn: '1 valanda'
  },
  
  'welcome': {
    userName: 'Agnė',
    userEmail: 'agne@example.com',
    dashboardUrl: 'https://renataladies.lt/paskyra'
  },
  
  'order-shipped': {
    customerName: 'Agnė Petraitė',
    orderNumber: 'RL-2025-0042',
    trackingNumber: 'DPD1234567890LT',
    trackingUrl: 'https://www.dpd.com/lt/track?q=DPD1234567890LT',
    carrier: 'DPD Lietuva',
    estimatedDelivery: '2025-10-26 - 2025-10-28',
    items: [
      {
        name: 'Omega-3',
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&auto=format&fit=crop'
      },
      {
        name: 'Vitaminas D3',
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=400&auto=format&fit=crop'
      }
    ]
  },
  
  'subscription-confirmation': {
    userName: 'Agnė',
    planName: 'Premium',
    planType: 'monthly' as const,
    price: 19.99,
    startDate: '2025-10-24',
    nextBillingDate: '2025-11-24',
    features: [
      'Visos treniruočių programos',
      'Neribota prieiga prie video bibliotekos',
      'Mitybos planai ir receptai',
      'Asmeninės konsultacijos',
      'VIP bendruomenės grupė',
      'Mėnesiniai live Q&A'
    ],
    dashboardUrl: 'https://renataladies.lt/paskyra',
    videosUrl: 'https://renataladies.lt/treniruociu-video'
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { template: string } }
) {
  const template = params.template

  try {
    let html: string

    switch (template) {
      case 'order-confirmation':
        html = await EmailTemplates.orderConfirmation(mockData['order-confirmation'])
        break

      case 'password-reset':
        html = await EmailTemplates.passwordReset(mockData['password-reset'])
        break

      case 'welcome':
        html = await EmailTemplates.welcome(mockData['welcome'])
        break

      case 'order-shipped':
        html = await EmailTemplates.orderShipped(mockData['order-shipped'])
        break

      case 'subscription-confirmation':
        html = await EmailTemplates.subscriptionConfirmation(mockData['subscription-confirmation'])
        break

      default:
        return new NextResponse('Template not found', { status: 404 })
    }

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8'
      }
    })
  } catch (error) {
    console.error('Error rendering email template:', error)
    return new NextResponse(`Error rendering template: ${error}`, { status: 500 })
  }
}
