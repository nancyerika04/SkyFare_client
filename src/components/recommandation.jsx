import React from 'react'

export default function recommandation() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">🌟</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Top Destination</h3>
            <p className="text-sm text-gray-600">Based on your preferences</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          Discover amazing deals to Tokyo, Japan starting from $899. Perfect weather in March!
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-gray-600">4.8 (1,247 reviews)</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
            Explore
          </button>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">🔥</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Flash Sale</h3>
            <p className="text-sm text-gray-600">Limited time offer</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          Paris, France - Save 42%! From $699 (was $1,199). Don't miss this incredible deal!
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-gray-600">4.9 (2,156 reviews)</span>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
            Book Now
          </button>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">📈</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Trending</h3>
            <p className="text-sm text-gray-600">Popular destination</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          Bali, Indonesia is trending! From $799. Escape to paradise with pristine beaches.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="text-sm text-gray-600">4.7 (1,893 reviews)</span>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="text-center">
        <button className="text-blue-600 hover:text-blue-700 font-medium text-lg">
          View all recommendations →
        </button>
      </div>
    </div>
  )
}
