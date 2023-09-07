import { NavBar } from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
    <html lang="en" className='bg-white'>
        <body className={`bg-white px-32 ${inter.className}`}>
            <NavBar/>
            {children}
        </body>
    </html>
  )
}
