// src/store/use-notes-store.ts
import { create } from 'zustand'
import { Note } from '@/types'

interface NotesState {
  notes: Note[]
  addNote: (note: Note) => void
  deleteNote: (id: string) => void
  updateNote: (id: string, note: Partial<Note>) => void
}

export const useNotesStore = create<NotesState>((set) => ({
  notes: [],
  addNote: (note) => 
    set((state) => ({ notes: [...state.notes, note] })),
  deleteNote: (id) => 
    set((state) => ({ notes: state.notes.filter((note) => note.id !== id) })),
  updateNote: (id, updatedNote) => 
    set((state) => ({
      notes: state.notes.map((note) => 
        note.id === id ? { ...note, ...updatedNote } : note
      ),
    })),
}))

useNotesStore.setState({
    notes: [
      {
        id: '1',
        title: 'Getting Started with Next.js',
        content: 'Next.js is a powerful React framework that makes building full-stack applications a breeze...',
        tags: ['nextjs', 'react', 'webdev'],
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-02'),
        favorite: true,
      },
      {
        id: '2',
        title: 'TypeScript Best Practices',
        content: 'TypeScript adds static typing to JavaScript, making your code more maintainable and less prone to errors...',
        tags: ['typescript', 'javascript'],
        createdAt: new Date('2024-01-03'),
        updatedAt: new Date('2024-01-03'),
        favorite: false,
      },
    ],
  })
