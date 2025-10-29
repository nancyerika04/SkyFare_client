import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/footer';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chatbot from './components/chatbot';
import ProtectedRoute from './components/protectedRoute';
import Billing from './components/billing';


function App() {

  return (
    <>
      <Navbar/>
      
      <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/dashboard" element = {<Dashboard/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/billing" element = {<Billing/>}/>
      </Routes>

      <Chatbot/>
    
      <Footer/>
    </>
  )
}

export default App