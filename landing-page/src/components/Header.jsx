import React, { useState } from 'react';
import logo from '../images/logo.svg';
import close from '../images/icon-close.svg';
import open from '../images/icon-hamburger.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='absolute top-0 left-0 right-0 text-white px-4 md:px-14 md:flex md:justify-between'>
      <div className='flex items-center justify-between py-3 md:py-4'>
        <img src={logo} alt="Logo" className='w-24 md:w-32' />
        <button
          onClick={toggleMenu}
          className='md:hidden text-white focus:outline-none'
        >
          {isOpen ? (
            <img src={close} alt="Close" className='w-8 h-8' />
          ) : (
            <img src={open} alt="Open" className='w-8 h-8' />
          )}
        </button>
      </div>

      <div
        className={`${
          isOpen ? 'fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50' : 'hidden'
        } md:flex md:flex-row md:justify-between md:items-center md:static md:bg-transparent md:h-auto md:z-auto`}
      >
        {isOpen && (
          <div className='absolute top-9 left-4 md:hidden'>
            <img src={logo} alt="Logo" className='w-24 md:w-32' />
          </div>
        )}
        <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
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
        </nav>
        {isOpen && (
          <button
            onClick={toggleMenu}
            className='md:hidden absolute top-4 right-4 text-white focus:outline-none'
          >
            <img src={close} alt="Close" className='w-8 h-8' />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
