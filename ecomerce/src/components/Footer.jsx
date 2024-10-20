import React from 'react';
import logo from '../assets/logo.jpg';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Example social media icons

const Footer = () => {
  return (
    <div className='bg-gray-100 py-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm'>
        {/* Logo and Description */}
        <div className='flex flex-col'>
          <img src={logo} className='mb-5 w-32' alt='Company Logo' />
          <p className='w-full md:w-2/3 text-gray-600'>
            Your company description goes here. Provide a brief overview of your mission and values.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>Useful Links</h4>
          <ul className='space-y-2'>
            <li>
              <a href='/' className='text-gray-600 hover:text-gray-900'>Home</a>
            </li>
            <li>
              <a href='/collection' className='text-gray-600 hover:text-gray-900'>Collection</a>
            </li>
            <li>
              <a href='/about' className='text-gray-600 hover:text-gray-900'>About Us</a>
            </li>
            <li>
              <a href='/contact' className='text-gray-600 hover:text-gray-900'>Contact</a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className='font-semibold text-gray-800 mb-3'>Follow Us</h4>
          <div className='flex space-x-3'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-600 hover:text-gray-900'>
              <FaFacebook size={24} />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-gray-600 hover:text-gray-900'>
              <FaInstagram size={24} />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-gray-600 hover:text-gray-900'>
              <FaTwitter size={24} />
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-gray-600 hover:text-gray-900'>
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='text-center mt-10 text-gray-500 text-sm'>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
