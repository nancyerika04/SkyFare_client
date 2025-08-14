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
    <div className='bg-white border m-8 w-100 flex justify-center items-center px-4 shadow-2xl'>
      <form onSubmit={handleSubmit} className='p-6 '>
        <h2 className='text-2xl text-center font-bold mb-6 '>Search flights</h2>

        <div className='mb-4'>
          <label>From:</label>
          <input type="text" placeholder="City" value={from} onChange={(e)=>setFrom(e.target.value)} className='border rounded p-2 mt-1'></input>
        </div>

        <div className='mb-4'>
          <label>To:</label>
          <input type="text" placeholder="City" value={to} onChange={(e)=>setTo(e.target.value)} className='border rounded p-2 mt-1'></input>
        </div>

        <div >
          <label>Depart:</label>
          <input type="date" value={depart} onChange={(e)=>setDepart(e.target.value)} className='border rounded p-2 mt-1'></input>
        </div>

        <div>
          <label>Return:</label>
          <input type="date" value={returndate} onChange={(e)=>setReturndate(e.target.value)} className='border rounded p-2 mt-1'></input>
        </div>

        <div>
          <label>Flight class:</label>
          <select value={flightclass} onChange={(e)=>setFlightclass(e.target.value)} className='border rounded p-2 mt-1'>
            <option> Economy </option>
            <option> Premium </option>
            <option> Bussiness </option>
            <option> First </option>
          </select>
        </div>

        <button type="submit" className='bg-blue-600 rounded hover:bg-blue-300 p-1.5 items-center'>Search</button>
      </form>

    </div>
  )
}
