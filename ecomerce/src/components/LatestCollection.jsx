import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../contex/ShopContext';
import Titel from './Titel';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10)); // Adjust the slice as necessary
  }, [products]);

  // Function to handle quick view
  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Titel text1={'LATEST '} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Luxury brands between your hands lady
        </p>
      </div>
      
      {/* Rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 gap-y-6'>
        {latestProducts.map((item, index) => (
          <div key={index} className='relative group transition-transform duration-300 hover:scale-105'>
            <ProductItem 
              id={item._id} 
              image={item.image} 
              price={item.price} 
              name={item.name}
            />
            <button 
              onClick={() => handleQuickView(item)} 
              className='absolute top-2 right-2 bg-white text-gray-700 py-1 px-3 rounded-md shadow-md hover:bg-gray-100 transition duration-200 group-hover:scale-110'
            >
              Quick View
            </button>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className='text-center mt-8'>
        <button className='bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-200'>
          View All Collections
        </button>
      </div>

      {/* Modal for Quick View */}
      {isModalOpen && selectedProduct && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white rounded-lg shadow-lg p-5 max-w-md w-full'>
            <h2 className='text-xl font-semibold mb-2'>{selectedProduct.name}</h2>
            <img src={selectedProduct.image[0]} alt={selectedProduct.name} className='w-full h-40 object-cover mb-4' />
            <p className='text-gray-700 mb-4'>{selectedProduct.description}</p>
            <p className='text-lg font-bold mb-4'>Price: ${selectedProduct.price}</p>
            <button onClick={closeModal} className='bg-[#c41cb1] text-white py-2 px-4 rounded-md hover:bg-[#b31a8f] transition duration-200'>
              Close
            </button>
          </div>
        </div>
      )}
      
      {/* Additional Features Section */}
      <div className='my-10'>
        <h3 className='text-2xl text-center font-semibold mb-4'>Why Choose Us?</h3>
        <div className='flex flex-col sm:flex-row justify-around'>
          <div className='bg-white p-5 shadow-md rounded-md text-center flex-1 mx-2'>
            <h4 className='font-semibold text-lg'>Free Shipping</h4>
            <p className='text-gray-600'>On all orders over $50</p>
          </div>
          <div className='bg-white p-5 shadow-md rounded-md text-center flex-1 mx-2'>
            <h4 className='font-semibold text-lg'>24/7 Customer Support</h4>
            <p className='text-gray-600'>We are here to help you</p>
          </div>
          <div className='bg-white p-5 shadow-md rounded-md text-center flex-1 mx-2'>
            <h4 className='font-semibold text-lg'>30-Day Returns</h4>
            <p className='text-gray-600'>Easy returns on all products</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestCollection;
