import React from 'react'
import { useState } from 'react'

export default function searchForm() {
  const[from, setFrom] = useState('');
  const[to, setTo] = useState('');
  const[depart, setDepart] = useState('');
  const[returndate, setReturndate] = useState('');
  const[flightclass, setFlightclass] = useState('');
  const handleSubmit =(e) =>{
  e.preventDefault();

  const searchdata = {
    from, to, depart, returndate, flightclass
  };
  console.log(searchdata);
}
  return (
    <div className='bg-white m-8 min-h-screen flex justify-center items-center px-4'>
      <form onSubmit={handleSubmit} className='space-y-4 rounded-xl shadow-lg border-gray-100 w-2/4 max-w-md'>
        <h2 className='text-2xl text-center font-semibold mb-6 '>Search flights</h2>

        <div className='mb-4'>
          <label className='font-medium text-gray-700'>From:</label>
          <input type="text" placeholder="City" value={from} onChange={(e)=>setFrom(e.target.value)} className='border rounded-md p-2 mt-1 border-gray-400 w-full'></input>
        </div>

        <div className='mb-4'>
          <label className='font-medium text-gray-700'>To:</label>
          <input type="text" placeholder="City" value={to} onChange={(e)=>setTo(e.target.value)} className='border rounded-md p-2 mt-1 border-gray-400 w-full'></input>
        </div>

        <div >
          <label className='font-medium text-gray-700'>Depart:</label>
          <input type="date" value={depart} onChange={(e)=>setDepart(e.target.value)} className='border rounded-md p-2 mt-1 border-gray-400 w-full'></input>
        </div>

        <div>
          <label className='font-medium text-gray-700'>Return:</label>
          <input type="date" value={returndate} onChange={(e)=>setReturndate(e.target.value)} className='border rounded-md p-2 mt-1 border-gray-400 w-full'></input>
        </div>

        <div>
          <label className='font-medium text-gray-700'>Flight class:</label>
          <select value={flightclass} onChange={(e)=>setFlightclass(e.target.value)} className='border rounded-md p-2 mt-1 border-gray-400 w-full'>
            <option> Economy </option>
            <option> Premium </option>
            <option> Bussiness </option>
            <option> First </option>
          </select>
        </div>

        <button type="submit" className='bg-gray-600 rounded hover:bg-gray-900 p-1.5 items-center w-full text-white'>Search</button>
      </form>

    </div>
  )
}
