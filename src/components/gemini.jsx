import { useEffect } from "react";

export default function GeminiTest() {
  useEffect(() => {
    const fetchGemini = async () => {
      try {
        const response = await fetch(
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-goog-api-key": import.meta.env.VITE_GEMINI_KEY, // your env key
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: "Explain how AI works in a few words",
                    },
                  ],
                },
              ],
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to connect: " + response.status);
        }

        const data = await response.json();
        console.log("successful ✅", data);
      } catch (error) {
        console.error("Error ❌", error);
      }
    };

    fetchGemini();
  }, []);

  return <div>Testing Gemini API connection... check console 🚀</div>;
}
