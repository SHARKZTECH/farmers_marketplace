import HomeLayout from '@/Layouts/HomeLayout'
import { Head,Link,useForm } from '@inertiajs/react'

const Create = ({auth}) => {
  return (
    <div>
      <Head title="News" />
      <HomeLayout auth={auth}>


     <Link href="/news" class="inline-block text-black ml-4 mb-4"><i class="fa-solid fa-arrow-left"></i> Back
    </Link>   
    <div class="mx-4">
        <div class="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
            name



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

export default Create