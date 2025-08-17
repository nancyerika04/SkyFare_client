import React from 'react'
import { useState } from 'react'
import { MessageCircle } from "lucide-react";

export default function chatbot() {
const[open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={()=>setOpen(!open)}></button>

      {open && (
        <div> 
            <div>
                <span>SkyFare Chatbot</span>
                <button onClick={()=>setOpen(false)}> X </button>
            </div>
            <div>
                <p>I am your chatbot</p>
            </div>
            <div>
                <input type="text" placeholder='Type a message'/>
                <button> Send </button>
            </div>
        </div>
      )

      }
    </div>
  )
}
