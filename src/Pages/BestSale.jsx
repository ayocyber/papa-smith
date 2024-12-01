import React from 'react'
import line from "../asset/Line 5.png"
import chick from "../asset/chick.png"
import goat from "../asset/unsplash.png"
import { ArrowDown, Star } from 'lucide-react'
const BestSale = () => {
    const card = [
        {
            name : "Broiler Bird",
            image : chick
        },
        {
            name : "Red Kahalari Goat",
            image : goat
        },
        {
            name : "Broiler Bird",
            image : chick
        },
        {
            name : "Broiler Bird",
            image : chick
        },
    ]
  return (
    <div className='mx-20 items-center '>
    <div className='flex items-center justify-between' >
    <div className='flex items-center gap-5'>
          <div>
              <img src={line}/>
          </div>
      <div>
      <h1 className="text-3xl font-bold gradient-text ">
              Our Best Sales
          </h1>
      </div>   
      </div>
      <div>
          <button className=' bg-gold text-custom-brown p-[15px] text-xl rounded-full'>
              Show more categories
          </button>
      </div> 
    </div>
    <div className='flex items-start justify-between my-5'>
          {card.map((item)=>{
              return(
                  <div className='border  rounded-md'>
                      <div className='mx-3 p-3 items-start'>
                           <img src={item.image}/>
                           <p className='text-gray-500 m-2'>Poultry</p>
                           <h1 className='m-2 font-bold text-2xl'>{item.name}</h1>
                           <div className='flex gap-1 m-2'>
                              <Star/>
                              <Star/>
                              <Star/>
                              <Star/>
                              <Star/>
                           </div>
                           <div className='flex gap-2 m-2 '>
                              <h1 className='text-green-600 font-bold text-2xl '>8000Ngn</h1>
                              <h1 className='text-red-600 font-bold text-2xl'> 7000Ngn</h1>
                           </div>
                           <div className='flex justify-between m-2 gap-1 '>
                              <div className='flex flex-col w-[180px]  '>
                                  <h1 className='font-semibold'>Weight</h1>
                                  <div className=' border flex justify-between py-[8px] px-[12px] w-full'>
                                      <div className='w-[180px] '>
                                        <p className=''> 100kg</p>
                                      </div>
                                     <ArrowDown/>
                                  </div>
                              </div>
                              <div className='w-[95px] py- px-3'>
                                  <h1>
                                      Quality
                                  </h1>
                                  <div className='flex justify-between border py-2 px-3 w-[95px] '>
                                      <p>-</p>
                                      <p>1</p>
                                      <p>+</p>
                                  </div>
                              </div>
                            
                              
                           </div>
                           <button className=' bg-gold text-custom-brown px-[60px] py-3 w-[300px] mx-2 text-xl rounded-md'>
                                   Add to cart   {">"}
                               </button>
                      </div>
                      
                      
                  </div>
              )
          })}
      </div>
  </div>
)
}

export default BestSale
