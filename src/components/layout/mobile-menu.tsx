// src/components/layout/mobile-menu.tsx
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 bottom-0 w-64 bg-white z-50 p-6"
          >
            <div className="flex flex-col space-y-4">
              <Link href="/notes" className="text-gray-600 hover:text-blue-600">
                Notes
              </Link>
              <Link href="/flashcards" className="text-gray-600 hover:text-blue-600">
                Flashcards
              </Link>
              <Link href="/knowledge-base" className="text-gray-600 hover:text-blue-600">
                Knowledge Base
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}