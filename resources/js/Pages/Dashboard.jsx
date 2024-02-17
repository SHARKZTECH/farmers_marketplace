import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

// Define Card component
const Card = ({ children }) => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg">
            {children}
        </div>
    );
};

// Define CardHeader component
const CardHeader = ({ title, action }) => {
    return (
        <div className="px-4 py-2 flex justify-between items-center border-b dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
            {action && <div>{action}</div>}
        </div>
    );
};

// Define CardBody component
const CardBody = ({ children }) => {
    return (
        <div className="p-4">{children}</div>
    );
};

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader title="Profile" />
                            <CardBody>
                                <p>Name: {auth.user.name}</p>
                                <p>Email: {auth.user.email}</p>
                                <p>Role: {auth.user.role}</p>
                                <Link href={route('profile.edit')} className="text-blue-500 hover:underline">Edit</Link>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader title="Orders" />
                            <CardBody>
                                <p>Total Orders: 10</p>
                                <p>Pending Orders: 3</p>
                                <p>Completed Orders: 7</p>
                                <Link href={route('orders.index')} className="text-blue-500 hover:underline">View All</Link>
                            </CardBody>
                        </Card>
                        {/* Add more cards for additional information */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
