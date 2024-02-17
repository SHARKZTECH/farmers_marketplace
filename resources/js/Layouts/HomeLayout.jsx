import { Link } from '@inertiajs/react';
import { FaShoppingCart } from 'react-icons/fa';
import React from 'react';

const HomeLayout = ({ auth, children }) => {
  // Placeholder data for total number of items in the cart
  const totalItemsInCart = 5; // Replace this with the actual total number of items in the cart

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="absolute top-0 right-0 p-6 text-end flex items-center">

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
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
