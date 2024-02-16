import { Link } from '@inertiajs/react'
import React from 'react'

const HomeLayout = ({auth,children}) => {
  return (
    <div className="relative flex flex-col  min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="absolute top-0 right-0 p-6 text-end">
            {auth.user ? (
                <Link
                    href={route('dashboard')}
                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link
                        href={route('login')}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Log in
                    </Link>

                    <Link
                        href={route('register')}
                        className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Register
                    </Link>
                </>
            )}
        </div>     
        <main>{children}</main>
    </div>
  )
}

export default HomeLayout