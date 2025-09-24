import React, { useState } from 'react';

export default function SearchForm({ onSearchResults }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [depart, setDepart] = useState('');
  const [returndate, setReturndate] = useState('');
  const [flightclass, setFlightclass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api_key = "68d44722ed89b03ebd1c0de7"; // replace with your key
      const formattedDepart = depart; // API expects YYYY-MM-DD

      // Hard-coded: 1 adult, 0 children, 0 infants, USD
      const url = `https://api.flightapi.io/onewaytrip/${api_key}/${from}/${to}/${formattedDepart}/1/0/0/${flightclass || "Economy"}/USD`;

      console.log("Requesting:", url);

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch flights");
      }
      const data = await response.json();

      // Collect all data
      const results = {
        itineraries: data.itineraries || [],
        legs: data.legs || [],
        segments: data.segments || []
      };

      console.log("API result:", results);
      onSearchResults(results);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Search flights</h2>
          <p className="text-gray-600">Find the best deals for your journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">From:</label>
            <input
              type="text"
              placeholder="IATA Code (e.g. AMS)"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">To:</label>
            <input
              type="text"
              placeholder="IATA Code (e.g. JFK)"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Depart:</label>
            <input
              type="date"
              value={depart}
              onChange={(e) => setDepart(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Return:</label>
            <input
              type="date"
              value={returndate}
              onChange={(e) => setReturndate(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Flight class:</label>
          <select
            value={flightclass}
            onChange={(e) => setFlightclass(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
          >
            <option value="Economy">Economy</option>
            <option value="Premium_Economy">Premium Economy</option>
            <option value="Business">Business</option>
            <option value="First">First Class</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl"
        >
          Search Flights
        </button>
      </form>
    </div>
  );
}


