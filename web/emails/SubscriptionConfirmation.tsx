import * as React from 'react'
import BaseLayout from './BaseLayout'
import { toVocative } from '@/lib/utils'

interface SubscriptionConfirmationProps {
  userName: string
  planName: string
  planType: 'monthly' | 'annual'
  price: number
  startDate: string
  nextBillingDate: string
  features: string[]
  dashboardUrl: string
  videosUrl: string
}

export default function SubscriptionConfirmation({
  userName,
  planName,
  planType,
  price,
  startDate,
  nextBillingDate,
  features,
  dashboardUrl,
  videosUrl
}: SubscriptionConfirmationProps) {
  return (
    <BaseLayout previewText={`${planName} prenumerata aktyvuota! 🎉`}>
      <table width="100%" cellPadding="0" cellSpacing="0">
        {/* Icon */}
        <tr>
          <td align="center" style={{ paddingBottom: '24px' }}>
            <div style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #F28ACD, #AB57F4)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '50px'
            }}>
              ⭐
            </div>
          </td>
        </tr>

        {/* Title */}
        <tr>
          <td align="center">
            <h2 style={{ margin: '0 0 16px', fontSize: '32px', fontWeight: 700, color: '#28262C' }}>
              Sveikiname! 🎉
            </h2>
            <p style={{ margin: '0 0 32px', fontSize: '18px', lineHeight: '1.6', color: '#666', textAlign: 'center' }}>
              <strong>{toVocative(userName)}</strong>, tavo <strong style={{ color: '#F28ACD' }}>{planName}</strong> prenumerata aktyvuota!
            </p>
          </td>
        </tr>

        {/* Plan Details Box */}
        <tr>
          <td>
            <table width="100%" cellPadding="24" cellSpacing="0" style={{ 
              background: 'linear-gradient(135deg, #FFF5FB, #F3E8FF)', 
              borderRadius: '16px',
              marginBottom: '32px',
              border: '2px solid #F28ACD'
            }}>
              <tr>
                <td>
                  <h3 style={{ margin: '0 0 16px', fontSize: '24px', fontWeight: 700, color: '#28262C', textAlign: 'center' }}>
                    {planName}
                  </h3>
                  <p style={{ margin: '0 0 20px', fontSize: '14px', color: '#666', textAlign: 'center' }}>
                    {planType === 'monthly' ? 'Mėnesio prenumerata' : 'Metinė prenumerata'}
                  </p>
                  
                  <table width="100%" cellPadding="0" cellSpacing="0">
                    <tr>
                      <td>
                        <p style={{ margin: '0 0 4px', fontSize: '13px', color: '#666' }}>
                          Kaina:
                        </p>
                        <p style={{ margin: '0 0 16px', fontSize: '28px', fontWeight: 700, color: '#F28ACD' }}>
                          {price.toFixed(2)} €{planType === 'monthly' ? '/mėn' : '/metai'}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ margin: '0 0 4px', fontSize: '13px', color: '#666' }}>
                          Aktyvuota:
                        </p>
                        <p style={{ margin: '0 0 16px', fontSize: '15px', fontWeight: 600, color: '#28262C' }}>
                          {startDate}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ margin: '0 0 4px', fontSize: '13px', color: '#666' }}>
                          Kitas mokėjimas:
                        </p>
                        <p style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#28262C' }}>
                          {nextBillingDate}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Features */}
        <tr>
          <td>
            <h3 style={{ margin: '0 0 16px', fontSize: '22px', fontWeight: 600, color: '#28262C' }}>
              Kas tau dabar prieinama:
            </h3>
            <table width="100%" cellPadding="16" cellSpacing="0" style={{ backgroundColor: '#f8f8f8', borderRadius: '12px', marginBottom: '32px' }}>
              <tr>
                <td>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px', lineHeight: '2', color: '#28262C' }}>
                    {features.map((feature, idx) => (
                      <li key={idx}>
                        <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* CTA Buttons */}
        <tr>
          <td>
            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                <td width="50%" style={{ paddingRight: '8px', paddingBottom: '16px' }}>
                  <a 
                    href={videosUrl}
                    style={{ 
                      display: 'block',
                      background: 'linear-gradient(90deg, #F28ACD, #AB57F4)',
                      color: 'white',
                      textDecoration: 'none',
                      padding: '16px 24px',
                      borderRadius: '12px',
                      textAlign: 'center',
                      fontWeight: 600,
                      fontSize: '16px'
                    }}
                  >
                    🎥 Žiūrėti video
                  </a>
                </td>
                <td width="50%" style={{ paddingLeft: '8px', paddingBottom: '16px' }}>
                  <a 
                    href={dashboardUrl}
                    style={{ 
                      display: 'block',
                      backgroundColor: '#ffffff',
                      color: '#F28ACD',
                      textDecoration: 'none',
                      padding: '16px 24px',
                      borderRadius: '12px',
                      textAlign: 'center',
                      fontWeight: 600,
                      fontSize: '16px',
                      border: '2px solid #F28ACD'
                    }}
                  >
                    👤 Mano paskyra
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Personal Message */}
        <tr>
          <td style={{ paddingTop: '16px' }}>
            <table width="100%" cellPadding="20" cellSpacing="0" style={{ backgroundColor: '#FFF5FB', borderRadius: '12px', marginBottom: '24px' }}>
              <tr>
                <td>
                  <p style={{ margin: '0 0 16px', fontSize: '16px', lineHeight: '1.8', color: '#28262C' }}>
                    🎯 <strong>Mano patarimas tau:</strong>
                  </p>
                  <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.8', color: '#666' }}>
                    Pradėk nuo pagrindų – pasirink sau tinkamą programą ir sek ją bent 4 savaites. 
                    Rezultatai ateina tada, kai esi nuosekli ir klausai savo kūno. Jei reikės pagalbos – 
                    aš visada čia! 💪
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Auto-Renewal Info */}
        <tr>
          <td>
            <table width="100%" cellPadding="16" cellSpacing="0" style={{ backgroundColor: '#FFFBEB', borderRadius: '12px', border: '1px solid #FCD34D' }}>
              <tr>
                <td>
                  <p style={{ margin: '0 0 8px', fontSize: '15px', fontWeight: 600, color: '#92400E' }}>
                    ℹ️ Apie prenumeratą:
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', lineHeight: '1.8', color: '#78350F' }}>
                    <li>Prenumerata atsinaujina automatiškai kas {planType === 'monthly' ? 'mėnesį' : 'metus'}</li>
                    <li>Galite atšaukti bet kada savo paskyros nustatymuose</li>
                    <li>Prieš atsinaujinimą gausite priminimo laišką</li>
                    <li>Atšaukus prenumeratą, turinys liks prieinamas iki periodo pabaigos</li>
                  </ul>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Support */}
        <tr>
          <td style={{ paddingTop: '32px', textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px', fontSize: '16px', fontWeight: 600, color: '#28262C' }}>
              Klausimai apie prenumeratą?
            </p>
            <p style={{ margin: '0 0 16px', fontSize: '14px', color: '#666' }}>
              Rašykite:{' '}
              <a href="mailto:info@renataladies.com" style={{ color: '#F28ACD', textDecoration: 'none', fontWeight: 600 }}>
                info@renataladies.com
              </a>
            </p>
            <p style={{ margin: 0, fontSize: '14px', color: '#999' }}>
              Arba peržiūrėkite{' '}
              <a href="https://renataladies.lt/duk" style={{ color: '#F28ACD', textDecoration: 'none' }}>
                DUK skyrių
              </a>
            </p>
          </td>
        </tr>

        {/* Closing */}
        <tr>
          <td style={{ paddingTop: '32px', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '18px', fontWeight: 600, lineHeight: '1.6' }}>
              Linkiu puikių treniruočių! 💖<br />
              <span style={{ background: 'linear-gradient(90deg, #F28ACD, #AB57F4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Renata
              </span>
            </p>
          </td>
        </tr>
      </table>
    </BaseLayout>
  )
}
