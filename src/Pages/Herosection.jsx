import React from 'react'
import Navbar from '../Component/Navbar'
import profile_pic from "../asset/pfofilepic.png"
import rectangle from "../asset/Rectangle 334.png"
import Chicken from "../asset/Chicken.png"
import pigs from "../asset/Vector 155.png"
import { Play } from 'lucide-react'
import About from './About'

const Herosection = () => {
  return (
    <div className='h-screen'>
      <div className='mx-20 py-10 flex ' >
        <div className='flex flex-col'>
         <div className='flex items-center gap-10'>
         <img src={rectangle}/>
            <div className='flex gap-3'>
                <img src={profile_pic} />
                <div className='flex flex-col'>
                  <h1 className='font-bold '>20.1 M</h1>
                  <p className='text-gray-500'>Farmers Insured</p>
                </div>
            </div>
            </div>
        <div className="md:w-1/2 z-10 py-8">
        <h1 className="text-5xl font-bold">
          Discover the goodness of fresh, locally-sourced poultry. Your dependable online marketplace.
        </h1>
        <p className="text-lg text-gray-600 mt-5">
        Explore our wide selection of fresh poultry sourced directly from local farms, ensuring quality and taste in every bite.
         With convenient online ordering and doorstep delivery, enjoying farm-fresh chicken has never been easier.
        </p>
      </div>

         </div>

      </div>
    <div className="absolute  md:w-[1520px] md:h-[876px] mx-20 top-8 pt-20">
    <img 
    src={Chicken}
    alt="Hero Section Image" 
    className="w-full h-full "
  />
  <div className='absolute left-[680px] px-20 -bottom-[70px]' >
    <img src={pigs} />
    </div>
    <div className='absolute left-[770px] -bottom-[80px] '>
        <button className='bg-yellow-400 p-6 rounded-full text-white '>
            <Play className='fill-white'/>
        </button>
    </div>
  </div>

 
    </div>
  )
}

export default Herosection