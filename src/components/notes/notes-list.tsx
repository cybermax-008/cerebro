// src/components/notes/notes-list.tsx
'use client'

import { useNotesStore } from '@/store/use-notes-store'
import { NoteCard } from './note-card'
import { Plus } from 'lucide-react'
import { NotePreview } from './note-preview'

export function NotesList() {
  const notes = useNotesStore((state) => state.notes)

  // Wrap everything in a fragment to include both the list/empty state and preview
  return (
    <>
      {notes.length === 0 ? (
        <div className="text-center py-12">
          <div className="p-8 rounded-lg inline-flex flex-col items-center bg-gray-50 dark:bg-gray-800">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
              <Plus className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
              No notes yet
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Create your first note to get started
            </p>
            <button 
              onClick={() => {/* We'll implement this later */}}
              className="bg-blue-600 text-white px-4 py-2 rounded-md 
                       hover:bg-blue-500 transition-colors"
            >
              Create Note
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      )}
      
      {/* Preview component should always be rendered, regardless of notes existence */}
      <NotePreview />
    </>
  )
}