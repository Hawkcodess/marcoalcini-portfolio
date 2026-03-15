import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import CursorDot from '@/components/ui/CursorDot'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Marco Alcini — Creative Developer & Web Builder',
  description:
    'Marco Alcini is a creative developer and web builder crafting modern websites and web applications for businesses that want to stand out.',
  openGraph: {
    title: 'Marco Alcini — Creative Developer & Web Builder',
    description:
      'Crafting modern websites and web applications for businesses that want to stand out.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#FAFAFA] text-[#111111] font-body">
        <CursorDot />
        {children}
      </body>
    </html>
  )
}
