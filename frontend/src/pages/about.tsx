import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Header />

      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <p className="text-lg mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <Footer />
    </main>
  );
};

export default About;