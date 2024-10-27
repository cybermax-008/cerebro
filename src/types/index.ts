// src/types/index.ts
export interface Note {
    id: string
    title: string
    content: string
    tags: string[]
    createdAt: Date
    updatedAt: Date
    favorite?: boolean
    category?: string
  }