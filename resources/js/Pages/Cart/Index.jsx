import HomeLayout from '@/Layouts/HomeLayout';
import { Head, Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import FARMERS_MARKET from "@/images/home.png";
import { IoMdArrowRoundBack } from "react-icons/io";

const Index = ({ auth }) => {
  const [cart, setCart] = useState([]);

  // Function to calculate the total price of the items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (parseFloat(item.price.replace("$", "")) * item.quantity), 0).toFixed(2);
  };

  // Function to handle decreasing the quantity of an item
  const decreaseQuantity = (itemId) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Function to handle increasing the quantity of an item
  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Function to handle removing an item from the cart
  const removeItem = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  useEffect(() => {
    // Retrieve cart data from local storage on component mount
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Save cart data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  return (
    <>
      <Head title="Farmer's Marketplace" />
      <HomeLayout auth={auth}>
        <div className="container  mx-auto text-lg font-semibold mb-4">
          <Link className='flex items-center' href={route("productslist")}>
          <IoMdArrowRoundBack size={25} /> Continue Shopping
          </Link>
        </div>
        <div className="container mx-auto p-4 flex justify-between">
          {/* Marketplace items */}
          <div className="w-2/3 pr-4">
            <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-16 py-3">
                      <span className="sr-only">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Qty
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length > 0 ? cart?.map(item => (
                    <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4">
                        <img src={item.image} className="w-16 md:w-32 max-w-[50px] max-h-[100px]" alt={item.name} />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <button onClick={()=>decreaseQuantity(item.id)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Decrease Quantity</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                            </svg>
                          </button>
                          <div>
                            <input type="number" id={`quantity_${item.id}`} className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" value={item.quantity} />
                          </div>
                          <button onClick={()=>increaseQuantity(item.id)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Increase Quantity</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.price}
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={()=>removeItem(item.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                      </td>
                    </tr>
                  )): <p className='text-center py-2'>No Items Yet!</p>}
                </tbody>
              </table>
            </div>
            </div>
            {/* Order summary */}
            <div className="w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="bg-white shadow-md sm:rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>Ksh {calculateTotalPrice()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <hr className="border-gray-200 my-2" />
              <div className="flex justify-between font-semibold mb-4">
                <span>Total:</span>
                <span>Ksh {calculateTotalPrice()}</span>
              </div>
              <Link disabled={cart.length <= 0} 
               href={route("delivery.create")} 
               className={`bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 ${cart.length <= 0 && 'opacity-50 cursor-not-allowed'}`}
               >Checkout</Link>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}

export default Index;
