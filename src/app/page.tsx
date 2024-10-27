import Hero from '@/components/home/hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Hero />
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to Cerebro
      </h1>
      <p className="mt-4 text-gray-600">
        Your Second Brain for Learning
      </p>
    </main>
  );
}
