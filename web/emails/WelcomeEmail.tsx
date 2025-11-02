import * as React from 'react'
import BaseLayout from './BaseLayout'
import { toVocative } from '@/lib/utils'

interface WelcomeEmailProps {
  userName: string
  userEmail: string
  dashboardUrl: string
}

export default function WelcomeEmail({ userName, userEmail, dashboardUrl }: WelcomeEmailProps) {
  return (
    <BaseLayout previewText="Sveika atvykusi į RenataLadies bendruomenę! 💖">
      <table width="100%" cellPadding="0" cellSpacing="0">
        {/* Hero Image/Icon */}
        <tr>
          <td align="center" style={{ paddingBottom: '32px' }}>
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
              🎉
            </div>
          </td>
        </tr>

        {/* Welcome Message */}
        <tr>
          <td align="center">
            <h2 style={{ margin: '0 0 16px', fontSize: '32px', fontWeight: 700, color: '#28262C' }}>
              Sveika, <span style={{ background: 'linear-gradient(90deg, #F28ACD, #AB57F4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{toVocative(userName)}</span>!
            </h2>
            <p style={{ margin: '0 0 32px', fontSize: '18px', lineHeight: '1.6', color: '#666', textAlign: 'center' }}>
              Džiaugiuosi, kad prisijungei prie <strong>RenataLadies</strong> bendruomenės! 💪
            </p>
          </td>
        </tr>

        {/* Personal Message */}
        <tr>
          <td>
            <table width="100%" cellPadding="24" cellSpacing="0" style={{ backgroundColor: '#FFF5FB', borderRadius: '16px', marginBottom: '32px' }}>
              <tr>
                <td>
                  <p style={{ margin: '0 0 16px', fontSize: '16px', lineHeight: '1.8', color: '#28262C' }}>
                    Esu Renata, trenerė ir motyvacinė vadovė. Čia rasiu tau viską, ko reikia sveikatai, 
                    geraijai savijautai ir pasitikėjimui savimi:
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '15px', lineHeight: '2', color: '#666' }}>
                    <li><strong>Treniruočių programos</strong> – pritaikytos tavo lygiui</li>
                    <li><strong>Mitybos planai</strong> – sveiki, skanūs ir efektyvūs</li>
                    <li><strong>Video treniruotės</strong> – treniruokis bet kada, bet kur</li>
                    <li><strong>Kokybiški papildai</strong> – kuriuos pati naudoju</li>
                    <li><strong>Asmeninės konsultacijos</strong> – individualus dėmesys</li>
                  </ul>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Quick Links */}
        <tr>
          <td>
            <h3 style={{ margin: '0 0 20px', fontSize: '22px', fontWeight: 600, color: '#28262C', textAlign: 'center' }}>
              Pradėk čia 👇
            </h3>
          </td>
        </tr>

        <tr>
          <td>
            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                <td width="50%" style={{ paddingRight: '8px', paddingBottom: '16px' }}>
                  <table width="100%" cellPadding="16" cellSpacing="0" style={{ backgroundColor: '#ffffff', border: '2px solid #F28ACD', borderRadius: '12px', height: '100%' }}>
                    <tr>
                      <td align="center">
                        <div style={{ fontSize: '32px', marginBottom: '8px' }}>💪</div>
                        <h4 style={{ margin: '0 0 8px', fontSize: '16px', fontWeight: 600, color: '#28262C' }}>
                          Treniruočių programos
                        </h4>
                        <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#666' }}>
                          Rask tobulą programą sau
                        </p>
                        <a href="https://renataladies.lt/programos" style={{ color: '#F28ACD', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                          Peržiūrėti →
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
                <td width="50%" style={{ paddingLeft: '8px', paddingBottom: '16px' }}>
                  <table width="100%" cellPadding="16" cellSpacing="0" style={{ backgroundColor: '#ffffff', border: '2px solid #AB57F4', borderRadius: '12px', height: '100%' }}>
                    <tr>
                      <td align="center">
                        <div style={{ fontSize: '32px', marginBottom: '8px' }}>🥗</div>
                        <h4 style={{ margin: '0 0 8px', fontSize: '16px', fontWeight: 600, color: '#28262C' }}>
                          Mitybos planai
                        </h4>
                        <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#666' }}>
                          Sveika mityba lengvai
                        </p>
                        <a href="https://renataladies.lt/mitybos-planai" style={{ color: '#AB57F4', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                          Peržiūrėti →
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td width="50%" style={{ paddingRight: '8px' }}>
                  <table width="100%" cellPadding="16" cellSpacing="0" style={{ backgroundColor: '#ffffff', border: '2px solid #10B981', borderRadius: '12px', height: '100%' }}>
                    <tr>
                      <td align="center">
                        <div style={{ fontSize: '32px', marginBottom: '8px' }}>🎥</div>
                        <h4 style={{ margin: '0 0 8px', fontSize: '16px', fontWeight: 600, color: '#28262C' }}>
                          Video treniruotės
                        </h4>
                        <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#666' }}>
                          Treniruokis su manimi
                        </p>
                        <a href="https://renataladies.lt/treniruociu-video" style={{ color: '#10B981', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                          Žiūrėti →
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
                <td width="50%" style={{ paddingLeft: '8px' }}>
                  <table width="100%" cellPadding="16" cellSpacing="0" style={{ backgroundColor: '#ffffff', border: '2px solid #F59E0B', borderRadius: '12px', height: '100%' }}>
                    <tr>
                      <td align="center">
                        <div style={{ fontSize: '32px', marginBottom: '8px' }}>💊</div>
                        <h4 style={{ margin: '0 0 8px', fontSize: '16px', fontWeight: 600, color: '#28262C' }}>
                          Maisto papildai
                        </h4>
                        <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#666' }}>
                          Tikrinta kokybė
                        </p>
                        <a href="https://renataladies.lt/papildai" style={{ color: '#F59E0B', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                          Pirkti →
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Dashboard Button */}
        <tr>
          <td align="center" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
            <a 
              href={dashboardUrl}
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
              Į mano paskyrą
            </a>
          </td>
        </tr>

        {/* Account Info */}
        <tr>
          <td>
            <table width="100%" cellPadding="20" cellSpacing="0" style={{ backgroundColor: '#f8f8f8', borderRadius: '12px', marginBottom: '24px' }}>
              <tr>
                <td>
                  <p style={{ margin: '0 0 8px', fontSize: '14px', color: '#666' }}>
                    <strong>Tavo paskyros el. paštas:</strong>
                  </p>
                  <p style={{ margin: 0, fontSize: '16px', color: '#28262C', fontWeight: 600 }}>
                    {userEmail}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Special Offer */}
        <tr>
          <td>
            <table width="100%" cellPadding="24" cellSpacing="0" style={{ 
              background: 'linear-gradient(135deg, #FFF5FB, #F3E8FF)', 
              borderRadius: '16px',
              border: '2px solid #F28ACD'
            }}>
              <tr>
                <td align="center">
                  <p style={{ margin: '0 0 8px', fontSize: '24px' }}>🎁</p>
                  <h3 style={{ margin: '0 0 12px', fontSize: '20px', fontWeight: 700, color: '#28262C' }}>
                    Speciali dovana naujiems nariams!
                  </h3>
                  <p style={{ margin: '0 0 16px', fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                    Gauk <strong style={{ color: '#F28ACD' }}>-15%</strong> nuolaidą pirmam pirkiniui!<br />
                    Naudok kodą: <strong style={{ 
                      color: '#28262C',
                      backgroundColor: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      fontFamily: 'monospace'
                    }}>WELCOME15</strong>
                  </p>
                  <p style={{ margin: 0, fontSize: '13px', color: '#999' }}>
                    Kodas galioja 7 dienas nuo registracijos
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Closing */}
        <tr>
          <td style={{ paddingTop: '32px', textAlign: 'center' }}>
            <p style={{ margin: '0 0 16px', fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
              Klausimai? Pasiūlymai? Tiesiog norite pasisveikinti?<br />
              Rašykite bet kada:{' '}
              <a href="mailto:info@renataladies.com" style={{ color: '#F28ACD', textDecoration: 'none', fontWeight: 600 }}>
                info@renataladies.com
              </a>
            </p>
            <p style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>
              Su meile,<br />
              <span style={{ background: 'linear-gradient(90deg, #F28ACD, #AB57F4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Renata
              </span> 💖
            </p>
          </td>
        </tr>
      </table>
    </BaseLayout>
  )
}
