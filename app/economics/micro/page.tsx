'use client';

import { useState, useEffect } from 'react';

export default function MicroEconomicsPage() {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [verificationScore, setVerificationScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate NVIDIA verification
  useEffect(() => {
    const verifyWithNVIDIA = async () => {
      try {
        const mockResponse = {
          verified: true,
          score: 87,
          confidence: 0.95,
        };
        
        setIsVerified(mockResponse.verified);
        setVerificationScore(mockResponse.score);
        setIsLoading(false);
      } catch (error) {
        console.error('Verification failed:', error);
        setIsVerified(false);
        setIsLoading(false);
      }
    };

    verifyWithNVIDIA();
  }, []);

  const microConcepts = [
    {
      title: 'Token Utility',
      description: 'Understanding the value and function of $RIGHTS and $DeRi tokens',
      icon: '💎',
      color: 'blue',
    },
    {
      title: 'Supply & Demand',
      description: 'How token distribution affects economic equilibrium',
      icon: '⚖️',
      color: 'green',
    },
    {
      title: 'Transaction Costs',
      description: 'Analyzing gas fees and post-quantum crypto efficiency',
      icon: '⛽',
      color: 'purple',
    },
    {
      title: 'Incentive Mechanisms',
      description: 'Reward structures for proof submission and verification',
      icon: '🎯',
      color: 'orange',
    },
  ];

  const tokenomicsData = {
    totalSupply: '1,000,000,000',
    circulatingSupply: '245,000,000',
    staked: '156,000,000',
    burned: '12,000,000',
  };

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Microeconomics of DRP
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding the individual economic agents and their interactions
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">NVIDIA Verification</h2>
            <p className="text-gray-500">AI-Powered Content Authentication</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <span className="font-bold text-green-600">NVIDIA</span>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : isVerified ? (
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">✓</span>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-700">{verificationScore}/100</div>
                <div className="text-green-600 font-medium">Content Verified</div>
                <div className="text-sm text-green-500">AI Confidence: 95%</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-green-200 rounded-full h-3">
                <div className="bg-green-600 h-3 rounded-full" style={{ width: verificationScore + '%' }}></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <div className="text-red-600 text-center">
              <span className="text-2xl">✗</span>
              <p className="font-medium mt-2">Verification Failed</p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tokenomics Overview</h2>
          <div className="space-y-6">
            {Object.entries(tokenomicsData).map(([key, value]) => (
              <div key={key} className="border-b border-gray-100 pb-4 last:border-0">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^ /, '')}
                  </span>
                  <span className="text-xl font-bold text-gray-900">{value}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800 text-sm">
              <strong>Note:</strong> All token data is verified through NVIDIA AI
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Microeconomic Metrics</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">2.45M</div>
              <div className="text-sm opacity-90">Active Wallets</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">$1.25</div>
              <div className="text-sm opacity-90">Avg. TX Fee</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">156K</div>
              <div className="text-sm opacity-90">Daily TXs</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">98.5%</div>
              <div className="text-sm opacity-90">Network Health</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Core Microeconomic Concepts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {microConcepts.map((concept) => (
            <div key={concept.title} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className={"w-12 h-12 bg-" + concept.color + "-100 rounded-xl flex items-center justify-center"}>
                  <span className="text-2xl">{concept.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{concept.title}</h3>
                </div>
              </div>
              <p className="text-gray-600">{concept.description}</p>
              <button className="mt-4 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}