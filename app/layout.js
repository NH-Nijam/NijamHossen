import { Inter } from 'next/font/google'
import './globals.css'
import Layout from './LayoutPage/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nijam Hossen | Front-end Developer',
  description: 'Front End Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
