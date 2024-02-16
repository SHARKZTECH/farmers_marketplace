import HomeLayout from '@/Layouts/HomeLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Index = ({auth}) => {
  return (
    <>
    <Head title="Products" />
    <HomeLayout auth={auth}>
      <div>
        products
      </div>
    
    </HomeLayout>      
    </>
)
}

export default Index