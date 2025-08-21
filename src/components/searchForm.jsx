import React from 'react'
import { useState } from 'react'

export default function searchForm({onSearchResults}) {
  const[from, setFrom] = useState('');
  const[to, setTo] = useState('');
  const[depart, setDepart] = useState('');
  const[returndate, setReturndate] = useState('');
  const[flightclass, setFlightclass] = useState('');
  const[filterflight, setFilterflight] = useState([]);
  
  const handleSubmit =async(e)=>{
    e.preventDefault();
    try{
      const response = await fetch('../../flights_data.json');
      const data = await response.json();

      const results = data.filter((flight)=>{
      const matchfrom = from ? flight.from.toLowerCase() === from.toLowerCase():true;
      const matchto = to ? flight.to.toLowerCase() === to.toLowerCase():true;
      const matchDepart = depart? flight.depart_date.toLowerCase() === depart.toLowerCase():true;
      const matchReturn = returndate? flight.return_date.toLowerCase() === returndate.toLowerCase():true;
      const matchClass = flightclass? flight.flight_class.toLowerCase() === flightclass.toLowerCase():true;
      return matchfrom && matchto && matchDepart && matchReturn && matchClass;
      });
      onSearchResults(results);
      console.log('filterflight', results);
      console.log('flight data', data);
      const search_data = {
        from, 
        to,
        depart, 
        returndate,
        flightclass
      }
      console.log('input',search_data);
    }
    catch(error){
      console.error('error fetching', error);
    }
  }
  return (
    <div className='bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 max-w-2xl mx-auto'>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-gray-800 mb-2'>Search flights</h2>
          <p className='text-gray-600'>Find the best deals for your journey</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-2'>
            <label className='block text-sm font-semibold text-gray-700'>From:</label>
            <input 
              type="text" 
              placeholder="City" 
              value={from} 
              onChange={(e)=>setFrom(e.target.value)} 
              className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-700 placeholder-gray-400'
            />
          </div>

          <div className='space-y-2'>
            <label className='block text-sm font-semibold text-gray-700'>To:</label>
            <input 
              type="text" 
              placeholder="City" 
              value={to} 
              onChange={(e)=>setTo(e.target.value)} 
              className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-700 placeholder-gray-400'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-2'>
            <label className='block text-sm font-semibold text-gray-700'>Depart:</label>
            <input 
              type="date" 
              value={depart} 
              onChange={(e)=>setDepart(e.target.value)} 
              className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-700'
            />
          </div>

          <div className='space-y-2'>
            <label className='block text-sm font-semibold text-gray-700'>Return:</label>
            <input 
              type="date" 
              value={returndate} 
              onChange={(e)=>setReturndate(e.target.value)} 
              className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-700'
            />
          </div>
        </div>

        <div className='space-y-2'>
          <label className='block text-sm font-semibold text-gray-700'>Flight class:</label>
          <select 
            value={flightclass} 
            onChange={(e)=>setFlightclass(e.target.value)} 
            className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-700'
          >
            <option value="">Select class</option>
            <option value="economy">Economy</option>
            <option value="premium">Premium Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </select>
        </div>

        <button 
          type="submit" 
          className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200'
        >
          Search Flights
        </button>
      </form>
    </div>
  )
}
