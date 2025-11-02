import * as React from 'react'

interface BaseLayoutProps {
  previewText?: string
  children: React.ReactNode
}

export default function BaseLayout({ previewText, children }: BaseLayoutProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
          
          body {
            font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f8f8;
          }
          
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
          }
          
          .gradient-text {
            background: linear-gradient(90deg, #F28ACD, #AB57F4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .gradient-button {
            background: linear-gradient(90deg, #F28ACD, #AB57F4);
            color: white;
            text-decoration: none;
            padding: 14px 32px;
            border-radius: 50px;
            display: inline-block;
            font-weight: 600;
            font-size: 16px;
          }
          
          .footer-text {
            color: #666;
            font-size: 12px;
            line-height: 1.6;
          }
        `}</style>
      </head>
      <body>
        {previewText && (
          <div style={{ display: 'none', maxHeight: 0, overflow: 'hidden' }}>
            {previewText}
          </div>
        )}
        
        <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#f8f8f8', padding: '40px 20px' }}>
          <tr>
            <td align="center">
              <table className="email-container" width="600" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden' }}>
                {/* Header */}
                <tr>
                  <td style={{ padding: '40px 40px 20px', textAlign: 'center', backgroundColor: '#ffffff' }}>
                    <h1 style={{ margin: 0, fontSize: '32px', fontWeight: 700, color: '#28262C' }}>
                      Renata<span className="gradient-text">Ladies</span>
                    </h1>
                    <p style={{ margin: '8px 0 0', fontSize: '14px', color: '#666' }}>
                      Moteriškumas. Minimalizmas. Galia.
                    </p>
                  </td>
                </tr>
                
                {/* Content */}
                <tr>
                  <td style={{ padding: '20px 40px 40px' }}>
                    {children}
                  </td>
                </tr>
                
                {/* Footer */}
                <tr>
                  <td style={{ padding: '30px 40px', backgroundColor: '#f8f8f8', borderTop: '1px solid #eee' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0">
                      <tr>
                        <td align="center" className="footer-text">
                          <p style={{ margin: '0 0 12px', fontSize: '12px', color: '#666' }}>
                            © 2025 RenataLadies. Visos teisės saugomos.
                          </p>
                          <p style={{ margin: '0 0 12px', fontSize: '12px', color: '#666' }}>
                            <a href="https://renataladies.lt/privatumo-politika" style={{ color: '#F28ACD', textDecoration: 'none' }}>Privatumo politika</a>
                            {' · '}
                            <a href="https://renataladies.lt/pirkimo-salygos" style={{ color: '#F28ACD', textDecoration: 'none' }}>Pirkimo sąlygos</a>
                            {' · '}
                            <a href="https://renataladies.lt/kontaktai" style={{ color: '#F28ACD', textDecoration: 'none' }}>Kontaktai</a>
                          </p>
                          <p style={{ margin: '12px 0 0', fontSize: '11px', color: '#999' }}>
                            Jei nenorite gauti mūsų laiškų, galite{' '}
                            <a href="{{unsubscribeUrl}}" style={{ color: '#999', textDecoration: 'underline' }}>atsisakyti prenumeratos</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  )
}
