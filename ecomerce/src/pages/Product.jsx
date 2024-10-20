import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../contex/ShopContext';
import Titel from '../components/Titel';
import ProductItem from '../components/ProductItem'; // Assuming you have a ProductItem component
import { AiOutlineHeart } from 'react-icons/ai'; // For wishlist
import { FaShareAlt } from 'react-icons/fa'; // For share
import { BsFillStarFill } from 'react-icons/bs'; // For ratings

const Product = () => {
  const { ProductId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [inStock, setInStock] = useState(true);
  const [showDescription, setShowDescription] = useState(false); // Toggle for description
  const [relatedProducts, setRelatedProducts] = useState([]); // Related products state
  const [reviews, setReviews] = useState([]); // Reviews state
  const [showReviews, setShowReviews] = useState(false); // Toggle for reviews
  const [deliveryTime, setDeliveryTime] = useState('3-5 business days'); // Mock delivery time
  const [wishlist, setWishlist] = useState(false); // Wishlist state

  useEffect(() => {
    const selectedProduct = products.find((item) => item._id === ProductId);
    if (selectedProduct) {
      setProductData(selectedProduct);
      setMainImage(selectedProduct.image[0]);
      setSelectedSize(selectedProduct.sizes[0]);
      setRelatedProducts(products.filter(item => item.category === selectedProduct.category && item._id !== selectedProduct._id)); // Get related products
      setInStock(selectedProduct.sizes.includes(selectedSize)); // Check stock for selected size
    }
  }, [ProductId, products]);

  const handleAddToCart = () => {
    if (selectedSize && inStock) {
      addToCart(productData, selectedSize, quantity);
      alert(`${quantity} x ${productData.name} (Size: ${selectedSize}) added to cart!`);
    } else {
      alert('Please select a size or ensure the product is in stock.');
    }
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(prev + amount, 1));
  };

  const handleAddToWishlist = () => {
    setWishlist(!wishlist);
    alert(`${wishlist ? 'Removed from' : 'Added to'} your wishlist!`);
  };

  const handleShareProduct = () => {
    // Share logic, for now just an alert
    alert('Product shared!');
  };

  const handleReviewToggle = () => {
    setShowReviews(!showReviews);
  };

  return productData ? (
    <div className="pt-10 border-t-2 bg-gray-50">
      {/* Title and Description */}
      <div className="text-center py-8 text-3xl font-bold">
        <Titel text1={productData.name} text2={'Product Details'} />
        <p className="w-3/4 m-auto text-sm sm:text-base md:text-lg text-gray-600 italic">
          {productData.description}
        </p>
      </div>

      {/* Product Content */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 px-4">
        {/* Product Images */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Image Carousel */}
          <div className="flex justify-center relative group border rounded-lg shadow-lg bg-white p-4">
            <img
              src={mainImage}
              alt={productData.name}
              className="w-full max-w-lg object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute top-2 right-2 flex gap-2">
              <button onClick={handleAddToWishlist} className="text-red-500">
                <AiOutlineHeart size={24} />
              </button>
              <button onClick={handleShareProduct} className="text-blue-500">
                <FaShareAlt size={24} />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto">
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(img)}
                className={`w-16 h-16 object-cover border rounded cursor-pointer shadow-sm ${
                  mainImage === img ? 'border-black' : 'border-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-4 bg-white p-6 rounded-lg shadow-lg">
          <p className="text-2xl font-semibold">{productData.name}</p>
          <p className="text-xl font-medium text-gray-600">${productData.price}</p>

          {/* Ratings */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <BsFillStarFill key={index} className="text-yellow-500" />
            ))}
          </div>

          {/* Delivery Time */}
          <p className="text-gray-500">Estimated Delivery: {deliveryTime}</p>

          {/* Available Sizes */}
          <div className="space-y-2">
            <p className="font-medium">Available Sizes</p>
            <div className="flex gap-4 flex-wrap">
              {productData.sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition ${
                    selectedSize === size ? 'bg-gray-800 text-white' : ''
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <p className="font-medium">Quantity:</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="border border-gray-400 px-2 py-1 text-lg hover:bg-gray-200 transition rounded"
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                onClick={() => handleQuantityChange(1)}
                className="border border-gray-400 px-2 py-1 text-lg hover:bg-gray-200 transition rounded"
              >
                +
              </button>
            </div>
          </div>

          {/* Total Price Display */}
          <div className="text-xl font-semibold text-gray-800">
            Total: ${(productData.price * quantity).toFixed(2)}
          </div>

          {/* Stock Information */}
          {inStock ? (
            <p className="text-green-600">In Stock</p>
          ) : (
            <p className="text-red-600">Out of Stock</p>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>

          {/* Description Toggle */}
          <div className="flex justify-between items-center mt-4">
            <p className="font-medium cursor-pointer" onClick={() => setShowDescription(!showDescription)}>
              {showDescription ? 'Hide Description' : 'Show Description'}
            </p>
          </div>
          {showDescription && (
            <div className="mt-2 text-gray-700">{productData.longDescription}</div>
          )}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">User Reviews</h3>
        <button onClick={handleReviewToggle} className="text-blue-500 mb-2">
          {showReviews ? 'Hide Reviews' : 'Show Reviews'}
        </button>
        {showReviews && (
          <div className="mt-2 text-gray-700">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="border-b py-2">
                  <p className="font-semibold">{review.user}</p>
                  <p>{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        )}
      </div>

      {/* Related Products Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {relatedProducts.map((related) => (
            <ProductItem
              key={related._id}
              id={related._id}
              image={related.image}
              price={related.price}
              name={related.name}
            />
          ))}
        </div>
      </div>

      {/* Recently Viewed Products Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Recently Viewed</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {/* Mock data for recently viewed products */}
          {relatedProducts.slice(0, 4).map((recentlyViewed) => (
            <ProductItem
              key={recentlyViewed._id}
              id={recentlyViewed._id}
              image={recentlyViewed.image}
              price={recentlyViewed.price}
              name={recentlyViewed.name}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center py-16">Loading...</div>
  );
};

export default Product;
