import React from 'react'

export default function pricesFilters() {
  return (
    <div className='p-5 rounded-lg shadow-md w-full max-w-md border-blue-200 border'>
      <form className='bg-gray-100 items-center '>

        <h2 className='text-lg font-bold mb-4'>PRICES & FILTERS</h2>

        <div className='mb-4'>
            <label className='text-gray-500'>Prices:</label>
            <input type="number" placeholder='$---$'/>
        </div>
        
        <div className='mb-4'>
            <label className='text-gray-500'>Stops:</label>
            <select className=''>
                <option>0</option>
                <option>1</option>
                <option>2+</option>
            </select>
        </div>
        
        <div className='mb-4'>
            <label className='text-gray-500'>Airlines:</label>
            <select>
                <option>AirX</option>
                <option>Skyjet</option>
            </select> 
        </div>

        <div className='mb-4'> 
            <label className='text-gray-500'>Sort:</label>
            <select>
                <option value="">Price</option>
            </select>
        </div>
        
      </form>
    </div>
  )
}
