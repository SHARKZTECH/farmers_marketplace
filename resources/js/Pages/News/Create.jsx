import HomeLayout from '@/Layouts/HomeLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import counties from '@/data/counties.json';
import Footer from '@/Components/Footer';

const Create = ({ auth }) => {
  const { data, setData, post, errors } = useForm({
    title: '',
    content: '',
    location: '',
    demand_supply: '',
    contact_information: '',
    product_link: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('news.store'), data); 
  };

  return (
    <div>
      <Head title="News" />
      <HomeLayout auth={auth}>
        <Link href="/news" class="inline-block text-black ml-4 mb-4"><i class="fa-solid fa-arrow-left"></i> Back</Link>
        <div class="mx-4 mb-24">
          <form onSubmit={handleSubmit} class="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                id="title"
                type="text"
                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.title ? 'border-red-500' : ''}`}
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                id="content"
                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.content ? 'border-red-500' : ''}`}
                value={data.content}
                onChange={(e) => setData('content', e.target.value)}
              />
              {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <select
                id="location"
                className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${errors.location ? 'border-red-500' : ''}`}
                value={data.location}
                onChange={(e) => setData('location', e.target.value)}
              >
                <option value="">Select Location</option>
                {counties.map((county, index) => (
                  <option key={index} value={county}>{county}</option>
                ))}
              </select>
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="demand_supply" className="block text-sm font-medium text-gray-700">
                Demand/Supply
              </label>
              <select
                id="demand_supply"
                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.demand_supply ? 'border-red-500' : ''}`}
                value={data.demand_supply}
                onChange={(e) => setData('demand_supply', e.target.value)}
              >
                <option value="">Select Your Option</option>
                <option value="demand">Demand</option>
                <option value="supply">Supply</option>
              </select>
              {errors.demand_supply && <p className="text-red-500 text-sm mt-1">{errors.demand_supply}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="contact_information" className="block text-sm font-medium text-gray-700">
                Contact Information
              </label>
              <input
                id="contact_information"
                type="text"
                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.contact_information ? 'border-red-500' : ''}`}
                value={data.contact_information}
                onChange={(e) => setData('contact_information', e.target.value)}
              />
              {errors.contact_information && <p className="text-red-500 text-sm mt-1">{errors.contact_information}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="product_link" className="block text-sm font-medium text-gray-700">
                Product Link
              </label>
              <input
                id="product_link"
                type="text"
                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.product_link ? 'border-red-500' : ''}`}
                value={data.product_link}
                onChange={(e) => setData('product_link', e.target.value)}
              />
              {errors.product_link && <p className="text-red-500 text-sm mt-1">{errors.product_link}</p>}
            </div>

            <button type="submit" className="bg-green-600 text-white py-2 px-5 rounded-md hover:bg-green-700">
              Post News
            </button>
          </form>
        </div>

        
       <Footer/>
      </HomeLayout>
    </div>
  );
};

export default Create;
