import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'
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
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
