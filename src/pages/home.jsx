import React from 'react'
import SearchForm from '../components/searchForm'

export default function Home() {
  return (
    <div>
      <h1 className='font-semibold font-mono text-3xl justify-center'>Find smarter, cheaper flights—fast</h1>
      <h2 className='text-2xl'>AI-powered deals, real-time alerts, and seamless booking </h2>
      <p>[ Trust badges:  ★4.8  |  Secure  |  1M+ searches ]</p>
      <SearchForm/>
      <p> [⚡ Smart Deals]   [🔔 Price Alerts]   [🧠 AI Assistant]   [🛡️ Secure Checkout] </p>
    </div>
  )
}
