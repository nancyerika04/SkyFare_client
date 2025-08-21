import React from 'react'

export default function flightResult({flights}) {
  return (
    <div>
      {flights.length > 0 ? (
        <ul>
          {flights.map((f, i) => (
            <li key={i}>
              {f.from} → {f.to} | {f.depart_date} - {f.return_date} | {f.flight_class}
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights found.</p>
      )}
    </div>
  )
}
