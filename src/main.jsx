import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {AuthContextFunction} from './AuthContext' 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextFunction>
    <App />
    </AuthContextFunction>
  </BrowserRouter>,
)
