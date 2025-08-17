import React from 'react'
import SearchForm from '../components/searchForm'

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16'>
      <div className='text-center px-6 max-w-6xl mx-auto'>
        <h1 className='font-bold text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6'>
          Find smarter, cheaper flights—fast
        </h1>
        <h2 className='text-2xl md:text-3xl text-gray-700 mb-4 font-medium'>
          AI-powered deals, real-time alerts, and seamless booking
        </h2>
        <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-8 inline-block shadow-lg border border-white/20'>
          <p className='text-lg text-gray-800 font-medium'>
            Trust badges: ★4.8 | Secure | 1M+ searches
          </p>
        </div>
        
        <div className='mb-12'>
          <SearchForm/>
        </div>
        
        <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 max-w-4xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm'>
            <div className='flex items-center justify-center space-x-2 text-gray-700'>
              <span className='text-xl'>⚡</span>
              <span className='font-medium'>Smart Deals</span>
            </div>
            <div className='flex items-center justify-center space-x-2 text-gray-700'>
              <span className='text-xl'>🔔</span>
              <span className='font-medium'>Price Alerts</span>
            </div>
            <div className='flex items-center justify-center space-x-2 text-gray-700'>
              <span className='text-xl'>🧠</span>
              <span className='font-medium'>AI Assistant</span>
            </div>
            <div className='flex items-center justify-center space-x-2 text-gray-700'>
              <span className='text-xl'>🛡️</span>
              <span className='font-medium'>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
