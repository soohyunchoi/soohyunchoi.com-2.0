import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LayoutWrapper from '@/components/LayoutWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Soohyun Choi',
  description: 'Soohyun Choi portfolio website designed and coded by Soohyun Choi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth' style={{backgroundColor: '#eeebe3'}}>
        <head>
          <link rel="preload" as="image" href="/assets/images/2.0/dive.webp"/>
          <link rel="preload" as="image" href="/assets/images/2.0/dj_v2.webp"/>
          <link rel="preload" as="image" href="/assets/images/2.0/rinjani.webp"/>
          <link rel="preload" as="image" href="/assets/images/2.0/anna.webp"/>
          <link rel="preload" as="image" href="/assets/images/2.0/49.webp"/>
          <link rel="preload" as="image" href="/assets/images/2.0/bali_fisher.webp"/>
        </head>
        <body className={inter.className} style={{backgroundColor: '#eeebe3'}}>
            <LayoutWrapper>
                {children}
            </LayoutWrapper>
        </body>
    </html>
  )
}
