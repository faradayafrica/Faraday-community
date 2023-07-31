import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/images/logo.svg';
import { FARADAY_ABOUT_URL } from '@/util';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`fixed w-full top-0  py-5 z-[1000]`}>
      <div className='container flex justify-between items-center w-full'>
        <Link href='/'>
          <Logo />
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className='md:hidden ml-auto space-y-1'
        >
          <span
            className={`block w-6 h-[2px] bg-black transition-transform duration-200 ${
              open && '[transform:_translateY(8px)_rotate(45deg)]'
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-black ${open && 'opacity-0'}`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-black transition-transform duration-200 ${
              open && '[transform:_translateY(-4px)_rotate(-45deg)]'
            }`}
          ></span>
          {/* <img
              src={open ? Close : Menu}
              alt="menu"
              aria-hidden="true"
              className="ml-auto"
            /> */}
        </button>

        <div
          className={`${
            open
              ? 'absolute bg-[#f8f9fa] block py-4 top-8 left-0 right-0 z-[10000] md:static md:top-[unset] md:py-0'
              : 'hidden md:block '
          } col-span-2 mt-4 transition-all duration-200 md:col-auto md:justify-self-end md:mt-0`}
        >
          <ul
            className={`items-center space-y-2  ${
              open ? 'w-[90%] mx-auto md:mx-0 md:w-full' : ''
            } md:space-y-0 md:space-x-3 md: md:flex`}
          >
            <li className='navlink font-medium '>
              <a href={FARADAY_ABOUT_URL} target='_blank' rel='noreferrer'>
                About Faraday
              </a>
            </li>
            <li className='navlink font-medium'>
              <a href='#faraday-community'>Faraday Community</a>
            </li>
            <li className='navlink font-medium'>
              <a href='#faq'>FAQs</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
