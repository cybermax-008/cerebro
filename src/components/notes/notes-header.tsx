// src/components/notes/notes-header.tsx
'use client'

import { Button } from '@/components/ui/button'
import { Plus, Search } from 'lucide-react'

export function NotesHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Notes</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Manage your notes and thoughts
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 sm:flex-initial">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <input
            type="search"
            placeholder="Search notes..."
            className="w-full sm:w-64 pl-9 pr-4 py-2 text-sm border rounded-md 
                     border-gray-200 dark:border-gray-700 dark:bg-gray-800 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <Button
          onClick={() => {/* We'll implement this later */}}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          New Note
        </Button>
      </div>
    </div>
  )
}