import React from 'react'
import line from "../asset/Line 5.png"
import fatchick from "../asset/fatchick.png"
import frame1 from "../asset/Frame1.png"
import frame2 from "../asset/Frame2.png"
import frame3 from "../asset/Frame3.png"

const Services = () => {
    const leftitem = [
        {
            name: "Broiler",
            image: frame3
        },
        {
            name : "Breeders",
            image : frame2
        },
        {
            name : "Dynamic Ecology",
            image : frame1
        }
    ]

    const rightItem = [
        {
            name : "Oragnic Ecosystem",
            image : frame1
        },
        {
            name: "Layer",
            image : frame3
        },
        {
            name : "Organic Fooder",
            image : frame2
        }
    ]
  return (
    <div className='py-20'>
    <div className='h-full py-20 bg-gold '>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center gap-6'>
                <img src={line}/>
                <h1 className="text-3xl font-bold gradient-text ">
                SERVICES
            </h1>
            <img src={line}/>
            </div>
            <div className='items-center justify-center'>
                <div className='w-[600px] p-5'>
                <h1 className='text-4xl font-bold p-5 items-center text-center'>
                    Maximizing Your Poultry
                    Business Potential
                 </h1>
                </div>
            </div>
            <div className='flex  mt-20'>
                <div className='w-[500px] items-start justify-center h-[485px]'>
                    {
                        leftitem.map((item)=>{
                            return(
                                <div className='flex gap-10 mb-20 p-4'>
                                    <img src={item.image}/>
                                    <div className=''>
                                     <h1 className='font-bold text-2xl'>{item.name}</h1>
                                     <p className='text-gray-600 font-medium mt-3 '>Nutrition is paramount in poultry
                                     farming and we spare no effort</p>
                                    </div>
                                 
                                </div>
                            )
                        })
                    }
                </div>
                <div className='w-1/2  '>
                    <img src={fatchick} className='w-full h-full'/>
                </div>
                <div className='w-[500px] items-start justify-center h-[485px]'>
                    {
                        rightItem.map((item)=>{
                            return(
                                <div className='flex gap-10 mb-20 p-4'>
                                    <img src={item.image}/>
                                    <div className=''>
                                     <h1 className='font-bold text-2xl'>{item.name}</h1>
                                     <p className='text-gray-600 font-medium mt-3 '>Nutrition is paramount in poultry
                                     farming and we spare no effort</p>
                                    </div>
                                 
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services
