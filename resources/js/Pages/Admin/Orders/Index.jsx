import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const Index = ({ auth, orders }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Orders</h2>}
    >
      <Head title="Orders" />

      <div className="py-6 mx-6">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Delivery Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {order?.user?.name}
                  </td>
                  <td className="px-6 py-4">
                    {order.created_at}
                  </td>
                  <td className="px-6 py-4">
                    {order.total}
                  </td>
                  <td className="px-6 py-4">
                    {order.isPaid ? 'Paid' : 'Unpaid'}
                  </td>
                  <td className="px-6 py-4">
                    {order.isDelivered ? 'Delivered' : 'Pending'}
                  </td>
                  <td className="px-6 py-4">
                    <Link href={route('orders.show', { id: order.id })} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default Index;
