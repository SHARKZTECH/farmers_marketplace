import React, { useState } from 'react';
import HomeLayout from '@/Layouts/HomeLayout';
import { Head, Link } from '@inertiajs/react';
import HOME from "@/images/home.png";

const Index = ({ auth, products }) => {
  // Placeholder data for categories (you can replace this with actual categories)
  const categories = [
    "Fruits & Vegetables",
    "Dairy & Eggs",
    "Meat & Poultry",
    "Grains & Pulses",
    "Herbs & Spices"
  ];

  // State variables for filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState(0);

  // Function to filter products based on search query, category, and price range
  const filteredProducts = products.filter(product => {
    // Filter by search query
    const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by category
    const categoryMatch = !selectedCategory || product.category === selectedCategory;

    // Filter by price range (for demonstration purposes, assuming price is numeric)
    const priceMatch = product.price <= priceRange;

    // Return true if no filters are active or if all filters match
    return (!searchQuery || searchMatch) && (!selectedCategory || categoryMatch) && (!priceRange || priceMatch);
  });

  return (
    <>
      <Head title="Products" />
      <HomeLayout auth={auth}>
        <div className="flex h-screen overflow-y-hidden">
          {/* Filters section */}
          <div className="w-1/4 p-4 border-r  h-full">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            {/* Search filter */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            {/* Category filter */}
            <div className="mb-4">
              <select
                className="border border-gray-300 rounded-md p-2 w-full"
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            {/* Price filter */}
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange}
                onChange={e => setPriceRange(Number(e.target.value))}
                className="w-full"
              />
            </div>
            {/* Clear filters button */}
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('');
                setPriceRange(0);
              }}
            >
              Clear Filters
            </button>
          </div>

          {/* Products list section */}
          <div className="w-3/4 p-4 ml-1/4 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">All Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map(product => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                    <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{product.price}</p>
                    <p className="text-gray-500">{product.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}

export default Index;
