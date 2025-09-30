import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from '../AuthContext';
import { useContext } from 'react';

export default function Navbar() {
  const navigate = useNavigate();
  const {user, logout} = useContext(AuthContext);
  const handleLogout = async() =>{
    try{
      await logout();
      navigate('/login');
    }
    catch(error){
      console.error("Logout error:", error);
      alert("Logout failed: " + error.message);
    }
  };
  const handleProtectedNavigation = (e,path)=>{
    if (!user){
      e.preventDefault();
      alert("Please login first .");
    }
    else {
      
    }
  }
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white shadow-lg border-b border-blue-500">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-colors duration-300 flex items-center space-x-2">
          <span className="text-3xl">✈️</span>
          <span>SkyFare</span>
        </Link>
        <div className="flex space-x-8">
          <Link to="/" className="hover:text-blue-200 transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10" onClick={(e)=>handleProtectedNavigation(e,'/')}>
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-blue-200 transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10" onClick={(e)=>handleProtectedNavigation(e,'/')}>
            Dashboard
          </Link>
          {user ? (
            <button className="hover:text-blue-200 transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login" className="hover:text-blue-200 transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/10">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}


