import React from 'react';

export default function PricesFilters() {
  return (
    <div className='bg-white rounded-2xl shadow-lg p-6 border border-gray-100'>
      <h2 className='text-xl font-bold mb-6 text-gray-800 text-center'>PRICES & FILTERS</h2>
      <form className='space-y-6'>
        
        {/* Price Range */}
        <div className='space-y-2'>
          <label className='block text-sm font-semibold text-gray-700'>Price Range:</label>
          <div className='flex flex-wrap items-center space-x-2'>
            <span className='text-gray-500'>$</span>
            <input
              className='w-24 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200'
              type="number"
              placeholder='0'
            />
            <span className='text-gray-500'>to</span>
            <input
              className='w-24 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200'
              type="number"
              placeholder='5000'
            />
          </div>
        </div>

        {/* Stops */}
        <div className='space-y-2'>
          <label className='block text-sm font-semibold text-gray-700'>Stops:</label>
          <select className='w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200'>
            <option>Any</option>
            <option>0 (Direct)</option>
            <option>1</option>
            <option>2+</option>
          </select>
        </div>

        {/* Airlines */}
        <div className='space-y-2'>
          <label className='block text-sm font-semibold text-gray-700'>Airlines:</label>
          <select className='w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200'>
            <option>All Airlines</option>
            <option>AirX</option>
            <option>SkyJet</option>
            <option>Global Air</option>
            <option>Express Air</option>
          </select>
        </div>

        {/* Sort By */}
        <div className='space-y-2'>
          <label className='block text-sm font-semibold text-gray-700'>Sort By:</label>
          <select className='w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200'>
            <option value="">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="duration">Duration</option>
            <option value="departure">Departure Time</option>
          </select>
        </div>

        {/* Apply Button */}
        <button
          type="button"
          className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200'
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
}


