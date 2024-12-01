import React from 'react';
import logo from "../asset/logo2.png";
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <div className='bg-black text-white py-10'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 px-5'>
        
        {/* Logo Section */}
        <div className='flex justify-center md:justify-start w-full md:w-auto'>
          <img src={logo} alt="Company Logo" className='w-40' />
        </div>

        {/* Links Section */}
        <div className='flex flex-col md:flex-row md:space-x-40 text-center md:text-left'>
          <div className='space-y-3'>
            <h3 className='font-semibold'>Company</h3>
            <p className='hover:text-gray-400 cursor-pointer'>About Us</p>
            <p className='hover:text-gray-400 cursor-pointer'>FAQ</p>
            <p className='hover:text-gray-400 cursor-pointer'>Shopping & Delivery</p>
          </div>

          <div className='space-y-3'>
            <h3 className='font-semibold'>Contact Us</h3>
            <p className='hover:text-gray-400 cursor-pointer'>info@papasmith</p>
            <p className='hover:text-gray-400 cursor-pointer'>+234 810 247 522</p>
          </div>

          <div className='space-y-3'>
            <h3 className='font-semibold'>Follow Us</h3>
            <div className='flex space-x-4 justify-center md:justify-start'>
              <Facebook className='hover:text-gray-400 cursor-pointer' />
              <Instagram className='hover:text-gray-400 cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
      <div className='items-center justify-center pt-[50px] mx-20'>
      <div class="w-[1550px] h-px bg-white border border-white rounded-none flex-none order-0 self-stretch grow-0 "/>
      <div className='flex justify-between my-10'>
        <p>© 2024, Papasmith. All rights reserved.</p>
        <div className='flex gap-4 '>
            <p>Privacy Policy</p>
            <p>Terms of Services </p>
            <a>Cookie Setting</a>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Footer;
