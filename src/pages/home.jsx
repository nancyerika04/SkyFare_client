import React from 'react'
import SearchForm from '../components/searchForm'

export default function Home() {
  return (
    <div className='text-center px-4 mt-12'>
      <h1 className='font-semibold font-mono text-3xl text-blue-800 '>Find smarter, cheaper flights—fast</h1>
      <h2 className='text-xl mt-2 text-gray-900'>AI-powered deals, real-time alerts, and seamless booking </h2>
      <p className='text-sm text-gray-900 mt-1'>[ Trust badges:  ★4.8  |  Secure  |  1M+ searches ]</p>
      <SearchForm/>
      <p className='text-sm mb-2'> [⚡ Smart Deals]   [🔔 Price Alerts]   [🧠 AI Assistant]   [🛡️ Secure Checkout] </p>
    </div>
  )
}
