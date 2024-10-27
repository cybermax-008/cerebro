// src/components/notes/note-preview.tsx
'use client'

import { Note } from '@/types'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { formatDistanceToNow } from 'date-fns'

interface NotePreviewProps {
  note: Note
  isOpen: boolean
  onClose: () => void
}

export function NotePreview({ note, isOpen, onClose }: NotePreviewProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <div className="space-y-4">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {note.title}
          </h2>

          {/* Tags */}
          {note.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
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

          {/* Content */}
          <div className="prose dark:prose-invert max-w-none">
            {note.content}
          </div>

          {/* Metadata */}
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Last updated {formatDistanceToNow(note.updatedAt, { addSuffix: true })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}