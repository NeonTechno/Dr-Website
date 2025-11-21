export default function AppPortalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              DRP Application Portal
            </h1>
            <p className="text-xl text-gray-600">
              Submit Proofs, Track Rights, and Earn Rewards
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* AI Identity Score Panel */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-4">AI Identity Score</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-5xl font-bold mb-2">87</div>
              <div className="text-sm opacity-90">Overall Score</div>
              <div className="mt-2 text-xs">🔒 Verified & Active</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-5xl font-bold mb-2">23</div>
              <div className="text-sm opacity-90">Activities Logged</div>
              <div className="mt-2 text-xs">📊 Last 30 days</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-5xl font-bold mb-2">12</div>
              <div className="text-sm opacity-90">Status Updates</div>
              <div className="mt-2 text-xs">✅ All Verified</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Submit Proof of Activities */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
              <h3 className="text-xl font-bold text-white">Submit Proof of Activity</h3>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Activity Type
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Education Access</option>
                    <option>Healthcare Access</option>
                    <option>Legal Representation</option>
                    <option>Community Participation</option>
                    <option>Employment Activity</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your activity..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Supporting Evidence
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
                    <div className="text-gray-500">
                      <span className="text-2xl">📎</span>
                      <p className="mt-2">Click to upload files or drag and drop</p>
                      <p className="text-xs mt-1">PDF, Images, Documents (Max 10MB)</p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Submit Activity Proof
                </button>
              </form>
            </div>
          </div>

          {/* Submit Proof of Status */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
              <h3 className="text-xl font-bold text-white">Submit Proof of Status</h3>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status Type
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Citizenship Status</option>
                    <option>Refugee Status</option>
                    <option>Employment Status</option>
                    <option>Education Status</option>
                    <option>Healthcare Coverage</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Provide status details..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Official Documentation
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
                    <div className="text-gray-500">
                      <span className="text-2xl">📄</span>
                      <p className="mt-2">Upload official documents</p>
                      <p className="text-xs mt-1">Verified sources only</p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Submit Status Proof
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Rewards Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rewards Panel</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">$RIGHTS Balance</div>
                    <div className="text-3xl font-bold text-gray-900">2,547</div>
                  </div>
                  <div className="text-4xl">💎</div>
                </div>
                <div className="mt-2 text-xs text-gray-600">
                  +156 earned this month
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">$DeRi Balance</div>
                    <div className="text-3xl font-bold text-gray-900">4,892</div>
                  </div>
                  <div className="text-4xl">🪙</div>
                </div>
                <div className="mt-2 text-xs text-gray-600">
                  +243 earned this month
                </div>
              </div>
            </div>
            <button className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Claim Rewards
            </button>
          </div>

          {/* Sustainability Tracker */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability Tracker</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Carbon Offset</span>
                <span className="font-bold text-green-600">-45 kg CO₂</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-600 h-3 rounded-full" style={{ width: "65%" }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Renewable Energy</span>
                <span className="font-bold text-blue-600">87%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: "87%" }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Community Impact</span>
                <span className="font-bold text-purple-600">152 pts</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-purple-600 h-3 rounded-full" style={{ width: "76%" }}></div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                🌍 Your activities contribute to sustainable development goals!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>© 2025 Decentralized Rights Protocol. Empowering human rights through blockchain technology.</p>
        </footer>
      </div>
    </div>
  );
}
