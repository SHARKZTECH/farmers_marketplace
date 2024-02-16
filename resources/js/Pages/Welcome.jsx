import React from 'react';
import { Link, Head } from '@inertiajs/react';
import HOME from "@/images/home.png"; // Placeholder image

export default function Welcome({ auth }) {
    // Major categories for Famars Marketplace
    const categories = [
        { id: 1, name: "Fruits & Vegetables" },
        { id: 2, name: "Dairy & Eggs" },
        { id: 3, name: "Meat & Poultry" },
        { id: 4, name: "Grains & Pulses" },
        { id: 5, name: "Herbs & Spices" },
        // Add more categories as needed
    ];

    // Placeholder for featured products 
    const featuredProducts = [
        { id: 1, name: "Apple", price: "$2.99", image: HOME },
        { id: 2, name: "Eggs", price: "$1.99", image: HOME },
        { id: 3, name: "Chicken Breast", price: "$5.99", image: HOME },
        { id: 3, name: "Chicken Breast", price: "$5.99", image: HOME },
    ];

    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="absolute top-0 right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className='mt-12 w-full mx-auto p-6 lg:p-8'>
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img className="object-cover w-full h-[500px]" src={HOME} alt="Home" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center">Welcome to Famars Marketplace</h1>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-gray-800 dark:text-gray-200">
                        <p className="text-lg">Explore a wide range of farm-fresh products and start buying and selling today!</p>
                    </div>

                    {/* Categories section */}
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {categories.map(category => (
                            <Link
                                key={category.id}
                                href={`/category/${category.id}`}
                                className="block p-4 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition duration-300"
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>

                    {/* Featured products section */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Featured Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {featuredProducts.map(product => (
                                <div key={product.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                                    <img className="object-cover w-full h-48" src={product.image} alt={product.name} />
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{product.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{product.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Link to view all products */}
                    <div className="mt-8 text-center">
                        <Link
                            href={route("products.index")}
                            className="text-blue-500 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                        >
                            View All Products
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
