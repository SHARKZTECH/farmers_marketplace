import HomeLayout from '@/Layouts/HomeLayout'
import { Head, Link } from '@inertiajs/react'

const Show = ({auth,newsItem}) => {

    console.log(newsItem)
  return (
    <div>
      <Head title="News" />
      <HomeLayout auth={auth}>

    <div>
    <Link href="/news" class="inline-block text-black ml-4 mb-4"><i class="fa-solid fa-arrow-left"></i> Back
    </Link>
    <div class="mx-4">
        <div class="bg-gray-50 border border-gray-200 rounded p-4">
            <div class="flex flex-col items-center justify-center text-center">
                <img class="w-48 mr-6 mb-6" src="{{ asset('images/no-image.png') }}" alt="" />

                <h3 class="text-2xl mb-2">{newsItem.title}</h3>
                <div class="text-xl font-bold mb-4">{newsItem.user.name}</div>
                <div class="flex items-center justify-center bg-black text-white rounded-xl p-2 mr-2 text-xs">
                    {newsItem.demand_supply}
                </div>
                <div class="text-lg my-4">
                    <i class="fa-solid fa-location-dot"></i>{newsItem.location}
                </div>
                <div class="border border-gray-200 w-full mb-6"></div>
                <div>
                    <h3 class="text-3xl font-bold mb-4">
                         Description
                    </h3>
                    <div class="text-lg space-y-6">
                        <p>
                            {newsItem.content}
                        </p>


                        <a href={newsItem.user.email}
                            class="block bg-green-600 text-white mt-6 py-2 rounded-xl hover:opacity-80"><i
                                class="fa-solid fa-envelope"></i>
                            Contact Farmer</a>

                        {newsItem?.product_link && (
                            <Link href={newsItem.product_link} target="_blank"
                                class="block bg-black text-white py-2 rounded-xl hover:opacity-80"><i
                                    class="fa-solid fa-globe"></i>Visit Website</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>

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

export default Show