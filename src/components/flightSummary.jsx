import React from 'react'
import { useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import flight from '../../flights_data.json'

export default function flightSummary() {
const[summary, setSummary] = useState('');
const gemini = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);
const handleSummarize = async() => {
    try {
    const model = gemini.getGenerativeModel({model: "gemini-2.0-flash"});
    const flighttext = JSON.stringify(flight, null, 2);
    const prompt = `
    You are provided with a list of flights in JSON format:
    ${flighttext}

    Generate a concise summary highlighting only the key insights, including the total number of flights, delays, and any notable patterns. Do not display the raw data—only the summary.Don't give md format just normal text
    `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    setSummary(response.text());
    
    await fetch("http://localhost:5000/summary",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({summary:response.text()})
    }

    );}
    catch(error){
        console.error('error', error);
    }
};
return(
    <div>
      <h1 className='text-xl font-semibold text-gray-800 mb-4'>Flights summaries</h1>
      <button
        onClick={handleSummarize}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Summarize Flights
      </button>
      {summary && (
        <div className="mt-4 p-3 border rounded bg-gray-100">
          <pre className='whitespace-pre-wrap break-words'>{summary}</pre>
        </div>
      )}
    </div>
  );
}
