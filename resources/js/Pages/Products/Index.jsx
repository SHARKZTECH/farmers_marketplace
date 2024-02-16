import HomeLayout from '@/Layouts/HomeLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import HOME from "@/images/home.png"

const Index = ({ auth }) => {
  // Placeholder data for categories (you can replace this with actual categories)
  const categories = [
    "Fruits & Vegetables",
    "Dairy & Eggs",
    "Meat & Poultry",
    "Grains & Pulses",
    "Herbs & Spices"
  ];

  // Placeholder data for products 
  const products = [
    { id: 1, name: "Apple", price: "$2.99", category: "Fruits & Vegetables", image: HOME },
    { id: 2, name: "Eggs", price: "$1.99", category: "Dairy & Eggs", image: HOME },
    { id: 3, name: "Chicken Breast", price: "$5.99", category: "Meat & Poultry", image: HOME },
    { id: 3, name: "Chicken Breast", price: "$5.99", category: "Meat & Poultry", image: HOME },
    { id: 3, name: "Chicken Breast", price: "$5.99", category: "Meat & Poultry", image: HOME },
    { id: 3, name: "Chicken Breast", price: "$5.99", category: "Meat & Poultry", image: HOME },
    { id: 3, name: "Chicken Breast", price: "$5.99", category: "Meat & Poultry", image: HOME },
    { id: 3, name: "Chicken Breast", price: "$5.99", category: "Meat & Poultry", image: HOME },
    { id: 3, name: "Chicken Breast", price: "$5.99", category: "Meat & Poultry", image: HOME },
    { id: 3, name: "Chicken Breast", price: "$5.99", category: "Meat & Poultry", image: HOME },
    { id: 3, name: "Chicken Breast", price: "$5.99", category: "Meat & Poultry", image: HOME },
    { id: 3, name: "Chicken Breast", price: "$5.99", category: "Meat & Poultry", image: HOME },
    { id: 3, name: "Chicken Breast", price: "$5.99", category: "Meat & Poultry", image: HOME },
  ];

  return (
    <>
      <Head title="Products" />
      <HomeLayout auth={auth}>
        <div className="flex">
          {/* Filters section */}
          <div className="w-1/4 p-4 border-r">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            {/* Search filter */}
            <div className="mb-4">
              <input type="text" placeholder="Search" className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            {/* Category filter */}
            <div className="mb-4">
              <select className="border border-gray-300 rounded-md p-2 w-full">
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            {/* Price filter */}
            <div className="mb-4">
              <input type="range" min="0" max="100" defaultValue="0" className="w-full" />
            </div>
            {/* Clear filters button */}
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Clear Filters</button>
          </div>
          {/* Products list section */}
          <div className="w-3/4 p-4">
            <h2 className="text-lg font-semibold mb-4">All Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map(product => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                  <p className="text-gray-500">{product.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}

export default Index;