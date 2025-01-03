import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto w-full"> 
      <div className="container mx-auto flex flex-col items-center sm:flex-row justify-between w-full"> 
        <div>
          <p>&copy; {new Date().getFullYear()} Company Name</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-200">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-gray-200">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-200">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className="flex justify-center mt-8">
            <Link to="/about">
                <div className=" hover:text-blue-300 text-white font-bold py-2 px-4 rounded">
                    Learn More
                </div>
            </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;