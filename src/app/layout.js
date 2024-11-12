import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nishant Rana - Python Developer',
  description: 'Portfolio of Nishant Rana, Python Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <div className="container mx-auto px-4 py-8">
          <Header />
          <Navigation />
          <main className="mt-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}