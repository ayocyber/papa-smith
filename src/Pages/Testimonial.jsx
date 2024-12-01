import React from 'react'
import line from "../asset/Line 5.png"
import left from "../asset/left.png"
import right from "../asset/right.png"
import layout from "../asset/Rectangle 338.png"
import { Star } from 'lucide-react'
import avatar from "../asset/Avatar.png"
import button from "../asset/Button.png"
const Testimonial = () => {
  return (
    <div className='mx-20 py-20'>
        <div className='flex items-center gap-5'>
            <div>
                <img src={line}/>
            </div>
        <div>
        <h1 className="text-3xl font-bold gradient-text ">
                Testimonial
            </h1>
        </div>    
        </div>
        <div className='flex justify-between items-center py-20'>
            <div className='w-[300px]'>
                <h1 className='text-3xl font-bold'>What our client Have to say</h1>
            </div>
            <div className='flex gap-4'>
                <img src={left}/>
                <img src={right}/>
            </div>
        </div>
        <div className='flex  justify-between'>
            <div className='relative'>
                <img src={layout}/>
                <div className='flex gap-2 absolute top-4 mx-5 my-5'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
                <div className='w-[370px] absolute top-20 font-light text-sm mx-5'>
                <p className='text-sm font-thin text-gray-600'>“At PAPASMITH, we are dedicated to delivering the freshest,
                     locally-sourced poultry straight from the farm to your table. 
                     Our commitment to quality ensures that every product is healthy, delicious,
                      and meets the highest standards of food safety. As a leading online poultry store in Africa,
                       we offer a wide range of farm-fresh chicken and poultry products tailored to meet your needs.
                        Whether you're a home chef or a restaurant owner, 
                        we provide reliable delivery services that bring authentic 
                    African poultry flavors to your doorstep. We partner with” </p>
                </div>
                <div className='flex gap-5 absolute bottom-0 mx-5 mb-5'>
                    <img src={avatar}/>
                    <div >
                         <hi className="text-xl font-bold">Oyewumi Olukunle</hi>
                         <p className='text-sm text-gray-500'>Farmer</p>
                    </div>               
                </div>
                <img src={button} className='absolute bottom-0 right-0'/>
               
             
            </div>
            <div>
            <div className='relative'>
                <img src={layout}/>
                <div className='flex gap-2 absolute top-4 mx-5 '>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
                <div className='w-[370px] absolute top-20 font-light text-sm mx-5'>
                <p className='text-sm font-thin text-gray-600'>“At PAPASMITH, we are dedicated to delivering the freshest,
                     locally-sourced poultry straight from the farm to your table. 
                     Our commitment to quality ensures that every product is healthy, delicious,
                      and meets the highest standards of food safety. As a leading online poultry store in Africa,
                       we offer a wide range of farm-fresh chicken and poultry products tailored to meet your needs.
                        Whether you're a home chef or a restaurant owner, 
                        we provide reliable delivery services that bring authentic 
                    African poultry flavors to your doorstep. We partner with” </p>
                </div>
                <div className='flex gap-5 absolute bottom-0 mx-5 mb-5'>
                    <img src={avatar}/>
                    <div >
                         <hi className="text-xl font-bold">Oyewumi Olukunle</hi>
                         <p className='text-sm text-gray-500'>Farmer</p>
                    </div>               
                </div>
                <img src={button} className='absolute bottom-0 right-0'/>
               
             
            </div>
            </div>
            <div className='relative'>
                <img src={layout}/>
                <div className='flex gap-2 absolute top-4 mx-5 my-5'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
                <div className='w-[370px] absolute top-20 font-light text-sm mx-5'>
                <p className='text-sm font-thin text-gray-600'>“At PAPASMITH, we are dedicated to delivering the freshest,
                     locally-sourced poultry straight from the farm to your table. 
                     Our commitment to quality ensures that every product is healthy, delicious,
                      and meets the highest standards of food safety. As a leading online poultry store in Africa,
                       we offer a wide range of farm-fresh chicken and poultry products tailored to meet your needs.
                        Whether you're a home chef or a restaurant owner, 
                        we provide reliable delivery services that bring authentic 
                    African poultry flavors to your doorstep. We partner with” </p>
                </div>
                <div className='flex gap-5 absolute bottom-0 mx-5 mb-5'>
                    <img src={avatar}/>
                    <div >
                         <hi className="text-xl font-bold">Oyewumi Olukunle</hi>
                         <p className='text-sm text-gray-500'>Farmer</p>
                    </div>               
                </div>
                <img src={button} className='absolute bottom-0 right-0'/>
               
             
            </div>
        </div>
    </div>
  )
}

export default Testimonial
