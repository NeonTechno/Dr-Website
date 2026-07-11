export default function ExplorerPage() {
  const blocks = [
    { height: 1203, hash: "0xabc1234...", txCount: 12, timestamp: "2 mins ago" },
    { height: 1202, hash: "0xdef5678...", txCount: 8, timestamp: "5 mins ago" },
    { height: 1201, hash: "0xghi9012...", txCount: 15, timestamp: "7 mins ago" },
    { height: 1200, hash: "0xjkl3456...", txCount: 6, timestamp: "10 mins ago" },
  ];

  const transactions = [
    { hash: "0xaaa111...", type: "Activity", status: "Verified", time: "1 min ago" },
    { hash: "0xbbc222...", type: "Status", status: "Pending", time: "4 mins ago" },
    { hash: "0xccd333...", type: "Activity", status: "Verified", time: "6 mins ago" },
    { hash: "0xdde444...", type: "Rights", status: "Verified", time: "8 mins ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              DRP Block Explorer
            </h1>
            <p className="text-xl text-gray-600">
              AI-Enhanced Transparency for Human Rights on the Blockchain
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4">AI Network Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">1,203</div>
              <div className="text-sm opacity-90">Total Blocks</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">8,547</div>
              <div className="text-sm opacity-90">Transactions</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">324</div>
              <div className="text-sm opacity-90">Active Addresses</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold">98.5%</div>
              <div className="text-sm opacity-90">Network Health</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-blue-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white">Latest Blocks</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {blocks.map((block) => (
                <div key={block.height} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">#{block.height}</span>
                      </div>
                      <div>
                        <div className="font-mono text-sm text-gray-900">{block.hash}</div>
                        <div className="text-xs text-gray-500">{block.txCount} transactions</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">{block.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-indigo-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white">Latest Transactions</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {transactions.map((tx) => (
                <div key={tx.hash} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <span className="text-indigo-600 font-bold text-xs">{tx.type.substring(0, 2)}</span>
                      </div>
                      <div>
                        <div className="font-mono text-sm text-gray-900">{tx.hash}</div>
                        <div className="text-xs text-gray-500">{tx.type}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + 
                        (tx.status === "Verified" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800")}>
                        {tx.status}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{tx.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Block Time</h4>
            <div className="text-3xl font-bold text-gray-900">2.5s</div>
            <p className="text-sm text-gray-500 mt-1">Average block production time</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Hash Rate</h4>
            <div className="text-3xl font-bold text-gray-900">1.2 TH/s</div>
            <p className="text-sm text-gray-500 mt-1">Network hashing power</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Difficulty</h4>
            <div className="text-3xl font-bold text-gray-900">45.2K</div>
            <p className="text-sm text-gray-500 mt-1">Current network difficulty</p>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>© 2026 Decentralized Rights Protocol. AI-Enhanced Blockchain Explorer.</p>
        </footer>
      </div>
    </div>
  );
}