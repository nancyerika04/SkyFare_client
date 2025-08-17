import React from 'react'

export default function results() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Flight Search Results</h1>
          <p className="text-xl text-gray-600">Find the perfect flight for your journey</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center">
            <div className="text-6xl mb-4">✈️</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Search Results</h2>
            <p className="text-gray-600 mb-6">This is the results page where flight search results will be displayed</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="text-3xl mb-2">🔍</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Search Flights</h3>
                <p className="text-sm text-gray-600">Find the best deals for your route</p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Compare Prices</h3>
                <p className="text-sm text-gray-600">View multiple airline options</p>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <div className="text-3xl mb-2">💳</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Book Instantly</h3>
                <p className="text-sm text-gray-600">Secure your seat immediately</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
