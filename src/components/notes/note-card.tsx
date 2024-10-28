// src/components/notes/note-card.tsx
'use client'

import { Note } from '@/types'
import { formatDistanceToNow } from 'date-fns'
import { MoreVertical, Star } from 'lucide-react'
import { useState } from 'react'
import { useNotesStore } from '@/store/use-notes-store'
import { NotePreview } from './note-preview'

interface NoteCardProps {
  note: Note
}

export function NoteCard({ note }: NoteCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { toggleFavorite, setSelectedNote, openPreview } = useNotesStore()
  const handleCardClick = () => {
    setSelectedNote(note)
    openPreview()
  }


  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm 
                    hover:shadow-md transition-shadow p-6 border border-gray-200 
                    dark:border-gray-700" onClick={handleCardClick} >
      {/* Top Actions */}
      <div className="absolute right-4 top-4 flex items-center gap-2">
        <button 
          className={`p-1 rounded-full transition-colors
            ${note.favorite 
              ? 'text-yellow-500 hover:text-yellow-600' 
              : 'text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400'
            }`}
          onClick={(e) => {
            e.stopPropagation()
            toggleFavorite(note.id)
          }}
        >
          <Star className="h-5 w-5" />
        </button>
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
            }}
            className="p-1 rounded-full text-gray-400 hover:text-gray-500 
                     dark:text-gray-500 dark:hover:text-gray-400"
          >
            <MoreVertical className="h-5 w-5" />
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg 
                          bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 
                           dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={(e) => {
                    e.stopPropagation()
                    // We'll implement edit later
                  }}
                >
                  Edit
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-red-600 
                           hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={(e) => {
                    e.stopPropagation()
                    // We'll implement delete later
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Note Content */}
      <div className="pr-12">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {note.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {note.content}
        </p>

        {/* Tags */}
        {note.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {note.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full 
                         text-xs font-medium bg-blue-100 text-blue-800
                         dark:bg-blue-900 dark:text-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Metadata */}
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Updated {formatDistanceToNow(note.updatedAt, { addSuffix: true })}
        </div>
      </div>
    </div>
  )
}