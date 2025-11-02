/**
 * Email sending utility using Nodemailer
 * 
 * Setup instructions:
 * 1. Install: npm install nodemailer
 * 2. Add to .env.local:
 *    EMAIL_HOST=smtp.gmail.com (or your SMTP server)
 *    EMAIL_PORT=587
 *    EMAIL_USER=your-email@gmail.com
 *    EMAIL_PASSWORD=your-app-password
 *    EMAIL_FROM=info@renataladies.lt
 */

import nodemailer from 'nodemailer'
import { EMAIL_CONFIG } from './templates'

// Create reusable transporter
let transporter: nodemailer.Transporter | null = null

function getTransporter() {
  if (!transporter) {
    // For development: use ethereal.email (fake SMTP)
    // For production: use real SMTP (Gmail, SendGrid, etc.)
    
    if (process.env.NODE_ENV === 'development' && !process.env.EMAIL_HOST) {
      console.warn('⚠️ No EMAIL_HOST configured. Emails will be logged to console only.')
      // Return a mock transporter that just logs
      return {
        sendMail: async (options: any) => {
          console.log('📧 Email would be sent:', {
            to: options.to,
            subject: options.subject,
            html: options.html?.substring(0, 200) + '...'
          })
          return { messageId: 'dev-' + Date.now() }
        }
      } as any
    }

    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })
  }
  return transporter
}

export interface SendEmailOptions {
  to: string | string[]
  subject: string
  html: string
  text?: string
  attachments?: Array<{
    filename: string
    content?: string | Buffer
    path?: string
  }>
}

/**
 * Send an email
 */
export async function sendEmail(options: SendEmailOptions) {
  try {
    const transport = getTransporter()
    
    const mailOptions = {
      from: `${EMAIL_CONFIG.from.name} <${EMAIL_CONFIG.from.email}>`,
      to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
      attachments: options.attachments,
      replyTo: EMAIL_CONFIG.replyTo,
    }

    const info = await transport.sendMail(mailOptions)
    
    console.log('✅ Email sent:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('❌ Email send failed:', error)
    return { success: false, error }
  }
}

/**
 * Send email with retry logic
 */
export async function sendEmailWithRetry(
  options: SendEmailOptions,
  maxRetries = 3
): Promise<{ success: boolean; messageId?: string; error?: any }> {
  for (let i = 0; i < maxRetries; i++) {
    const result = await sendEmail(options)
    if (result.success) {
      return result
    }
    
    if (i < maxRetries - 1) {
      console.log(`Retrying email send (attempt ${i + 2}/${maxRetries})...`)
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
    }
  }
  
  return { success: false, error: 'Max retries exceeded' }
}

/**
 * Verify email configuration
 */
export async function verifyEmailConfig(): Promise<boolean> {
  try {
    const transport = getTransporter()
    if (transport.verify) {
      await transport.verify()
      console.log('✅ Email configuration verified')
      return true
    }
    return true // Mock transporter
  } catch (error) {
    console.error('❌ Email configuration invalid:', error)
    return false
  }
}
