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
  
  // let counter = 0;      not working because counter is not reactive and counter++also not working, 
  // should be a state to Rerender the component that only changed state and given initial value for avoinding undefined bug thats why we use typescripts not js
  const [counter,setCounter]=useState(0);
  const [counter2,setCounter2]=useState(0);
  
  const handleClick=()=>{setCounter(counter+1);console.log(counter);};
  const handleClick2=()=>{setCounter2(counter2+1);console.log(counter2);};
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
          <h3>counter: {counter}</h3>
          
          <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Click to increment
          </button>
          
          <h3>counter2: {counter2}</h3>
          <button onClick={handleClick2} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Click to increment
          </button>

        </div>


      </div>

      {showFooter && <Footer />} 
    </main>
  );
};

export default Home;