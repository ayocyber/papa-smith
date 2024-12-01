import React from 'react'
import line from "../asset/Line 5.png"
import { ArrowDownLeftFromSquare, SquareArrowLeft, SquareArrowRight } from 'lucide-react'
import left from "../asset/left.png"
import right from "../asset/right.png"
import goat from "../asset/goat.jpg"
import bigChich from "../asset/bigchick.png"
import pigs from "../asset/pigs.png"
import layout from "../asset/Rectangle 338.png"
import button from "../asset/Button.png"

const Card = () => {
  const carts = [
    {
      name : "Red Kahalari Goat",
      image : goat,
      box : layout
    },
    {
      name : "Broiler Bird",
      image : bigChich,
      box : layout
    },
    {
      name : "Piggery",
      image : pigs,
      box : layout
    }
  ]
  return (
    <div className='mx-20 pt-[500px]'>
      <div className='flex items-center justify-between'>
        <div className='flex gap-5 items-center'>
          <img src={line}/>
          <h1 className="text-3xl font-bold gradient-text ">
              Categorires
            </h1>
        </div>
        <div className='flex items-center gap-5'>
          <img src={left}/>
          <img src={right}/>
        </div>
      </div>
      <div className='flex items-center justify-between py-20'>
        {carts.map((item)=>{
          return(
            <div className='relative'>
              <div className='relative'>
                <img src={item.box}/>
                <div >
                  <img src={item.image} className='w-[348px] h-[275px] absolute top-0 items-center py-4 mx-4 rounded-md'/>
                  <p className='absolute bottom-20 mx-4 text-gray-500 font-thin'>Poultry</p>
                  <h1 className='absolute bottom-6 mx-4 font-bold text-3xl '>{item.name}</h1>
                </div>
                </div>
                <img src={button} className='absolute bottom-0 right-0'/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
