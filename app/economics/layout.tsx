import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DRP Economics - Decentralized Rights Protocol',
  description: 'Explore the economic principles of the Decentralized Rights Protocol',
};

export default function EconomicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DRP</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Decentralized Rights Protocol</h1>
                <p className="text-sm text-gray-500">Economic Framework</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/economics/micro" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Micro</a>
              <a href="/economics/macro" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Macro</a>
              <a href="/app-portal" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Portal</a>
              <a href="/explorer" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Explorer</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400 text-sm">
            <p>© 2026 Decentralized Rights Protocol. All rights reserved.</p>
            <p className="mt-2">Powered by NVIDIA Verification & Blockchain Technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
}