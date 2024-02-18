import React, { useState } from 'react';
import { Link, Head, usePage } from '@inertiajs/react';
import HOME from "@/images/home.png"; // Placeholder image
import HomeLayout from '@/Layouts/HomeLayout';

export default function Welcome({ auth, featuredProducts }) {
    const { url } = usePage();
    const [activeCategory, setActiveCategory] = useState(null);

    const categories = [
        { id: 1, name: "Fruits & Vegetables" },
        { id: 2, name: "Dairy & Eggs" },
        { id: 3, name: "Meat & Poultry" },
        { id: 4, name: "Grains & Pulses" },
        { id: 5, name: "Herbs & Spices" },
    ];

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
    };

    const filteredProducts = activeCategory ? featuredProducts.filter(product => product.category === activeCategory.name) : featuredProducts;


   return (
        <>
            <Head title="Welcome" />
            <HomeLayout auth={auth}>
                <div className='mt-4 w-full mx-auto p-6 lg:p-8'>
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

                    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {categories.map(category => (
                            <div
                                key={category.id}
                                className={`block p-4 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition duration-300 ${activeCategory?.id === category.id ? 'bg-blue-500 text-white' : ''}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category.name}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Featured Products {activeCategory && `(${activeCategory?.name})`}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredProducts.length > 0 ? filteredProducts.map(product => (
                                <Link key={product.id} href={`/products/${product.id}`}>
                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                                        <img className="object-cover w-full h-48" src={product.image} alt={product.name} />
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{product.name}</h3>
                                        <p className="text-gray-600 dark:text-gray-300">{product.price}</p>
                                    </div>
                                </Link>
                            )): <p className='text-center'>No products Available yet!</p>}
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link
                            href={route("productslist")}
                            className="text-blue-500 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                        >
                            View All Products
                        </Link>
                    </div>
                </div>
            </HomeLayout>
        </>
    );
}
