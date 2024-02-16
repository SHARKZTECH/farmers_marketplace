import React from 'react';
import { Link, Head } from '@inertiajs/react';
import HOME from "@/images/home.png"; // Assuming you have a placeholder image

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
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

                <div className='w-full mx-auto p-6 lg:p-8'>
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img className="object-cover w-full h-[500px]" src={HOME} alt="Home" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center">Welcome to Famars Marketplace</h1>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-gray-800 dark:text-gray-200">
                        <p className="text-lg">Explore a wide range of products and start buying and selling today!</p>
                    </div>
                </div>
            </div>
        </>
    );
}
