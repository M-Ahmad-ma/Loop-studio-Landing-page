import React from 'react'
import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import insta from '../images/icon-instagram.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'

function Footer() {
  return (
    <div className='w-[100vw] h-[400px] md:h-[200px] md:px-10 bg-black mt-6 flex flex-col items-center md:flex-row md:justify-between'>
      <div className='mt-7 text-center'>
        <img src={logo} alt="Logo" />
        <ul className='flex text-white flex-col gap-6 mt-6 md:flex-row cursor-pointer'>
          <li className='relative group'>
            <a href="#about" className='hover:text-gray-400'>
              About
              <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
          </li>
          <li className='relative group'>
            <a href="#careers" className='hover:text-gray-400'>
              Careers
              <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
          </li>
          <li className='relative group'>
            <a href="#events" className='hover:text-gray-400'>
              Events
              <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
          </li>
          <li className='relative group'>
            <a href="#products" className='hover:text-gray-400'>
              Products
              <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
          </li>
          <li className='relative group'>
            <a href="#support" className='hover:text-gray-400'>
              Support
              <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
            </a>
          </li>
        </ul>
      </div>
      <div className='flex flex-col items-center gap-5 mt-8 md:flex-col md:items-start'>
        <div className='flex gap-4'>
          <img src={facebook} alt="Facebook" />
          <img src={insta} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
          <img src={pinterest} alt="Pinterest" />
        </div>
        <div>
          <p className='text-white mt-2'>@2021 Loopstudio. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
