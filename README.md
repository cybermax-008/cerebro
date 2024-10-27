# Cerebro
Cerebro is an AI-powered learning platform that combines spaced repetition, knowledge management, and smart study tools. It's designed to be your second brain, helping you learn more effectively and retain information longer.

## ✨ Core Features

### 🎯 Smart Learning System
- **AI-Powered Flashcards**
  - Automatically generated from your notes
  - Spaced repetition algorithm (SM-2)
  - Progress tracking
  - Custom study schedules

### 📚 Knowledge Base
- **Web Clipper Extension**
  - Save articles and web pages
  - Highlight important text
  - Add annotations
  - Auto-summarization

### 📝 Intelligent Notes
- **Smart Note Taking**
  - Rich text editor
  - AI-powered suggestions
  - Automatic linking
  - Topic detection

### 🤖 AI Features
- Content summarization
- Quiz generation
- Topic relationships
- Smart scheduling
- Semantic search

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Auth**: NextAuth.js
- **Styling**: Tailwind CSS + shadcn/ui
- **AI**: OpenAI API
- **State**: React Query
- **Language**: TypeScript

## Project Structure (In-Progress)

```bash
src/
├── app/
│   ├── (study)/
│   │   └── notes/
│   │       └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   └── navbar.tsx
│   ├── notes/
│   │   ├── notes-header.tsx
│   │   ├── notes-list.tsx
│   │   └── note-card.tsx
│   ├── ui/
│   │   └── dialog.tsx
│   └── home/
│       └── hero.tsx
├── lib/
│   └── utils.ts
├── store/
│   └── use-notes-store.ts
└── types/
    └── index.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/cerebro.git
cd cerebro
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Core Dependencies

```bash
# Install core dependencies
pnpm add @radix-ui/react-dialog
pnpm add class-variance-authority
pnpm add clsx
pnpm add tailwind-merge
pnpm add lucide-react
pnpm add zustand
pnpm add date-fns
pnpm add framer-motion

# Install dev dependencies
pnpm add -D @types/node @types/react @types/react-dom typescript
pnpm add -D tailwindcss postcss autoprefixer
```

## Features Implemented (Phase 1-2)

### Phase 1: Foundation ✅
- Next.js 14 setup with App Router
- TypeScript configuration
- Tailwind CSS integration
- Basic project structure
- Homepage with Hero section
- Navigation component
- Dark/Light theme support

### Phase 2: Notes System (In Progress)
- Basic Notes Features
  - Notes list page layout ✅
  - Note card components ✅
  - Note preview (in progress)
  - Tags system (pending)

## Development Progress

### Completed
- Project initialization
- Basic routing
- Homepage layout
- Navigation
- Theme switching
- Notes list view
- Note card component

### In Progress
- Note preview functionality
- Dialog component implementation

## Contributing

1. Fork the repository
2. Create your feature branch
```bash
git checkout -b feature/amazing-feature
```
3. Commit your changes
```bash
git commit -m 'Add amazing feature'
```
4. Push to the branch
```bash
git push origin feature/amazing-feature
```
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Radix UI](https://www.radix-ui.com/) - For accessible components
- [Zustand](https://github.com/pmndrs/zustand) - For state management
