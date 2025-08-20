import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/footer';
import Results from './pages/results';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatbot from './components/chatbot';
import GeminiTest from './components/gemini'


function App() {

  return (
    <>
      <Navbar/>
      <GeminiTest/>
      <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/dashboard" element = {<Dashboard/>}/>
          <Route path = "/results" element = {<Results/>}/>
          <Route path = "/login" element = {<Login/>}/>
      </Routes>

      <Chatbot/>
    
      <Footer/>
    </>
  )
}

export default App
