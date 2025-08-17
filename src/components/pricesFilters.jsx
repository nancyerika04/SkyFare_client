import React from 'react'

export default function pricesFilters() {
  return (
    <div className='p-5 rounded-2xl shadow-2xl justify-center w-full items-center'>
      <h2 className='text-lg font-bold mb-4 text-gray-700 text-center'>PRICES & FILTERS</h2>
      <form className='bg-white items-center flex justify-center'>
        <div className='m-5 mb-4'>
            <label className='text-gray-500 mb-2'>Prices: </label>
            <input className='border rounded-md' type="number" placeholder='$'/>
        </div>
        
        <div className='m-5 mb-4'>
            <label className='text-gray-500'>Stops: </label>
            <select className='border rounded-md'>
                <option>0</option>
                <option>1</option>
                <option>2+</option>
            </select>
        </div>
        
        <div className='m-5 mb-4'>
            <label className='text-gray-500'>Airlines: </label>
            <select className='border rounded-md'>
                <option>AirX</option>
                <option>Skyjet</option>
            </select> 
        </div>

        <div className='m-4 mb-4'> 
            <label className='text-gray-500'>Sort: </label>
            <select className='border rounded-md'>
                <option value="">Price</option>
            </select>
        </div>
        
      </form>
    </div>
  )
}
