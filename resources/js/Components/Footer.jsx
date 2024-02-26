import { Link } from '@inertiajs/react'
import React from 'react'

const Footer = () => {
  return (
    <footer
        class="fixed bottom-0 left-0 w-full flex items-center justify-start font-bold bg-green-600 text-white h-24 mt-24 opacity-90 md:justify-center">
        <p class="ml-2">Copyright &copy; 2024, All Rights reserved</p>

        <Link href="/news/create" class="absolute top-1/3 right-10 bg-black text-white py-2 px-5">
            Post  News
        </Link>
    </footer>
)
}

export default Footer