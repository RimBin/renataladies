import * as React from 'react'
import BaseLayout from './BaseLayout'
import { toVocative } from '@/lib/utils'

interface PasswordResetProps {
  userName: string
  resetUrl: string
  expiresIn: string // e.g., "1 valanda", "24 valandos"
}

export default function PasswordReset({ userName, resetUrl, expiresIn }: PasswordResetProps) {
  return (
    <BaseLayout previewText="Atstatykite savo slaptažodį">
      <table width="100%" cellPadding="0" cellSpacing="0">
        {/* Icon */}
        <tr>
          <td align="center" style={{ paddingBottom: '24px' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #F28ACD, #AB57F4)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px'
            }}>
              🔒
            </div>
          </td>
        </tr>

        {/* Title */}
        <tr>
          <td align="center">
            <h2 style={{ margin: '0 0 16px', fontSize: '28px', fontWeight: 700, color: '#28262C' }}>
              Slaptažodžio atstatymas
            </h2>
            <p style={{ margin: '0 0 32px', fontSize: '16px', lineHeight: '1.6', color: '#666', textAlign: 'center' }}>
              Labas, <strong>{toVocative(userName)}</strong>! Gavome prašymą atstatyti jūsų slaptažodį.
            </p>
          </td>
        </tr>

        {/* Reset Button */}
        <tr>
          <td align="center" style={{ paddingBottom: '32px' }}>
            <a 
              href={resetUrl}
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
              Atstatyti slaptažodį
            </a>
          </td>
        </tr>

        {/* Alternative Link */}
        <tr>
          <td>
            <table width="100%" cellPadding="16" cellSpacing="0" style={{ backgroundColor: '#f8f8f8', borderRadius: '12px', marginBottom: '24px' }}>
              <tr>
                <td>
                  <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#666' }}>
                    Jei mygtukas neveikia, nukopijuokite ir įklijuokite šią nuorodą į naršyklę:
                  </p>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '12px', 
                    color: '#F28ACD',
                    wordBreak: 'break-all',
                    fontFamily: 'monospace'
                  }}>
                    {resetUrl}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Warning Box */}
        <tr>
          <td>
            <table width="100%" cellPadding="20" cellSpacing="0" style={{ backgroundColor: '#FFF5F5', borderRadius: '12px', border: '1px solid #FCA5A5' }}>
              <tr>
                <td>
                  <p style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: 600, color: '#DC2626' }}>
                    ⚠️ Svarbu žinoti:
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
                    <li>Ši nuoroda galioja tik <strong>{expiresIn}</strong></li>
                    <li>Nuoroda gali būti panaudota tik vieną kartą</li>
                    <li>Jei neprašėte atstatyti slaptažodžio, ignoruokite šį laišką</li>
                    <li>Jūsų dabartinis slaptažodis išliks nepakeistas</li>
                  </ul>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Security Notice */}
        <tr>
          <td style={{ paddingTop: '32px', textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px', fontSize: '14px', color: '#666' }}>
              Neprašėte atstatyti slaptažodžio?
            </p>
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
              Susisiekite su mumis:{' '}
              <a href="mailto:info@renataladies.com" style={{ color: '#F28ACD', textDecoration: 'none', fontWeight: 600 }}>
                info@renataladies.com
              </a>
            </p>
          </td>
        </tr>

        {/* Tips */}
        <tr>
          <td style={{ paddingTop: '24px' }}>
            <table width="100%" cellPadding="16" cellSpacing="0" style={{ backgroundColor: '#FFF5FB', borderRadius: '12px' }}>
              <tr>
                <td>
                  <p style={{ margin: '0 0 8px', fontSize: '14px', fontWeight: 600, color: '#28262C' }}>
                    💡 Patarimai saugiam slaptažodžiui:
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', lineHeight: '1.6', color: '#666' }}>
                    <li>Naudokite bent 8 simbolius</li>
                    <li>Maišykite raides, skaičius ir specialius simbolius</li>
                    <li>Nenaudokite asmeninės informacijos</li>
                    <li>Kiekvienam puslapiui – unikalus slaptažodis</li>
                  </ul>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </BaseLayout>
  )
}
