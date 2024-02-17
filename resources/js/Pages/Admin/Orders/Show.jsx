import { Head, Link } from '@inertiajs/react';
import React from 'react';

const Show = ({ order }) => {

    console.log(order)
  return (
    <>
      <Head title={`Order #${order.id}`} />

      {/* Order Details */}
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Order #{order.id}</h2>

        {/* Order Info */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Order Information</h3>
          <p>User: {order.user.name}</p>
          <p>Date: {order.created_at}</p>
          <p>Total: ${order.total_price}</p>
          <p>Payment Status: {order.isPaid ? 'Paid' : 'Pending'}</p>
          <p>Delivery Status: {order.isDelivered ? 'Delivered' : 'Pending'}</p>
        </div>

        {/* Order Items */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Order Items</h3>
          <ul>
            {order?.items?.map(item => (
              <li key={item.id}>
                {item?.product?.name} - Quantity: {item.quantity} - Price: ${item.price}
              </li>
            ))}
          </ul>
        </div>

        {/* Delivery Information */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Delivery Information</h3>
          <p>Full Name: {order.user.delivery.fullName}</p>
          <p>Address: {order.user.delivery.address}</p>
          <p>City: {order.user.delivery.city}</p>
          <p>Country: {order.user.delivery.country}</p>
          <p>Postal Code: {order.user.delivery.postalCode}</p>
          <p>Phone Number: {order.user.delivery.phoneNumber}</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4">
          <Link href="/orders" className="text-blue-600 hover:underline">Back to Orders</Link>
        </div>
      </div>
    </>
  );
}

export default Show;
