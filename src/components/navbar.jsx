import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-300 text-black">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          SkyFare
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/results" className="hover:text-gray-200">
            Results
          </Link>
          <Link to="/dashboard" className="hover:text-gray-200">
            Dashboard
          </Link>
          <Link to="/login" className="hover:text-gray-200">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}


