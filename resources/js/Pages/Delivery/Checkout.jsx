import HomeLayout from '@/Layouts/HomeLayout';
import { Head, router } from '@inertiajs/react';
import React, { useState } from 'react';

const Checkout = ({ auth }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    phoneNumber: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('paypal');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit delivery information (e.g., send to backend) and payment method
    console.log(formData);
    console.log(paymentMethod);
    // Redirect to next step in checkout process

    router.visit("/orders/create")
  };

  return (
    <>
      <Head title="Checkout - Delivery Information" />
      <HomeLayout auth={auth}>
      <div className="container mx-auto p-4 flex justify-between">

          {/* Delivery information form */}
          <div className="w-1/2 pr-4">
            <h2 className="text-2xl font-semibold mb-4">Delivery Information</h2>
            <form onSubmit={handleSubmit} className="max-w-md">
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
              <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Continue to Payment</button>
            </div>
            </form>
          </div>
        {/* Payment options */}
        <div className="w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
            <div className="bg-white shadow-md sm:rounded-lg p-4">
              {/* Payment options */}
              <div className="flex flex-col space-y-4">
                {/* PayPal */}
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={() => setPaymentMethod('paypal')}
                    className="form-radio h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm text-gray-900">PayPal</span>
                </label>
                {/* Other payment methods can be added similarly */}
              </div>
            </div>

            {/* Continue button */}
            <div className="flex justify-end mt-8">
              <button onClick={handleSubmit} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Continue to PlaceOrder</button>
            </div>
        </div>
      </div>
      </HomeLayout>
    </>
  );
}

export default Checkout;
