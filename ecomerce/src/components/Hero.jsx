import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bag1 from '../assets/bag1.jpg';
import shose1 from '../assets/shose1.png';
import bag2 from '../assets/bag2.jpg';

const images = [bag1, shose1, bag2]; // List of images

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero left side */}
      <div className='w-full sm:w-1/2 flex flex-col items-start justify-center py-10 sm:py-0 bg-gradient-to-b from-gray-100 to-white p-10'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2 mb-4'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-lg md:text-2xl'>OUR BEST SELLERS</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-6xl leading-tight font-bold'>
            LATEST ARRIVALS
          </h1>
          <p className='mt-2 text-gray-600 text-base md:text-lg'>
            Discover our exclusive range of the latest fashion items designed just for you. Shop now and elevate your style with our best selections.
          </p>
          <div className='flex items-center gap-2 mt-6'>
            <button className='bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition'>
              SHOP NOW
            </button>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Hero right side with images */}
      <div className='w-full sm:w-1/2 flex flex-col items-center justify-center'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='w-full h-[500px] flex items-center justify-center' // Set fixed height
          >
            <img
              src={images[currentImage]}
              alt='Product'
              className='w-full max-w-[80%] h-full object-contain' // Contain image within its size
            />
          </motion.div>
        </AnimatePresence>

        {/* Indicator dots */}
        <div className='flex space-x-2 mt-4'>
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-gray-800' : 'bg-gray-400'}`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
