// src/store/use-notes-store.ts
import { create } from 'zustand'
import { Note } from '@/types'

interface NotesState {
  notes: Note[]
  selectedNote: Note | null
  isPreviewOpen: boolean
  addNote: (note: Note) => void
  deleteNote: (id: string) => void
  updateNote: (id: string, note: Partial<Note>) => void
  setSelectedNote: (note: Note | null) => void
  openPreview: () => void
  closePreview: () => void
  toggleFavorite: (id: string) => void
}

export const useNotesStore = create<NotesState>((set) => ({
  notes: [],
  selectedNote: null,
  isPreviewOpen: false,
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
  setSelectedNote: (note) => set({ selectedNote: note }),
  openPreview: () => set({ isPreviewOpen: true }),
  closePreview: () => set({ isPreviewOpen: false, selectedNote: null }),
  toggleFavorite: (id) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, favorite: !note.favorite } : note
      ),
    })),
}))


// src/store/use-notes-store.ts
// Add this after your store definition
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
