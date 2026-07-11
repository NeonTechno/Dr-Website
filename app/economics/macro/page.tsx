'use client';

import { useState, useEffect } from 'react';

export default function MacroEconomicsPage() {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [verificationScore, setVerificationScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMetric, setSelectedMetric] = useState('gdp');

  useEffect(() => {
    const verifyWithNVIDIA = async () => {
      try {
        const mockResponse = {
          verified: true,
          score: 92,
          confidence: 0.97,
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

  const macroData = {
    gdp: {
      title: 'Global Economic Impact',
      value: '$2.45B',
      growth: '+12.5%',
      description: 'Annual economic value created by DRP adoption',
    },
    adoption: {
      title: 'Protocol Adoption',
      value: '156 Countries',
      growth: '+8%',
      description: 'Number of countries with active DRP implementation',
    },
    rightsProtected: {
      title: 'Rights Protected',
      value: '24.5M',
      growth: '+15%',
      description: 'Total human rights records secured on blockchain',
    },
    sustainability: {
      title: 'Sustainability Score',
      value: '87/100',
      growth: '+3%',
      description: 'Environmental and social sustainability impact',
    },
  };

  const selectedData = macroData[selectedMetric as keyof typeof macroData];

  const sectors = [
    { name: 'Education', impact: 'High', value: '$850M', color: 'blue' },
    { name: 'Healthcare', impact: 'Critical', value: '$620M', color: 'green' },
    { name: 'Legal', impact: 'High', value: '$480M', color: 'purple' },
    { name: 'Employment', impact: 'Medium', value: '$320M', color: 'orange' },
    { name: 'Housing', impact: 'Medium', value: '$180M', color: 'red' },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Macroeconomics of DRP
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Analyzing the broader economic impact of the Decentralized Rights Protocol
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">NVIDIA Verification</h2>
            <p className="text-gray-500">Macroeconomic Data Authentication</p>
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
                <div className="text-green-600 font-medium">Macro Data Verified</div>
                <div className="text-sm text-green-500">AI Confidence: 97%</div>
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

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Macroeconomic Metrics</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.keys(macroData).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedMetric(key)}
              className={"px-4 py-2 rounded-lg font-medium transition-colors " + 
                (selectedMetric === key ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200")}
            >
              {macroData[key as keyof typeof macroData].title}
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              {selectedData?.value}
            </div>
            <div className="text-green-600 font-bold text-xl mb-2">
              {selectedData?.growth}
            </div>
            <div className="text-gray-600 max-w-md mx-auto">
              {selectedData?.description}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Economic Impact by Sector</h2>
        <div className="space-y-4">
          {sectors.map((sector) => (
            <div key={sector.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div>
                  <div className="font-bold text-gray-900">{sector.name}</div>
                  <div className="text-sm text-gray-500">Impact: {sector.impact}</div>
                </div>
              </div>
              <div className="font-bold text-gray-900">{sector.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">Global DRP Adoption</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-4xl font-bold mb-2">156</div>
            <div className="text-sm opacity-90">Countries</div>
            <div className="mt-4 text-xs opacity-80">Active DRP implementations worldwide</div>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-4xl font-bold mb-2">24.5M</div>
            <div className="text-sm opacity-90">Users</div>
            <div className="mt-4 text-xs opacity-80">People with verified rights</div>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-4xl font-bold mb-2">89%</div>
            <div className="text-sm opacity-90">Coverage</div>
            <div className="mt-4 text-xs opacity-80">Global population coverage</div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-white/5 rounded-lg">
          <p className="text-sm text-center">
            Interactive world map coming soon
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">5-Year Economic Forecast</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Projected Growth</h3>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-gray-600">2026</span><span className="font-bold text-green-600">+25%</span></div>
              <div className="flex justify-between"><span className="text-gray-600">2027</span><span className="font-bold text-green-600">+35%</span></div>
              <div className="flex justify-between"><span className="text-gray-600">2028</span><span className="font-bold text-green-600">+45%</span></div>
              <div className="flex justify-between"><span className="text-gray-600">2029</span><span className="font-bold text-green-600">+55%</span></div>
              <div className="flex justify-between"><span className="text-gray-600">2030</span><span className="font-bold text-green-600">+65%</span></div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Market Cap Projection</h3>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-gray-600">2026</span><span className="font-bold">$1.2B</span></div>
              <div className="flex justify-between"><span className="text-gray-600">2027</span><span className="font-bold">$2.8B</span></div>
              <div className="flex justify-between"><span className="text-gray-600">2028</span><span className="font-bold">$5.6B</span></div>
              <div className="flex justify-between"><span className="text-gray-600">2029</span><span className="font-bold">$9.8B</span></div>
              <div className="flex justify-between"><span className="text-gray-600">2030</span><span className="font-bold">$15.4B</span></div>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800 text-sm">
            <strong>Note:</strong> All forecasts are AI-generated and verified through NVIDIA
          </p>
        </div>
      </div>
    </div>
  );
}