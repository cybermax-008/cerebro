// src/app/(study)/notes/page.tsx
import { NotesHeader } from '@/components/notes/notes-header'
import { NotesList } from '@/components/notes/notes-list'

export default function NotesPage() {
  return (
    <div className="container mx-auto p-6 pt-20 space-y-6">
      <NotesHeader />
      <NotesList />
    </div>
  )
}