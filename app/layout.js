import { Inter } from 'next/font/google'
import './globals.css'
import Layout from './LayoutPage/page'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nijam Hossen | Front-end Developer',
  description: 'Front End Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <ThemeProvider attribute ="class" defaultTheme ="light">
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
