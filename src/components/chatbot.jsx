import React, { useState } from 'react';
import { MessageCircle } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // >>> ADDED: client-facing context (no technical details)
  const PROJECT_CONTEXT = `
You are "SkyFare Assistant", a friendly travel helper inside the SkyFare app.

What to do:
- Help users find flights, explain features, and manage price alerts.
- Offer clear tips on searching routes, setting a target price, and how alerts work.
- Explain Premium simply: exclusive deals, earlier alerts, ad-free experience.
- Summarize weekly top deals when asked.

Tone & boundaries:
- Be concise, warm, and practical.
- Avoid technical implementation details and internal processes.
- If asked for secrets or unrelated topics, politely decline and guide back to travel help.
  `;
  // <<< ADDED

  const gemini = new GoogleGenerativeAI(
    import.meta.env.VITE_GEMINI_KEY
  );

  const sendMessage = async() =>{
    if (!input.trim()){
      return;
    }
    else {
      const newMessages = [...messages, {sender:'user', text:input}];
      setMessages(newMessages);
      setInput('');
      try{
        // Select the model
        const model = gemini.getGenerativeModel({
          model: "gemini-2.0-flash",
          // >>> ADDED: pass client-facing context to the model
          systemInstruction: PROJECT_CONTEXT
          // <<< ADDED
        });

        // Ask Gemini
        const result = await model.generateContent(input);

        // Extract the text from the response
        const botReply = result.response.text();

        setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
      }
      catch(err){
        console.error('Gemini error', err);
      }
    }
  }

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setOpen(!open)} 
        style={{ background: "#4a90e2", color: "#fff", borderRadius: "50%", padding: "10px", border: "none" }}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {open && (
        <div style={{ background: "#fff", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.2)", width: "300px", marginTop: "10px", display: "flex", flexDirection: "column" }}>
          
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#4a90e2", color: "#fff" }}>
            <span>SkyFare Chatbot</span>
            <button onClick={() => setOpen(false)} style={{ background: "transparent", border: "none", color: "#fff" }}>X</button>
          </div>
          
          {/* Messages */}
          <div style={{ padding: "10px", height: "200px", overflowY: "auto" }}>
            {messages.map((msg, idx) => (
              <p 
                key={idx} 
                style={{ 
                  textAlign: msg.sender === "user" ? "right" : "left",
                  background: msg.sender === "user" ? "#d1e7ff" : "#f1f1f1",
                  padding: "5px 10px",
                  borderRadius: "10px",
                  margin: "5px 0"
                }}
              >
                {msg.text}
              </p>
            ))}
          </div>
          
          {/* Input */}
          <div style={{ display: "flex", padding: "10px", borderTop: "1px solid #ddd" }}>
            <input 
              type="text" 
              placeholder="Type a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              style={{ flex: 1, padding: "5px" }}
            />
            <button 
              onClick={sendMessage} 
              style={{ background: "#4a90e2", color: "#fff", border: "none", padding: "5px 10px" }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
