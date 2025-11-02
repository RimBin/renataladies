# 📧 Email Templates - RenataLadies

Profesionalūs, responsive el. pašto šablonai su RenataLadies brand stiliumi.

## 📁 Struktūra

```
web/emails/
├── BaseLayout.tsx                    # Bendras layout su header/footer
├── OrderConfirmation.tsx             # Užsakymo patvirtinimas
├── PasswordReset.tsx                 # Slaptažodžio atstatymas
├── WelcomeEmail.tsx                  # Pasisveikinimo laiškas
├── OrderShipped.tsx                  # Siuntimo pranešimas
├── SubscriptionConfirmation.tsx      # Prenumeratos patvirtinimas
└── templates.tsx                     # Template renderer & config

web/lib/
├── email.ts                          # Email siuntimo utility (Nodemailer)
└── email-examples.ts                 # API route pavyzdžiai
```

## 🚀 Setup

### 1. Install Dependencies

```bash
cd web
npm install nodemailer
npm install -D @types/nodemailer
```

### 2. Configure Environment Variables

Pridėk į `web/.env.local`:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=info@renataladies.lt
EMAIL_PASSWORD=your-app-password-here
EMAIL_FROM=info@renataladies.lt

# App URL
NEXT_PUBLIC_BASE_URL=https://renataladies.lt
```

**Gmail setup:**
1. Eik į Google Account → Security
2. Įjunk 2-Step Verification
3. Sukurk "App Password" → Mail
4. Naudok tą slaptažodį `EMAIL_PASSWORD`

**Alternatyvos:**
- **Resend** (rekomenduojama): https://resend.com/
- **SendGrid**: https://sendgrid.com/
- **AWS SES**: https://aws.amazon.com/ses/
- **Postmark**: https://postmarkapp.com/

### 3. Verify Configuration

```typescript
import { verifyEmailConfig } from '@/lib/email'

await verifyEmailConfig() // Returns true if config is valid
```

## 📨 Available Templates

### 1. Order Confirmation
Siunčiamas po sėkmingo užsakymo.

```typescript
import { EmailTemplates, EMAIL_SUBJECTS } from '@/emails/templates'
import { sendEmail } from '@/lib/email'

const html = EmailTemplates.orderConfirmation({
  customerName: 'Agnė',
  orderNumber: 'RL-2025-0001',
  orderDate: '2025-01-20',
  items: [
    {
      name: 'Omega-3',
      quantity: 2,
      price: 24.99,
      image: 'https://...'
    }
  ],
  subtotal: 41.31,
  vat: 8.67,
  shipping: 0,
  total: 49.98,
  shippingAddress: {
    name: 'Agnė Petraitė',
    street: 'Gedimino pr. 1',
    city: 'Vilnius',
    postalCode: '01103',
    country: 'Lietuva'
  }
})

await sendEmail({
  to: 'agne@example.com',
  subject: EMAIL_SUBJECTS.orderConfirmation('RL-2025-0001'),
  html
})
```

### 2. Password Reset
Siunčiamas kai vartotojas pamiršta slaptažodį.

```typescript
const html = EmailTemplates.passwordReset({
  userName: 'Agnė',
  resetUrl: 'https://renataladies.lt/auth/reset?token=abc123',
  expiresIn: '1 valanda'
})

await sendEmail({
  to: 'agne@example.com',
  subject: EMAIL_SUBJECTS.passwordReset,
  html
})
```

### 3. Welcome Email
Siunčiamas naujiems vartotojams po registracijos.

```typescript
const html = EmailTemplates.welcome({
  userName: 'Agnė',
  userEmail: 'agne@example.com',
  dashboardUrl: 'https://renataladies.lt/paskyra'
})

await sendEmail({
  to: 'agne@example.com',
  subject: EMAIL_SUBJECTS.welcome,
  html
})
```

### 4. Order Shipped
Siunčiamas kai užsakymas išsiunčiamas.

```typescript
const html = EmailTemplates.orderShipped({
  customerName: 'Agnė',
  orderNumber: 'RL-2025-0001',
  trackingNumber: 'DPD1234567890',
  trackingUrl: 'https://www.dpd.com/lt/track?q=DPD1234567890',
  carrier: 'DPD',
  estimatedDelivery: '2025-01-22 - 2025-01-24',
  items: [
    { name: 'Omega-3', quantity: 2, image: '...' }
  ]
})

await sendEmail({
  to: 'agne@example.com',
  subject: EMAIL_SUBJECTS.orderShipped('RL-2025-0001'),
  html
})
```

### 5. Subscription Confirmation
Siunčiamas po prenumeratos aktyvavimo.

```typescript
const html = EmailTemplates.subscriptionConfirmation({
  userName: 'Agnė',
  planName: 'Premium',
  planType: 'monthly',
  price: 19.99,
  startDate: '2025-01-20',
  nextBillingDate: '2025-02-20',
  features: [
    'Visos treniruočių programos',
    'Neribota prieiga prie video',
    'Mitybos planai',
    'Asmeninės konsultacijos'
  ],
  dashboardUrl: 'https://renataladies.lt/paskyra',
  videosUrl: 'https://renataladies.lt/treniruociu-video'
})

