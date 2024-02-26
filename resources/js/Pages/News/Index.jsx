import HomeLayout from '@/Layouts/HomeLayout'
import { Head } from '@inertiajs/react'

const Index = ({auth}) => {
  return (
    <div>
      <Head title="Products" />
      <HomeLayout auth={auth}>

        news

      </HomeLayout>        
    </div>
  )
}

export default Index