import { Link } from '@inertiajs/react';
import { FaShoppingCart } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

const HomeLayout = ({ auth, children }) => {
   // State to store the total number of items in the cart
   const [totalItemsInCart, setTotalItemsInCart] = useState(0);

   // Function to get the cart count from localStorage
   const getCartCount = () => {
     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
     return cartItems.reduce((total, item) => total + item.quantity, 0);
   };
 
   // Effect to update the cart count when the component mounts
   useEffect(() => {
     // Function to handle changes in localStorage
     const handleStorageChange = () => {
       const count = getCartCount();
       setTotalItemsInCart(count);
     }; 
     // Add event listener for storage changes
     window.addEventListener('storage', handleStorageChange); 
     // Get initial cart count
     const count = getCartCount();
     setTotalItemsInCart(count); 
     // Clean up event listener
     return () => {
       window.removeEventListener('storage', handleStorageChange);
     };
   }, []);


  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">

        <Link href='/' className="text-2xl font-semibold ml-2 mt-2">Farmer's Marketplace</Link>

      <div className="absolute top-0 right-0 p-6 text-end flex items-center">

      <Link
          href={route('news.index')}
          className="mr-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
        >
          News
        </Link>

        {/* Cart icon with link to cart page */}
        <Link href={route("cart.index")} className="relative text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500">
          {/* Total number of items in the cart */}
          <span className="absolute -top-2 text-sm">{totalItemsInCart}</span>
          <FaShoppingCart className="h-6 w-6 mr-2" />
        </Link>

        {/* Navigation links */}
        {auth.user ? (
          <Link
            href={route('dashboard')}
            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 ml-4"
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link
              href={route('login')}
              className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 ml-4"
            >
              Log in
            </Link>

            <Link
              href={route('register')}
              className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
              Register
            </Link>
          </>
        )}
      </div>
      <main className='mt-16'>{children}</main>
    </div>
  );
};

export default HomeLayout;
