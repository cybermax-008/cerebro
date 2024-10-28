// src/components/notes/note-preview.tsx
'use client'

import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { formatDistanceToNow } from 'date-fns'
import { useNotesStore } from '@/store/use-notes-store'

export function NotePreview() {
  const { selectedNote, isPreviewOpen, closePreview } = useNotesStore()

  if (!selectedNote) return null

  return (
    <Dialog 
      open={isPreviewOpen} 
      onOpenChange={(open) => !open && closePreview()}
    >
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            {selectedNote.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Tags */}
          {selectedNote.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedNote.tags.map((tag) => (
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
            {selectedNote.content}
          </div>

          {/* Metadata */}
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Last updated {formatDistanceToNow(selectedNote.updatedAt, { addSuffix: true })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}