'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const features = [
    {
      title: 'Block Explorer',
      description: 'AI-Enhanced transparency for human rights on the blockchain',
      href: '/explorer',
      icon: '🔍',
      color: 'blue',
    },
    {
      title: 'App Portal',
      description: 'Submit proofs, track rights, and earn rewards',
      href: '/app-portal',
      icon: '📱',
      color: 'green',
    },
    {
      title: 'Micro Economics',
      description: 'Understand token utility, supply & demand, and incentive mechanisms',
      href: '/economics/micro',
      icon: '💎',
      color: 'purple',
    },
    {
      title: 'Macro Economics',
      description: 'Analyze global impact, adoption, and economic forecasts',
      href: '/economics/macro',
      icon: '🌍',
      color: 'indigo',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">DRP</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Decentralized Rights Protocol</h1>
                <p className="text-sm text-gray-500">Empowering Human Rights Through Blockchain</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => router.push('/app-portal')} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Launch App
              </button>
              <button onClick={() => router.push('/explorer')} className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Explorer
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Decentralized Rights Protocol
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Empowering human rights, sustainability, and AI transparency through blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => router.push('/app-portal')} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg">
              Get Started
            </button>
            <button onClick={() => router.push('/economics/micro')} className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-lg">
              Learn Economics
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              onClick={() => router.push(feature.href)}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={"w-12 h-12 bg-" + feature.color + "-100 rounded-xl flex items-center justify-center group-hover:bg-" + feature.color + "-200 transition-colors"}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{feature.description}</p>
              <div className="mt-4 text-blue-600 font-medium text-sm">
                Explore →
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-12 mb-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2.45M+</div>
              <div className="text-sm opacity-90">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">156</div>
              <div className="text-sm opacity-90">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">8,547</div>
              <div className="text-sm opacity-90">Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98.5%</div>
              <div className="text-sm opacity-90">Network Health</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powered by NVIDIA AI Verification
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            All content and data on the Decentralized Rights Protocol is verified using NVIDIA's 
            advanced AI authentication system, ensuring transparency and trust.
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl">🤖</span>
            <span className="text-3xl font-bold text-gray-900">NVIDIA</span>
          </div>
          <div className="mt-6 flex justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span>Content Verification</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span>AI Authentication</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span>Predictive Analytics</span>
            </div>
          </div>
        </div>

        <footer className="mt-16 text-center text-gray-600 text-sm">
          <p>© 2026 Decentralized Rights Protocol. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, TailwindCSS, and NVIDIA AI</p>
        </footer>
      </main>
    </div>
  );
}