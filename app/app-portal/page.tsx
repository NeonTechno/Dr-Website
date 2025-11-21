export default function AppPortalPage() {
  // Placeholder data
  const identityScore = 842;
  const rightsBalance = 1250.5;
  const deriBalance = 3420;
  const recentActivities = [
    { id: 1, type: "Education", description: "University Degree Verification", date: "2024-03-15", status: "Verified" },
    { id: 2, type: "Work", description: "Employment Contract", date: "2024-03-10", status: "Verified" },
    { id: 3, type: "Healthcare", description: "Medical Records Access", date: "2024-03-08", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">DRP App Portal</h1>
              <p className="text-sm text-gray-600 mt-1">Decentralized Rights Protocol Dashboard</p>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* AI Identity Score Panel */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">AI Identity Score</h2>
              <p className="text-sm opacity-90">Your verified human rights credential score</p>
            </div>
            <div className="text-right">
              <div className="text-6xl font-bold">{identityScore}</div>
              <div className="text-sm opacity-90 mt-1">out of 1000</div>
            </div>
          </div>
          <div className="mt-6 bg-white/20 rounded-full h-3 backdrop-blur-sm">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-500"
              style={{ width: `${(identityScore / 1000) * 100}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Rewards Panel */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Token Balance</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">$RIGHTS</div>
                    <div className="text-2xl font-bold text-green-700">{rightsBalance.toFixed(2)}</div>
                  </div>
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-bold text-xl">R</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">$DeRi</div>
                    <div className="text-2xl font-bold text-purple-700">{deriBalance.toFixed(0)}</div>
                  </div>
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                    <span className="text-purple-700 font-bold text-xl">D</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sustainability Tracker */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability Tracker</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-600">156</div>
                <div className="text-sm text-gray-600 mt-1">Rights Protected</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-600">89%</div>
                <div className="text-sm text-gray-600 mt-1">Verification Rate</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-600">24</div>
                <div className="text-sm text-gray-600 mt-1">Active Proofs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Proof Forms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Submit Proof of Activities */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Submit Proof of Activities</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Activity Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Education</option>
                  <option>Work Experience</option>
                  <option>Healthcare</option>
                  <option>Legal</option>
                  <option>Community Service</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Describe your activity..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Document</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PDF, PNG, JPG up to 10MB</p>
                </div>
              </div>
              <button 
                type="button"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit Activity Proof
              </button>
            </form>
          </div>

          {/* Submit Proof of Status */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Submit Proof of Status</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>Employment Status</option>
                  <option>Citizenship</option>
                  <option>Marital Status</option>
                  <option>Professional License</option>
                  <option>Membership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Issuing Authority</label>
                <input 
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., Ministry of Labor"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Certificate</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer">
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PDF, PNG, JPG up to 10MB</p>
                </div>
              </div>
              <button 
                type="button"
                className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Submit Status Proof
              </button>
            </form>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 px-6 py-4">
            <h3 className="text-xl font-bold text-white">Recent Activities</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      activity.type === "Education" ? "bg-blue-100" :
                      activity.type === "Work" ? "bg-green-100" : "bg-purple-100"
                    }`}>
                      <span className={`font-bold ${
                        activity.type === "Education" ? "text-blue-600" :
                        activity.type === "Work" ? "text-green-600" : "text-purple-600"
                      }`}>
                        {activity.type.substring(0, 1)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{activity.description}</div>
                      <div className="text-sm text-gray-500">{activity.type} • {activity.date}</div>
                    </div>
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    activity.status === "Verified" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {activity.status}
                  </div>
                </div>
              </div>
            ))}
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
