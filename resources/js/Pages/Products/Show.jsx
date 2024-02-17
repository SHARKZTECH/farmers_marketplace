import HomeLayout from '@/Layouts/HomeLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import HOME from "@/images/home.png";

const Show = ({ auth }) => {
  // Placeholder data for product details
  const product = {
    id: 1,
    name: "Apple",
    price: "$2.99",
    category: "Fruits & Vegetables",
    image: HOME,
    description: "Fresh and juicy apples",
    // Add more product details as needed
  };

  // State for quantity selection
  const [quantity, setQuantity] = useState(1);

  // Function to handle quantity change
  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  // Function to add product to cart
  const addToCart = () => {
    // Implement add to cart functionality here
    alert(`Added ${quantity} ${product.name}(s) to cart`);
  };

  // Placeholder data for reviews
  const reviews = [
    { id: 1, user: "John Doe", rating: 4, comment: "Great product!" },
    { id: 2, user: "Jane Smith", rating: 5, comment: "Best apples I've ever tasted!" },
    // Add more reviews as needed
  ];

  return (
    <>
      <Head title="Product Details" />
      <HomeLayout auth={auth}>
        <div className="container mx-auto p-4 mt-12">
          <div className="max-w-screen mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="flex">
              {/* Product image */}
              <img src={product.image} alt={product.name} className="w-1/3 h-auto" />
              {/* Product details */}
              <div className="flex flex-col justify-center pl-48 p-4 w-2/3">
                <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-gray-700 mb-2">Category: {product.category}</p>
                <p className="text-gray-700 mb-4">Price: {product.price}</p>
                {/* Quantity selection */}
                <div className="flex items-center mb-4">
                  <label htmlFor="quantity" className="mr-2">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="border border-gray-300 rounded-md p-2 w-16"
                  />
                </div>
                {/* Add to cart button */}
                <button onClick={addToCart} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>
          {/* Reviews section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Product Reviews</h3>
            {reviews.map(review => (
              <div key={review.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-gray-600">{review.user}</span>
                  <div className="ml-2 flex">
                    {[...Array(review.rating)].map((_, index) => (
                      <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3.066l2.598 5.478 5.77.666-4.17 4.09.986 5.755L10 14.933l-5.184 2.122.987-5.755-4.17-4.09 5.77-.666L10 3.066z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </HomeLayout>
    </>
  );
}

export default Show;
