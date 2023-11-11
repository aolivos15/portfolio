import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrea Olivos',
  description: 'Portafolio Andrea Olivos',
  author: 'aolivos'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
