import HomeLayout from '@/Layouts/HomeLayout';
import { Head, router, usePage, useRemember } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

const PlaceOrder = ({ auth }) => {
  const { errors } = usePage().props;  
  const [cart, setCart] = useState([]);
  
  // Function to calculate the total price of the items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (parseFloat(item.price.replace("$", "")) * item.quantity), 0).toFixed(2);
  };

  const totalPrice=calculateTotalPrice();
  
  // Retrieve cart data from local storage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);


  const placeOrder = () => {
    // Extract the relevant data from the cart items
    const orderItems = cart.map(item => ({
      product_id: item.id,
      quantity: item.quantity,
      price: item.price,
      image: item.image,
    }));

    // Construct the order object
    const orderData = {
      user_id: auth.user.id, // Assuming auth object contains user information
      status: 'pending', // Set the initial status as pending
      payment_method: 'paypal', // Assuming PayPal is the default payment method
      tax_price: 0, // You may need to calculate tax based on your requirements
      shipping_price: 0, // You may need to calculate shipping price based on your requirements
      is_paid: false, // Initially, the order is not paid
      is_delivered: false, // Initially, the order is not delivered
      delivered_at: null, // Initially, delivery date is null
      total_price: totalPrice, // Include the total price of the order
      orderItems: orderItems, // Include the order items
    };


    // Send a POST request to your backend API to store the order using Inertia.post
    router.post('/orders', orderData, {
      onSuccess: () => {
        // Order successfully placed, navigate to confirmation page
        // router.visit('/orders/confirmation');
      },
      onError: (errors) => {
        // Handle any errors returned by the backend
        console.error(errors);
      }
    });
  };

  return (
    <>
      <Head title="Place Order" />
      <HomeLayout auth={auth}>
        <div className="container mx-auto p-4 flex justify-between">
          {/* Order items */}
          <div className="w-2/3 pr-4">
            <h2 className="text-2xl font-semibold mb-4">Order Items</h2>
            <div className="bg-white shadow-md sm:rounded-lg p-4">
              {/* Table for order items */}
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {/* Table header */}
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
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.map(item => (
                    <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4">
                        <img src={item.image} className="w-16 md:w-32 max-w-[50px] max-h-[100px]" alt={item.name} />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                        <input 
                          type="number" 
                          id={`quantity_${item.id}`} 
                          className={`bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${item.quantity === 0 ? 'cursor-not-allowed' : ''}`} 
                          placeholder="1" 
                          value={item.quantity} 
                          disabled 
                        />           
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.price}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        ${parseFloat(item.price.replace("$", "")) * item.quantity}
                      </td>
                    </tr>
                  ))}
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
                <span>${calculateTotalPrice()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <hr className="border-gray-200 my-2" />
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>${calculateTotalPrice()}</span>
              </div>
              <button onClick={placeOrder} className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600">Place Order</button>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}

export default PlaceOrder;
