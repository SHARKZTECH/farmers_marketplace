import { useState } from 'react';
import Footer from '@/Components/Footer';
import HomeLayout from '@/Layouts/HomeLayout';
import { Head, Link } from '@inertiajs/react';

const Index = ({ auth, news }) => {
  // State variables for search query and search results
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search query
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Implement search logic here (e.g., filter news based on searchQuery)
    const results = news.filter((n) =>
      n.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <Head title="News" />
      <HomeLayout auth={auth}>
        {/* Hero section */}
        <section class="relative h-72 bg-green-600 flex flex-col justify-center align-center text-center space-y-4 mb-4">
        <div class="absolute top-0 left-0 w-full h-full opacity-10 bg-no-repeat bg-center"
        style={{backgroundImage: ""}}>
        </div>

        <div class="z-10">
            <h1 class="text-6xl font-bold uppercase text-white">
                Farmers<span class="text-black">Markertplace</span>
            </h1>
            <p class="text-2xl text-gray-200 font-bold my-4">
                Find or post Latest news above farm products
            </p>
            <div>
                {!auth.user && (
                <Link href="/news/create"
                    class="inline-block border-2 border-white text-white py-2 px-4 rounded-xl uppercase mt-2 hover:text-black hover:border-black">Sign
                    Up to Post your News</Link>
                )}
            </div>
        </div>
        </section>

        {/* Search form */}
        <form className="relative border-2 border-gray-100 m-4 rounded-lg">
          <div className="absolute top-4 left-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
          </div>
          <input
            type="text"
            name="search"
            value={searchQuery}
            onChange={handleSearch}
            className="h-14 w-full pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Search latest news"
          />
          {/* <div className="absolute top-2 right-2">
            <button type="submit" className="h-10 w-20 text-white rounded-lg bg-green-500 hover:bg-green-600">
              Search
            </button>
          </div> */}
        </form>

        {/* Render search results if available, otherwise render all news */}
        <div className="lg:grid lg:grid-cols-2 gap-4 space-y-4 md:space-y-0 mx-4 mb-32">
          {(searchResults.length > 0 ? searchResults : news).map((n) => (
            <div className="bg-gray-50 border border-gray-200 rounded p-4" key={n.id}>
              {/* Render news items */}
              <div className='flex'> 
                <img className="hidden w-48 mr-6 md:block" src="images/no-image.png" alt="" />
                <div>
                  <h3 className="text-2xl">
                    <Link href={route("news.show", n.id)}>{n.title}</Link>
                  </h3>
                  <div className="text-xl font-bold mb-4">{n.user.name}</div>
                  <div className="flex items-center justify-center bg-black text-white rounded-xl p-2 mr-2 text-xs">
                    {n.demand_supply}
                  </div>
                  <div className="text-lg mt-4">
                    <i className="fa-solid fa-location-dot"></i>{n.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </HomeLayout>
    </div>
  );
};

export default Index;
