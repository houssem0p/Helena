import React, { useContext, useState } from 'react';
import { ShopContext } from '../contex/ShopContext';
import Titel from '../components/Titel';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  // Function to handle filter change
  const handleFilterChange = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category); // Remove the category if already selected
      } else {
        return [...prev, category]; // Add the new category
      }
    });
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term
  };

  // Filter products based on selected categories and search term
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategories.length > 0
      ? selectedCategories.includes(product.category)
      : true; // If no category is selected, include all products

    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase()); // Search term match

    return matchesCategory && matchesSearchTerm; // Return true if both category and search term match
  });

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filters options */}
      <div className='min-w-60'>
        <p
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={() => setShowFilter(!showFilter)} // Toggle filter visibility
        >
          FILTERS
        </p>
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input 
                className='w-3' 
                type='checkbox' 
                value={'Men'} 
                onChange={() => handleFilterChange('Men')} 
                checked={selectedCategories.includes('Men')} 
              /> Men
            </p>
            <p className='flex gap-2'>
              <input 
                className='w-3' 
                type='checkbox' 
                value={'Kids'} 
                onChange={() => handleFilterChange('Kids')} 
                checked={selectedCategories.includes('Kids')} 
              /> Kid
            </p>
            <p className='flex gap-2'>
              <input 
                className='w-3' 
                type='checkbox' 
                value={'Women'} 
                onChange={() => handleFilterChange('Women')} 
                checked={selectedCategories.includes('Women')} 
              /> Women
            </p>
          </div>
        </div>
      </div>

      {/* Products List */}
      <div className='flex-1'>
        <div className='text-center py-8 text-3xl'>
          <Titel text1={'ALL'} text2={' COLLECTIONS'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Luxury brands between your hands lady
          </p>
        </div>

        {/* Search Input */}
        <div className='text-center mb-4'>
          <input
            type='text'
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder='Search products...'
            className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500'
          />
        </div>

        {/* Rendering filtered products with grid layout */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filteredProducts.map((product) => (
            <ProductItem 
              key={product._id} 
              id={product._id} 
              image={product.image} 
              price={product.price} 
              name={product.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
