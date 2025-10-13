import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import NavigationBar from '@/components/NavigationBar'
import { Providers } from '@/components/Providers'
import HideWhenEmbedded from '@/components/HideWhenEmbedded'
import AppMain from '@/components/AppMain'
import FixLinksWhenEmbedded from '@/components/FixLinksWhenEmbedded'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Renataladies Store',
  description: 'Modern e‑commerce storefront built with Next.js + Tailwind.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt">
      <body className={`${outfit.className} min-h-screen flex flex-col`}>
        <Providers>
          <FixLinksWhenEmbedded />
          <HideWhenEmbedded>
            <NavigationBar />
          </HideWhenEmbedded>
          <AppMain>{children}</AppMain>
          <HideWhenEmbedded>
            <footer className="border-t">
              <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600">
                © {new Date().getFullYear()} Renataladies
              </div>
            </footer>
          </HideWhenEmbedded>
        </Providers>
      </body>
    </html>
  )
}
