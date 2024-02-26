import { Link } from '@inertiajs/react'
import React from 'react'

const CheckoutSteps = ({step1,step2,step3}) => {
  return (
    <div class="flex justify-center mb-4" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {step1 && (
            <li>
                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Login</a>
            </li>
        )}
        {step2 ? (
            <li>
                <Link href={route("delivery.create")} class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Deliver/Payment</Link>
            </li>
        ):(
            <li>
                <a href="#" aria-disabled class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Deliver/Payment</a>
            </li>
        )}
        {step3 ? (
            <li>
                <Link href={route("orders.create")} class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">PlaceOrder</Link>
            </li>
        ):(
            <li>
                <a href="#" aria-disabled class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PlaceOrder</a>
            </li>
        )}
  
      </ul>
    </div>
      )
}

export default CheckoutSteps