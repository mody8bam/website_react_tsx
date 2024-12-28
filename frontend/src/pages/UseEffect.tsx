
import React, { useEffect, useState } from 'react';
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
  
  const [counter,setCounter]=useState(0);
  const handleClick=()=>{
    setCounter(counter+1);
    if(counter===5)
        {setSuccess(true);}
    else
    if(counter===10)
    {setSuccess2(true);};
};

const [success,setSuccess]=useState(false);
const [success2,setSuccess2]=useState(false);

  useEffect(()=>{
    console.log('useEffect called');
  },[success,success2]);   //if we pass empty array it will only run once when component is mounted, if there parameter(s) one or many if value of it (changes) it will run again

  useEffect(()=>{console.log('## counter triggered')},[setSuccess2]); //if counter changes it will run again
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

        <div>
            <h3>counter: {counter}</h3>
            
            <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Click to increment
            </button>
        </div>
        


      </div>

      {showFooter && <Footer />} 
    </main>
  );
};

export default Home;