import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/footer';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatbot from './components/chatbot';


function App() {

  return (
    <>
      <Navbar/>
      
      <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/dashboard" element = {<Dashboard/>}/>
          <Route path = "/login" element = {<Login/>}/>
      </Routes>

      <Chatbot/>
    
      <Footer/>
    </>
  )
}

export default App