import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

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
      <body className="bg-[#EDE8DF] text-[#111111] font-body">
        {children}
      </body>
    </html>
  )
}