await sendEmail({
  to: 'agne@example.com',
  subject: EMAIL_SUBJECTS.subscriptionConfirmation('Premium'),
  html
})
```

## 🔗 Integration Examples

### In Checkout API Route

```typescript
// web/app/api/checkout/route.ts
import { EmailTemplates, EMAIL_SUBJECTS } from '@/emails/templates'
import { sendEmail } from '@/lib/email'

export async function POST(req: Request) {
  // ... process payment with Stripe ...
  
  if (paymentSuccess) {
    // Send confirmation email
    await sendEmail({
      to: customerEmail,
      subject: EMAIL_SUBJECTS.orderConfirmation(orderNumber),
      html: EmailTemplates.orderConfirmation({
        customerName,
        orderNumber,
        // ... other props
      })
    })
  }
  
  return NextResponse.json({ success: true })
}
```

### In NextAuth Callbacks

```typescript
// web/app/api/auth/[...nextauth]/route.ts
import { sendEmail } from '@/lib/email'
import { EmailTemplates, EMAIL_SUBJECTS } from '@/emails/templates'

callbacks: {
  async signIn({ user, isNewUser }) {
    if (isNewUser) {
      await sendEmail({
        to: user.email!,
        subject: EMAIL_SUBJECTS.welcome,
        html: EmailTemplates.welcome({
          userName: user.name || 'Nauja nare',
          userEmail: user.email!,
          dashboardUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/paskyra`
        })
      })
    }
    return true
  }
}
```

### Password Reset Flow

```typescript
// web/app/api/auth/forgot-password/route.ts
export async function POST(req: Request) {
  const { email } = await req.json()
  
  // Generate reset token
  const token = generateResetToken(email)
  
  // Send reset email
  await sendEmail({
    to: email,
    subject: EMAIL_SUBJECTS.passwordReset,
    html: EmailTemplates.passwordReset({
      userName: user.name,
      resetUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/reset-password?token=${token}`,
      expiresIn: '1 valanda'
    })
  })
  
  return NextResponse.json({ success: true })
}
```

## 🎨 Design Features

- ✅ **Brand consistent**: Outfit šriftas, #F28ACD/#AB57F4 gradientai
- ✅ **Responsive**: Veikia mobile, desktop, dark mode
- ✅ **Email client compatible**: Gmail, Outlook, Apple Mail, etc.
- ✅ **Accessible**: Tinkamas semantinis HTML
- ✅ **Professional**: Unsubscribe links, footer info, contact details

## 🧪 Testing

### Test in Development

```typescript
// Development mode logs emails to console
process.env.NODE_ENV = 'development'

const result = await sendEmail({
  to: 'test@example.com',
  subject: 'Test',
  html: EmailTemplates.welcome({...})
})

// Check console for email preview
```

### Test with Real SMTP

1. Use [Ethereal Email](https://ethereal.email/) for testing
2. Use [Mailtrap](https://mailtrap.io/) for staging
3. Use [Litmus](https://www.litmus.com/) for email client testing

### Preview Templates

Create a preview route:

```typescript
// web/app/api/emails/preview/[template]/route.tsx
export async function GET(
  req: Request,
  { params }: { params: { template: string } }
) {
  const html = EmailTemplates.orderConfirmation({
    // ... mock data
  })
  
  return new Response(html, {
    headers: { 'Content-Type': 'text/html' }
  })
}

// Visit: http://localhost:3005/api/emails/preview/order-confirmation
```

## 📊 Tracking & Analytics

Add tracking pixels (optional):

```typescript
// In BaseLayout.tsx footer
<img 
  src={`https://youranalytics.com/pixel?email=${emailId}`} 
  width="1" 
  height="1" 
  alt="" 
  style={{ display: 'none' }}
/>
```

## 🔒 Security Notes

- ✅ Never expose `EMAIL_PASSWORD` in client-side code
- ✅ Use environment variables for all sensitive data
- ✅ Validate email addresses before sending
- ✅ Implement rate limiting for email endpoints
- ✅ Use HTTPS for all email links

## 📝 TODO / Future Enhancements

- [ ] Add more templates (cart abandonment, review request, etc.)
- [ ] Integrate with Resend for better deliverability
- [ ] Add email queue system (Bull/BullMQ)
- [ ] A/B testing for email variations
- [ ] Email open/click tracking
- [ ] Multi-language support (EN, LT, etc.)
- [ ] PDF invoice generation and attachment

## 🆘 Troubleshooting

### Emails not sending in production

1. Check SMTP credentials in Vercel/Hostinger environment variables
2. Verify firewall allows SMTP port (587 or 465)
3. Check email provider doesn't block automated emails
4. Enable "Less secure app access" if using Gmail (not recommended, use App Password instead)

### Emails going to spam

1. Add SPF record to DNS: `v=spf1 include:_spf.google.com ~all`
2. Add DKIM record (provided by email service)
3. Add DMARC record: `v=DMARC1; p=quarantine; rua=mailto:admin@renataladies.lt`
4. Use authenticated sender domain
5. Avoid spam trigger words in subject/content

### Styling issues in email clients

- Emails use inline styles (converted automatically)
- Test in [Email on Acid](https://www.emailonacid.com/) or Litmus
- Avoid complex CSS (flexbox, grid mostly unsupported)
- Use tables for layout (email standard)

---

**Sukurta RenataLadies projektui** 💖  
Klausimų? info@renataladies.lt
