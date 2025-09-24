import React from "react";

export default function FlightResult({ flights }) {
  if (
    !flights ||
    !flights.itineraries ||
    flights.itineraries.length === 0
  ) {
    return <div>No flights found.</div>;
  }

  // Helper: format date nicely
  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Helper: format duration (mins → hrs & mins)
  const formatDuration = (minutes) => {
    if (!minutes) return "N/A";
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m}m`;
  };

  // Helper: stops text
  const formatStops = (count) => {
    if (count === 0) return "Non-stop";
    if (count === 1) return "1 Stop";
    return `${count} Stops`;
  };

  return (
    <div className="space-y-4">
      {flights.itineraries.map((itinerary, index) => {
        const legId = itinerary.leg_ids?.[0];
        const leg = flights.legs.find((l) => l.id === legId);
        const price = itinerary.pricing_options?.[0]?.price?.amount || "N/A";

        // Find segment for flight number
        const segId = leg?.segment_ids?.[0];
        const segment = flights.segments.find((s) => s.id === segId);

        return (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <h3 className="font-bold text-lg">
              Flight {segment?.marketing_flight_number || "N/A"}
            </h3>
            <p>
              {leg?.origin_place_id} → {leg?.destination_place_id}
            </p>
            <p>Departure: {formatDate(leg?.departure)}</p>
            <p>Arrival: {formatDate(leg?.arrival)}</p>
            <p>Duration: {formatDuration(leg?.duration)}</p>
            <p>Stops: {formatStops(leg?.stop_count)}</p>
            <p className="font-semibold text-blue-600">
              Price: ${price}
            </p>
          </div>
        );
      })}
    </div>
  );
}