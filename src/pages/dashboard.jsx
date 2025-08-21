import React from 'react'
import SearchForm from '../components/searchForm'
import PicesFilters from '../components/pricesFilters'
import FlightResult from '../components/flightResult'
import  Recommandation from '../components/recommandation'
import { useState } from 'react'

export default function dashboard() {
  const [filterflight, setFilterflight] = useState([]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Flight Dashboard</h1>
          <p className="text-xl text-gray-600">Manage your searches and view results</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">New Search</h2>
              <SearchForm onSearchResults={setFilterflight}/>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Filters & Preferences</h2>
              <PicesFilters/>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Flight Results</h2>
              <FlightResult flights={filterflight}/>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommendations</h2>
              <Recommandation/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
