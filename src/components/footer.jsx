import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8 border-t border-gray-700">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-2xl">✈️</span>
            <span className="text-xl font-bold">SkyFare</span>
          </div>
          <p className='text-gray-300 mb-4'>
            Your trusted partner for finding the best flight deals
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a>
          </div>
          <p className='text-sm text-gray-500 mt-6'>
            &copy; 2025 SkyFare. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
