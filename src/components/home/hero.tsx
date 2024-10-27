// src/components/home/hero.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative min-h-screen"> 
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
          >
            Learn Smarter,{" "}
            <span className="text-blue-600 dark:text-blue-400">Remember Longer</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Transform your learning experience with AI-powered spaced repetition,
            intelligent note-taking, and seamless knowledge management.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6"
          >
            <Link
              href="/get-started"
              className="w-full sm:w-auto rounded-md bg-blue-600 px-3.5 py-2.5 text-center
                       text-sm font-semibold text-white shadow-sm hover:bg-blue-500 
                       transition-all hover:scale-105"
            >
              Get Started Free
            </Link>
            
            <Link
              href="/demo"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300 
                       hover:text-blue-600 dark:hover:text-blue-400 transition-colors 
                       flex items-center gap-2"
            >
              Live Demo <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}