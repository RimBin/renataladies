import * as React from 'react'
import BaseLayout from './BaseLayout'
import { toVocative } from '@/lib/utils'

interface OrderShippedProps {
  customerName: string
  orderNumber: string
  trackingNumber: string
  trackingUrl: string
  carrier: string // "DPD", "Omniva", "LP Express"
  estimatedDelivery: string // e.g., "2025-01-15 - 2025-01-17"
  items: Array<{
    name: string
    quantity: number
    image?: string
  }>
}

export default function OrderShipped({
  customerName,
  orderNumber,
  trackingNumber,
  trackingUrl,
  carrier,
  estimatedDelivery,
  items
}: OrderShippedProps) {
  return (
    <BaseLayout previewText={`Jūsų užsakymas #${orderNumber} išsiųstas! 📦`}>
      <table width="100%" cellPadding="0" cellSpacing="0">
        {/* Icon */}
        <tr>
          <td align="center" style={{ paddingBottom: '24px' }}>
            <div style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #10B981, #059669)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '50px'
            }}>
              📦
            </div>
          </td>
        </tr>

        {/* Title */}
        <tr>
          <td align="center">
            <h2 style={{ margin: '0 0 16px', fontSize: '32px', fontWeight: 700, color: '#28262C' }}>
              Siunta išvyko! 🎉
            </h2>
            <p style={{ margin: '0 0 32px', fontSize: '16px', lineHeight: '1.6', color: '#666', textAlign: 'center' }}>
              Labas, <strong>{toVocative(customerName)}</strong>! Tavo užsakymas jau kelyje pas tave.
            </p>
          </td>
        </tr>

        {/* Tracking Info Box */}
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
                  <table width="100%" cellPadding="0" cellSpacing="0">
                    <tr>
                      <td>
                        <p style={{ margin: '0 0 8px', fontSize: '14px', color: '#666' }}>
                          Užsakymo numeris:
                        </p>
                        <p style={{ margin: '0 0 20px', fontSize: '18px', fontWeight: 700, color: '#28262C' }}>
                          #{orderNumber}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ margin: '0 0 8px', fontSize: '14px', color: '#666' }}>
                          Sekimo numeris:
                        </p>
                        <p style={{ 
                          margin: '0 0 20px', 
                          fontSize: '20px', 
                          fontWeight: 700, 
                          color: '#F28ACD',
                          fontFamily: 'monospace',
                          letterSpacing: '1px'
                        }}>
                          {trackingNumber}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ margin: '0 0 8px', fontSize: '14px', color: '#666' }}>
                          Kurjeris:
                        </p>
                        <p style={{ margin: '0 0 20px', fontSize: '16px', fontWeight: 600, color: '#28262C' }}>
                          {carrier}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style={{ margin: '0 0 8px', fontSize: '14px', color: '#666' }}>
                          Planuojamas pristatymas:
                        </p>
                        <p style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: '#10B981' }}>
                          {estimatedDelivery}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Tracking Button */}
        <tr>
          <td align="center" style={{ paddingBottom: '32px' }}>
            <a 
              href={trackingUrl}
              className="gradient-button"
              style={{ 
                background: 'linear-gradient(90deg, #F28ACD, #AB57F4)',
                color: 'white',
                textDecoration: 'none',
                padding: '16px 48px',
                borderRadius: '50px',
                display: 'inline-block',
                fontWeight: 600,
                fontSize: '18px'
              }}
            >
              🔍 Sekti siuntą
            </a>
          </td>
        </tr>

        {/* Items Summary */}
        <tr>
          <td>
            <h3 style={{ margin: '0 0 16px', fontSize: '20px', fontWeight: 600, color: '#28262C' }}>
              Kas siunčiama?
            </h3>
          </td>
        </tr>

        {items.map((item, idx) => (
          <tr key={idx}>
            <td>
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ 
                marginBottom: '12px', 
                paddingBottom: '12px', 
                borderBottom: idx < items.length - 1 ? '1px solid #eee' : 'none' 
              }}>
                <tr>
                  <td width="60" valign="middle">
                    {item.image && (
                      <img 
                        src={item.image} 
                        alt={item.name}
                        width="50"
                        height="50"
                        style={{ borderRadius: '8px', objectFit: 'cover' }}
                      />
                    )}
                  </td>
                  <td valign="middle" style={{ paddingLeft: '12px' }}>
                    <p style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 600, color: '#28262C' }}>
                      {item.name}
                    </p>
                    <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
                      Kiekis: {item.quantity}
                    </p>
                  </td>
                  <td width="60" align="right" valign="middle">
                    <span style={{ fontSize: '24px' }}>✓</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        ))}

        {/* Delivery Process */}
        <tr>
          <td style={{ paddingTop: '32px' }}>
            <h3 style={{ margin: '0 0 16px', fontSize: '18px', fontWeight: 600, color: '#28262C' }}>
              📍 Kas toliau?
            </h3>
            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                <td width="40" valign="top">
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    backgroundColor: '#10B981',
                    color: 'white',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '14px'
                  }}>
                    1
                  </div>
                </td>
                <td style={{ paddingBottom: '16px' }}>
                  <p style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 600, color: '#28262C' }}>
                    Siunta pervežama
                  </p>
                  <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
                    Užsakymas keliauja per kurjerių tinklą
                  </p>
                </td>
              </tr>
              <tr>
                <td width="40" valign="top">
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    backgroundColor: '#f0f0f0',
                    color: '#666',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '14px'
                  }}>
                    2
                  </div>
                </td>
                <td style={{ paddingBottom: '16px' }}>
                  <p style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 600, color: '#28262C' }}>
                    Atvyko į tavo miestą
                  </p>
                  <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
                    Gausi SMS pranešimą apie pristatymą
                  </p>
                </td>
              </tr>
              <tr>
                <td width="40" valign="top">
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    backgroundColor: '#f0f0f0',
                    color: '#666',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '14px'
                  }}>
                    3
                  </div>
                </td>
                <td>
                  <p style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 600, color: '#28262C' }}>
                    Pristatyta!
                  </p>
                  <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
                    Mėgaukis savo užsakymu 🎉
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Tips Box */}
        <tr>
          <td style={{ paddingTop: '32px' }}>
            <table width="100%" cellPadding="20" cellSpacing="0" style={{ backgroundColor: '#FFF5F5', borderRadius: '12px', border: '1px solid #FECACA' }}>
              <tr>
                <td>
                  <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: 600, color: '#DC2626' }}>
                    💡 Pastaba:
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                    <li>Sekimo informacija atsinaujina kas kelias valandas</li>
                    <li>Jei nebus namie, kurjeris paliks pranešimą</li>
                    <li>Galite keisti pristatymo laiką sekimo puslapyje</li>
                    <li>Patikrinkite siuntą gavę – turite teisę atsisakyti, jei pakuotė pažeista</li>
                  </ul>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Questions */}
        <tr>
          <td style={{ paddingTop: '32px', textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px', fontSize: '16px', fontWeight: 600, color: '#28262C' }}>
              Problemos su siuntos gavimu?
            </p>
            <p style={{ margin: '0 0 16px', fontSize: '14px', color: '#666' }}>
              Susisiekite su mumis ir viską išspręsime:{' '}
              <a href="mailto:info@renataladies.com" style={{ color: '#F28ACD', textDecoration: 'none', fontWeight: 600 }}>
                info@renataladies.com
              </a>
            </p>
            <p style={{ margin: 0, fontSize: '14px', color: '#999' }}>
              Arba skambinkite: <a href="tel:+37068466408" style={{ color: '#F28ACD', textDecoration: 'none' }}>+370 684 66408</a>
            </p>
          </td>
        </tr>

        {/* Thank You */}
        <tr>
          <td style={{ paddingTop: '24px', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '18px', fontWeight: 600, lineHeight: '1.6' }}>
              Ačiū, kad renkiesi <span style={{ background: 'linear-gradient(90deg, #F28ACD, #AB57F4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>RenataLadies</span>! 💖
            </p>
          </td>
        </tr>
      </table>
    </BaseLayout>
  )
}
