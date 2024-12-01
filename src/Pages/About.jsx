import React from 'react'
import line from "../asset/Line 5.png"
import Chick from "../asset/Rectangle 333.png"
import { Phone } from 'lucide-react'
import fifty from "../asset/fifty.png"

const About = () => {
  return (
    <div className='h-screen py-32'>

   
    <div className='mt-60 flex items-center mx-20 relative '>
      <div className='flex flex-col items-start text-start '>
        <div className='flex items-center gap-5'>
            <div>
                <img src={line}/>
            </div>
        <div>
        <h1 className="text-3xl font-bold gradient-text ">
                About US
            </h1>
        </div>    
        </div>
        <div className='w-1/2 mt-4 '>
            <h1 className='font-bold text-5xl'>Bringing Farm-Fresh Poultry to Your Table Premium Quality, Authentic African Flavors!</h1>
            <p className='text-gray-500 mt-3'>At PAPASMITH, we are dedicated to delivering the freshest, 
                locally-sourced poultry straight from the farm to your table. 
                Our commitment to quality ensures that every product is healthy, 
                delicious, and meets the highest standards of food safety. 
                As a leading online poultry store in Africa, we offer a wide range of farm-fresh chicken and poultry products tailored to meet your needs. Whether you're a home chef or a restaurant owner, we provide reliable delivery services that bring authentic African poultry flavors to your doorstep. We partner with trusted local farmers to promote sustainability and ensure that our customers receive only the best. Shop with ease on our user-friendly platform and enjoy the convenience of ordering premium poultry online.
                 Join us in savoring the taste of Africa, one farm-fresh meal at a time!</p>
        </div>
        <div className='m-11 items-center flex gap-5'>
         <button class="text-custom-brown bg-yellow-200 px-8 py-[20px]  rounded-full">
            About Us
        </button>
        <button className='text-custom-brown p-5 rounded-full bg-yellow-200'>
            <Phone/>
        </button>
        <p className='text-gray-600 font-medium  text-2xl'> +234 8192475422</p>

        </div>
       
        <div>
            
        </div>
      
      </div>
      <div className='absolute md:w-[1520px] md:h-[876px] -top-[50px]'>
        <img src={Chick} className='w-full h-full'/>
      </div>

    </div>
    <div className='relative'>
        <img src={fifty} className='absolute right-[500px] top-20'/>
      </div>
    </div>
  )
}

export default About
