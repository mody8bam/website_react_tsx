import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Description from '../components/Description';
import Footer from '../components/Footer';
import Image from '../components/Image'; // Import Image component

// Import images directly
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg'; 

'use client';
function Home(){
  const showDescription = true;
  const showFooter = true;
  
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      <Header />

      <div className="container mx-auto p-4"> 
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Our Website</h1>
        <p className="text-lg mb-6 text-center">
          Explore our products and services.
        </p>

        {showDescription && (
          <Description 
            text="This is a brief description of our company and what we offer." 
            subtext="Optional subtext for more details." 
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <Image src={product1} alt="Product 1" /> 
          <Image src={product2} alt="Product 2" /> 
          <Image src={product3} alt="Product 3" /> 
        </div>

        <div className='mt-8'>
          <ul className=' flex flex-col items-center justify-center  bg-gray-100'>
            <li className='text-2xl font-bold mb-4 hover:text-blue-300'><Link to='./UseState'>use state page</Link></li>
            <li className='text-2xl font-bold mb-4 hover:text-blue-300'><Link to='./UseEffect'>use effect page</Link></li>
            <li className='text-2xl font-bold mb-4 hover:text-blue-300'><Link to='./UseRef'>use ref page</Link></li>
            <li className='text-2xl font-bold mb-4 hover:text-blue-300'><Link to='./UseMemo'>use memo page</Link></li>
          </ul>
          

        </div>

        next  all hooks and redux,usecontext for statemanagment for avoiding prop drilling
      </div>

      {showFooter && <Footer />} 
    </main>
  );
};

export default Home;