export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-center text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Decentralized Rights Protocol</h1>
      <p className="text-lg max-w-xl">
        Empowering human rights, sustainability, and AI transparency through blockchain.
      </p>
      <a href="/learn" className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Learn More
      </a>
    </main>
  );
}