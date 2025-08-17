import React from 'react'

export default function flightResult() {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="text-3xl">✈️</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">AirX Airlines</h3>
              <p className="text-sm text-gray-600">Flight AX-123</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">$299</div>
            <p className="text-sm text-gray-500">Economy Class</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between py-4 border-t border-gray-100">
          <div className="text-center">
            <div className="text-xl font-semibold text-gray-800">10:30 AM</div>
            <div className="text-sm text-gray-600">JFK</div>
          </div>
          
          <div className="flex-1 mx-4">
            <div className="flex items-center">
              <div className="flex-1 h-px bg-gray-300"></div>
              <div className="mx-2 text-blue-500">✈️</div>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div className="text-center text-sm text-gray-500 mt-1">4h 15m</div>
          </div>
          
          <div className="text-center">
            <div className="text-xl font-semibold text-gray-800">2:45 PM</div>
            <div className="text-sm text-gray-600">LAX</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Direct</span>
            <span>Boeing 737</span>
            <span>WiFi Available</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
            Select Flight
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="text-3xl">🛩️</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">SkyJet Airlines</h3>
              <p className="text-sm text-gray-600">Flight SJ-456</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">$349</div>
            <p className="text-sm text-gray-500">Economy Class</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between py-4 border-t border-gray-100">
          <div className="text-center">
            <div className="text-xl font-semibold text-gray-800">11:15 AM</div>
            <div className="text-sm text-gray-600">JFK</div>
          </div>
          
          <div className="flex-1 mx-4">
            <div className="flex items-center">
              <div className="flex-1 h-px bg-gray-300"></div>
              <div className="mx-2 text-blue-500">✈️</div>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div className="text-center text-sm text-gray-500 mt-1">4h 15m</div>
          </div>
          
          <div className="text-center">
            <div className="text-xl font-semibold text-gray-800">3:30 PM</div>
            <div className="text-sm text-gray-600">LAX</div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">1 Stop</span>
            <span>Airbus A320</span>
            <span>USB Charging</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
            Select Flight
          </button>
        </div>
      </div>
      
      <div className="text-center py-8">
        <button className="text-blue-600 hover:text-blue-700 font-medium text-lg">
          Load more flights →
        </button>
      </div>
    </div>
  )
}
