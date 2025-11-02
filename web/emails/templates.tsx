import * as React from 'react'

// Import email templates - these will be lazy loaded
export { default as OrderConfirmation } from './OrderConfirmation'
export { default as PasswordReset } from './PasswordReset'
export { default as WelcomeEmail } from './WelcomeEmail'
export { default as OrderShipped } from './OrderShipped'
export { default as SubscriptionConfirmation } from './SubscriptionConfirmation'

/**
 * Render email template to HTML string
 * Note: This function should only be called in Node.js environment (API routes, server actions)
 * DO NOT use in client components or during build time
 */
export async function renderEmail(component: React.ReactElement): Promise<string> {
  // Dynamic import to avoid bundling react-dom/server in client bundle
  const { renderToStaticMarkup } = await import('react-dom/server')
  return renderToStaticMarkup(component)
}

/**
 * Email templates with type-safe props
 * These are async functions that can only be called server-side
 */
export const EmailTemplates = {
  orderConfirmation: async (props: any) => {
    const OrderConfirmation = (await import('./OrderConfirmation')).default
    return renderEmail(<OrderConfirmation {...props} />)
  },
  
  passwordReset: async (props: any) => {
    const PasswordReset = (await import('./PasswordReset')).default
    return renderEmail(<PasswordReset {...props} />)
  },
  
  welcome: async (props: any) => {
    const WelcomeEmail = (await import('./WelcomeEmail')).default
    return renderEmail(<WelcomeEmail {...props} />)
  },
  
  orderShipped: async (props: any) => {
    const OrderShipped = (await import('./OrderShipped')).default
    return renderEmail(<OrderShipped {...props} />)
  },
  
  subscriptionConfirmation: async (props: any) => {
    const SubscriptionConfirmation = (await import('./SubscriptionConfirmation')).default
    return renderEmail(<SubscriptionConfirmation {...props} />)
  },
}

/**
 * Email configuration
 */
export const EMAIL_CONFIG = {
  from: {
    name: 'RenataLadies',
    email: 'info@renataladies.com'
  },
  replyTo: 'info@renataladies.com',
  supportEmail: 'info@renataladies.com',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://renataladies.com'
}

/**
 * Email subjects
 */
export const EMAIL_SUBJECTS = {
  orderConfirmation: (orderNumber: string) => `Užsakymas #${orderNumber} patvirtintas ✓`,
  passwordReset: 'Slaptažodžio atstatymas - RenataLadies',
  welcome: 'Sveika atvykusi į RenataLadies! 💖',
  orderShipped: (orderNumber: string) => `Užsakymas #${orderNumber} išsiųstas! 📦`,
  subscriptionConfirmation: (planName: string) => `${planName} prenumerata aktyvuota! 🎉`,
}
