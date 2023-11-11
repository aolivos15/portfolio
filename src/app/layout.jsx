import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import NavBar from '@/components/NavBar'
import MyFooter from '@/components/MyFooter'

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
        <div className='h-screen flex flex-col'>
          <div style={{ backgroundImage: 'url(stars_bg.webp)' }}
            className='flex-grow bg-cover'>
            <NavBar />
            {children}
          </div>
          <MyFooter />
        </div>
        </Providers>
      </body>
    </html>
  )
}
