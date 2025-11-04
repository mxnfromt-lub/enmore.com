export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">Enmore</h1>
      <p className="text-gray-600 max-w-xl mb-6">
        A clean, fast marketing site built with Next.js + Vercel.
      </p>
      <a
        href="/contact"
        className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
      >
        Contact Us
      </a>
    </main>
  );
}
