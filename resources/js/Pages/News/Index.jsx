import HomeLayout from '@/Layouts/HomeLayout'
import { Head, Link } from '@inertiajs/react'

const Index = ({auth}) => {
  return (
    <div>
      <Head title="News" />
      <HomeLayout auth={auth}>

      {/* <!-- Hero --> */}
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
                <a href="register.html"
                    class="inline-block border-2 border-white text-white py-2 px-4 rounded-xl uppercase mt-2 hover:text-black hover:border-black">Sign
                    Up to Post your News</a>
            </div>
        </div>
    </section>

    {/* <!-- Search --> */}
    <form action="/">
        <div class="relative border-2 border-gray-100 m-4 rounded-lg">
            <div class="absolute top-4 left-3">
                <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
            </div>
            <input type="text" name="search"
                class="h-14 w-full pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                placeholder="Search latest news" />
            <div class="absolute top-2 right-2">
                <button type="submit" class="h-10 w-20 text-white rounded-lg bg-green-500 hover:bg-green-600">
                    Search
                </button>
            </div>
        </div>
    </form>

   

    <div class="lg:grid lg:grid-cols-2 gap-4 space-y-4 md:space-y-0 mx-4">
      {Array.from({ length: 4 }).map((_, idx) => (
      <div className='bg-gray-50 border border-gray-200 rounded p-4'>
        <div className='flex'> 
            <img class="hidden w-48 mr-6 md:block" src="images/no-image.png" alt="" />
            <div>
                <h3 class="text-2xl">
                    <Link href={route("news.show","id")} >title</Link>
                </h3>
                <div class="text-xl font-bold mb-4">Author</div>

                <div>
                <ul class="flex">
                        <li class="flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 mr-2 text-xs">
                            <a href="/?tag={{ $tag }}">tag</a>
                        </li>
                </ul>
                </div>

                <div class="text-lg mt-4">
                    <i class="fa-solid fa-location-dot"></i>location
                </div>
            </div>
        </div>
      </div>
      ))}  
    </div>


    <footer
        class="fixed bottom-0 left-0 w-full flex items-center justify-start font-bold bg-green-600 text-white h-24 mt-24 opacity-90 md:justify-center">
        <p class="ml-2">Copyright &copy; 2024, All Rights reserved</p>

        <a href="/news/create" class="absolute top-1/3 right-10 bg-black text-white py-2 px-5">
            Post  News
        </a>
    </footer>

      </HomeLayout>        
    </div>
  )
}

export default Index