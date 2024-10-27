// src/app/layout.tsx
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/providers/theme-provider'
import Navbar from '@/components/layout/navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-zinc-900 transition-colors">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}