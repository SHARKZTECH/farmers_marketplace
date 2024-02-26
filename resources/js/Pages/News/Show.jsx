import HomeLayout from '@/Layouts/HomeLayout'
import { Head } from '@inertiajs/react'

const Show = ({auth}) => {
  return (
    <div>
      <Head title="News" />
      <HomeLayout auth={auth}>

    <div>
    <a href="/" class="inline-block text-black ml-4 mb-4"><i class="fa-solid fa-arrow-left"></i> Back
    </a>
    <div class="mx-4">
        <div class="bg-gray-50 border border-gray-200 rounded p-4">
            <div class="flex flex-col items-center justify-center text-center">
                <img class="w-48 mr-6 mb-6" src="{{ asset('images/no-image.png') }}" alt="" />

                <h3 class="text-2xl mb-2">title</h3>
                <div class="text-xl font-bold mb-4">company</div>
                <div class="text-lg my-4">
                    <i class="fa-solid fa-location-dot"></i>company
                </div>
                <div class="border border-gray-200 w-full mb-6"></div>
                <div>
                    <h3 class="text-3xl font-bold mb-4">
                         Description
                    </h3>
                    <div class="text-lg space-y-6">
                        <p>
                            discr
                        </p>


                        <a href="{{ $listing->email }}"
                            class="block bg-green-600 text-white mt-6 py-2 rounded-xl hover:opacity-80"><i
                                class="fa-solid fa-envelope"></i>
                            Contact Farmer</a>

                        <a href="#" target="_blank"
                            class="block bg-black text-white py-2 rounded-xl hover:opacity-80"><i
                                class="fa-solid fa-globe"></i>Visit Website</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>


    <footer
        class="fixed bottom-0 left-0 w-full flex items-center justify-start font-bold bg-green-600 text-white h-24 mt-24 opacity-90 md:justify-center">
        <p class="ml-2">Copyright &copy; 2024, All Rights reserved</p>

        <a href="/listings/create" class="absolute top-1/3 right-10 bg-black text-white py-2 px-5">
            Post  News
        </a>
    </footer>

      </HomeLayout>        
    </div>
  )
}

export default Show