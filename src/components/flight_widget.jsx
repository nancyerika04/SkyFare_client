import { useEffect, useRef } from "react";

export default function Flight_widget() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://tpwidg.com/content?trs=461919&shmarker=675231&locale=en_us&Checkbox_9=false&powered_by=true&primary=%230C131D&dark=%230C131D&light=%23FFFFFF&secondary=%23F1EDFC&promo_id=7293&campaign_id=200";
    script.async = true;
    script.charset = "utf-8";

    // Append script to the container instead of <body>
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""; // clean up
      }
    };
  }, []);

  return (
    <div>
      <h1>Travel Widget</h1>
      <div ref={containerRef}></div>
    </div>
  );
}
