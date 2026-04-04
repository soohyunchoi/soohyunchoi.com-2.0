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
        <body className={inter.className} style={{backgroundColor: '#eeebe3'}}>
            <LayoutWrapper>
                {children}
            </LayoutWrapper>
        </body>
    </html>
  )
}
