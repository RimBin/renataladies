import * as React from 'react'
import BaseLayout from './BaseLayout'
import { toVocative } from '@/lib/utils'

interface OrderConfirmationProps {
  customerName: string
  orderNumber: string
  orderDate: string
  items: Array<{
    name: string
    quantity: number
    price: number
    image?: string
  }>
  subtotal: number
  vat: number
  shipping: number
  total: number
  shippingAddress: {
    name: string
    street: string
    city: string
    postalCode: string
    country: string
  }
  trackingUrl?: string
}

export default function OrderConfirmation({
  customerName,
  orderNumber,
  orderDate,
  items,
  subtotal,
  vat,
  shipping,
  total,
  shippingAddress,
  trackingUrl
}: OrderConfirmationProps) {
  return (
    <BaseLayout previewText={`Užsakymas #${orderNumber} patvirtintas ✓`}>
      <table width="100%" cellPadding="0" cellSpacing="0">
        {/* Greeting */}
        <tr>
          <td>
            <h2 style={{ margin: '0 0 16px', fontSize: '28px', fontWeight: 700, color: '#28262C' }}>
              Ačiū už užsakymą! ✓
            </h2>
            <p style={{ margin: '0 0 24px', fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
              Labas, <strong>{toVocative(customerName)}</strong>! Jūsų užsakymas sėkmingai gautas ir jau ruošiamas siuntimui.
            </p>
          </td>
        </tr>

        {/* Order Info Box */}
        <tr>
          <td>
            <table width="100%" cellPadding="16" cellSpacing="0" style={{ backgroundColor: '#f8f8f8', borderRadius: '12px', marginBottom: '24px' }}>
              <tr>
                <td>
                  <p style={{ margin: '0 0 8px', fontSize: '14px', color: '#666' }}>
                    <strong>Užsakymo numeris:</strong> #{orderNumber}
                  </p>
                  <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                    <strong>Data:</strong> {orderDate}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Products */}
        <tr>
          <td>
            <h3 style={{ margin: '0 0 16px', fontSize: '20px', fontWeight: 600, color: '#28262C' }}>
              Jūsų užsakymas
            </h3>
          </td>
        </tr>
        
        {items.map((item, idx) => (
          <tr key={idx}>
            <td>
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: idx < items.length - 1 ? '1px solid #eee' : 'none' }}>
                <tr>
                  <td width="80" valign="top">
                    {item.image && (
                      <img 
                        src={item.image} 
                        alt={item.name}
                        width="60"
                        height="60"
                        style={{ borderRadius: '8px', objectFit: 'cover' }}
                      />
                    )}
                  </td>
                  <td valign="top">
                    <p style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 600, color: '#28262C' }}>
                      {item.name}
                    </p>
                    <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                      Kiekis: {item.quantity} × {item.price.toFixed(2)} €
                    </p>
                  </td>
                  <td align="right" valign="top" width="100">
                    <p style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: '#28262C' }}>
                      {(item.quantity * item.price).toFixed(2)} €
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        ))}

        {/* Order Totals */}
        <tr>
          <td style={{ paddingTop: '24px' }}>
            <table width="100%" cellPadding="8" cellSpacing="0">
              <tr>
                <td align="right" style={{ fontSize: '14px', color: '#666' }}>Tarpinė suma (be PVM):</td>
                <td align="right" width="100" style={{ fontSize: '14px', color: '#666' }}>{subtotal.toFixed(2)} €</td>
              </tr>
              <tr>
                <td align="right" style={{ fontSize: '14px', color: '#666' }}>PVM (21%):</td>
                <td align="right" style={{ fontSize: '14px', color: '#666' }}>{vat.toFixed(2)} €</td>
              </tr>
              <tr>
                <td align="right" style={{ fontSize: '14px', color: '#666' }}>Pristatymas:</td>
                <td align="right" style={{ fontSize: '14px', color: '#666' }}>
                  {shipping === 0 ? 'Nemokamas' : `${shipping.toFixed(2)} €`}
                </td>
              </tr>
              <tr>
                <td align="right" style={{ fontSize: '18px', fontWeight: 700, color: '#28262C', paddingTop: '12px', borderTop: '2px solid #F28ACD' }}>
                  Viso mokėti:
                </td>
                <td align="right" style={{ fontSize: '18px', fontWeight: 700, color: '#F28ACD', paddingTop: '12px', borderTop: '2px solid #F28ACD' }}>
                  {total.toFixed(2)} €
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Shipping Address */}
        <tr>
          <td style={{ paddingTop: '32px' }}>
            <h3 style={{ margin: '0 0 12px', fontSize: '18px', fontWeight: 600, color: '#28262C' }}>
              Pristatymo adresas
            </h3>
            <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
              {shippingAddress.name}<br />
              {shippingAddress.street}<br />
              {shippingAddress.postalCode} {shippingAddress.city}<br />
              {shippingAddress.country}
            </p>
          </td>
        </tr>

        {/* Tracking Button */}
        {trackingUrl && (
          <tr>
            <td align="center" style={{ paddingTop: '32px' }}>
              <a 
                href={trackingUrl}
                className="gradient-button"
                style={{ 
                  background: 'linear-gradient(90deg, #F28ACD, #AB57F4)',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '14px 32px',
                  borderRadius: '50px',
                  display: 'inline-block',
                  fontWeight: 600,
                  fontSize: '16px'
                }}
              >
                Sekti siuntą
              </a>
            </td>
          </tr>
        )}

        {/* Info Box */}
        <tr>
          <td style={{ paddingTop: '32px' }}>
            <table width="100%" cellPadding="20" cellSpacing="0" style={{ backgroundColor: '#FFF5FB', borderRadius: '12px', border: '1px solid #F28ACD' }}>
              <tr>
                <td>
                  <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: 600, color: '#28262C' }}>
                    📦 Kas toliau?
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                    <li>Jūsų užsakymas bus supakuotas per 1-2 darbo dienas</li>
                    <li>Gausite el. laišką su sekimo numeriu, kai siunta išvyks</li>
                    <li>Pristatymas paprastai užtrunka 2-5 darbo dienas</li>
                  </ul>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Questions */}
        <tr>
          <td style={{ paddingTop: '32px', textAlign: 'center' }}>
            <p style={{ margin: '0 0 16px', fontSize: '14px', color: '#666' }}>
              Klausimai? Rašykite mums:{' '}
              <a href="mailto:info@renataladies.com" style={{ color: '#F28ACD', textDecoration: 'none', fontWeight: 600 }}>
                info@renataladies.com
              </a>
            </p>
            <p style={{ margin: 0, fontSize: '14px', color: '#999' }}>
              Arba aplankykite mūsų{' '}
              <a href="https://renataladies.com/duk" style={{ color: '#F28ACD', textDecoration: 'none' }}>
                DUK skyrių
              </a>
            </p>
          </td>
        </tr>
      </table>
    </BaseLayout>
  )
}
