import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MinusIcon, Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className="bg-blue-500 text-white sticky top-0 z-50 ">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          My App
        </Link>
        <button 
          className="text-white focus:outline-none md:hidden" 
          onClick={() => setIsOpen(!isOpen)} 
        >
          {isOpen ? <MinusIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-100">Home</Link>
          <Link to="/about" className="hover:text-gray-100">About</Link>
          <Link to="/contact" className="hover:text-gray-100">Contact</Link>
        </nav>
      </div>
      {isOpen && (
        <div className="bg-blue-500 p-4 mt-2 md:hidden"> 
          <Link to="/" className="block py-2 hover:bg-blue-700">Home</Link>
          <Link to="/about" className="block py-2 hover:bg-blue-700">About</Link>
          <Link to="/contact" className="block py-2 hover:bg-blue-700">Contact</Link>
        </div>
        
      )}
    </header>
    
    </>
    
  );
};

export default Header;