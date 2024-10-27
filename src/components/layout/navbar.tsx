// src/components/layout/navbar.tsx
'use client'

import Link from 'next/link'
import { ThemeToggle } from '../theme-toggle'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-800 
                    bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            >
              Cerebro
            </Link>
          </div>
          
          <div className="hidden sm:flex items-center space-x-4">
            <Link 
              href="/notes" 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 
                       dark:hover:text-blue-400 transition-colors"
            >
              Notes
            </Link>
            <Link 
              href="/flashcards" 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 
                       dark:hover:text-blue-400 transition-colors"
            >
              Flashcards
            </Link>
            <Link 
              href="/knowledge-base" 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 
                       dark:hover:text-blue-400 transition-colors"
            >
              Knowledge Base
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {mounted && (
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Theme: {theme}
              </span>
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}