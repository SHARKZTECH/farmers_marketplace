import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PayPalBtn from '@/Components/PayPalBtn';

const Show = ({ order, auth }) => {
    console.log(order)
  return (
    <>
      <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Orders #{order.id}</h2>}
      >
        <Head title={`Order #${order.id}`} />

        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Delivery Information</h3>
              <p>Full Name: {order.user.delivery?.fullName}</p>
              <p>Address: {order.user.delivery?.address}</p>
              <p>City: {order.user.delivery?.city}</p>
              <p>Country: {order.user.delivery?.country}</p>
              <p>Postal Code: {order.user.delivery?.postalCode}</p>
              <p>Phone Number: {order.user.delivery?.phoneNumber}</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 mt-4">
              <h3 className="text-xl font-semibold mb-2">Delivery Status</h3>
              <p>{order.isDelivered ? 'Delivered' : 'Pending'}</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            <h3 className="text-xl font-semibold mb-2">Order Items</h3>
            <ul>
                {order.items.map(item => (
                <li key={item.id} className="flex items-center justify-between border-b border-gray-200 py-2">
                    <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item?.product?.name} className="w-12 h-12 object-cover rounded-md" />
                    <div>
                        <p className="font-semibold">{item?.product?.name}</p>
                        <p className="text-gray-500">Quantity: {item.quantity}</p>
                        <p className="text-gray-500">Price: Ksh {item.price}</p>
                    </div>
                    </div>
                    <p className="font-semibold">Ksh {(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}</p>
                </li>
                ))}
            </ul>
            </div>                   
          </div>

          {/* Right Column */}
          <div>    

            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
              <p>{order.payment_method}</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 mt-4">
              <h3 className="text-xl font-semibold mb-2">Payment Status</h3>
              <p>{order.is_paid ? 'Paid' : 'Not Paid'}</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 mt-4">
              <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
              <p className='mb-8'>Total: Ksh {order.total_price}</p>
              {!order.is_paid && (
                <PayPalBtn amount={order.total_price} id={order.id}/>
              )}
            </div>

            <div className="mt-4 text-center">
                <Link href="/orders" className="text-blue-600 hover:underline">Back to Orders</Link>
            </div>  
          </div>   
        
        </div>

        {/* <div className="mt-4 text-center">
          <Link href="/orders" className="text-blue-600 hover:underline">Back to Orders</Link>
        </div> */}
      </AuthenticatedLayout>
    </>
  );
}

export default Show;
