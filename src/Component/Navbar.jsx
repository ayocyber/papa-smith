import React from 'react'
import logo from "../asset/Group 5096.png"
import { Heart, MenuIcon, ShoppingBag } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex justify-between mx-16 items-center h-[78px] gap-8 '>
      <div>
        <img src={logo} sizes={78}/>
      </div>
      <div className='flex gap-8'>
        <ShoppingBag size={32}/>
        <Heart size={32}/>
        <MenuIcon size={32}/>
      </div>
    </div>
  )
}

export default Navbar
