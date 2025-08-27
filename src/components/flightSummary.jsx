import React, { useEffect } from "react";
import flight from "../../flights_data.json";

export default function FlightDataSender() {
  useEffect(() => {
    const sendFlightsData = async () => {
      try {
        const res = await fetch("http://localhost:5000/flights-data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ flights: flight }), // send JSON to backend
        });

        const data = await res.json();
        console.log("Backend response:", data);
      } catch (error) {
        console.error("Error sending flights data:", error);
      }
    };

    sendFlightsData();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-semibold text-gray-800 mb-4">
        Flight Data Uploader
      </h1>
      <p>Flights data has been sent to the backend.</p>
    </div>
  );
}


