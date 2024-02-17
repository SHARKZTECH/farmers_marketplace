import HomeLayout from '@/Layouts/HomeLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

const PlaceOrder = ({ auth }) => {
  // Mock data for delivery summary
  const deliverySummary = {
    fullName: 'John Doe',
    address: '123 Main St',
    city: 'Cityville',
    country: 'Countryland',
    postalCode: '12345',
    phoneNumber: '123-456-7890'
  };

  // Mock data for order items
  const orderItems = [
    { id: 1, name: "Organic Tomatoes", quantity: 2, price: "$3.99/lb", subtotal: "$7.98" },
    { id: 2, name: "Fresh Eggs (Dozen)", quantity: 1, price: "$2.49", subtotal: "$2.49" },
    { id: 3, name: "Artisanal Cheese", quantity: 3, price: "$7.99/lb", subtotal: "$23.97" },
  ];

  // Function to calculate the total price of the order
  const calculateTotalPrice = () => {
    return orderItems.reduce((total, item) => total + parseFloat(item.subtotal.replace("$", "")), 0).toFixed(2);
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
                {/* Table body with order items */}
              </table>
            </div>
          </div>
          {/* Order summary */}
          <div className="w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="bg-white shadow-md sm:rounded-lg p-4">
              {/* Delivery summary */}
              {/* Payment option information */}
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
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600">Place Order</button>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}

export default PlaceOrder;
