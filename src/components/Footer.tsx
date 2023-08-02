import Link from 'next/link';
import React from 'react';
import Logo from '../images/logo-dark.svg';
import Twitter from '../images/twitter.svg';
import Github from '../images/github.svg';
import Youtube from '../images/youtube.svg';

function Footer() {
  return (
    <footer className='text-white w-full'>
      <div className='container py-16'>
        <div className='grid gap-11 grid-cols-2 md:grid-cols-4'>
          <div className='col-span-2 md:col-auto'>
            <h4 className='font-extrabold text-2xl'>
              <span className='block'>Ask Questions,</span>
              <span className='block'>Get Help,</span>
              <span className='block'>Go Beyond.</span>
            </h4>
            <p className='text-sm italic '>Built by students for students.</p>
          </div>
          <div className='col-start-2 md:col-auto'>
            <h5 className='font-medium'>Product</h5>
            <ul className='mt-1'>
              <li className='cursor-pointer'>
                <Link href={'https://app.faraday.africa/signup'}>Sign up</Link>
              </li>
            </ul>
          </div>
          <div className='col-start-1 row-start-2 md:col-start-3 md:row-start-1'>
            <h5 className='font-medium'>Company</h5>
            <ul className='mt-1'>
              <li className='cursor-pointer'>About Faraday</li>
              {/* <li>
          <a href=''>Advertise with us</a>
        </li> */}
              <li className='cursor-pointer'>Terms of use</li>
              <li className='cursor-pointer'>Privacy policy</li>
            </ul>
          </div>
          <div className=''>
            <h5 className='font-medium '>Community</h5>
            <ul className='mt-1'>
              <li>
                <a href='https://events.faraday.africa' rel='nooperner'>
                  All events
                </a>
              </li>
              <li>
                <a href='https://events.faraday.africa/#past-events'>
                  Past events
                </a>
              </li>
              <li>
                <a href='https://events.faraday.africa/gallery'>Gallery</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex justify-between items-center border-t border-t-[#CFD9DE] py-5 mt-12'>
          <Link href={'/'} className='w-full'>
            <Logo className='w-[130px]' />
          </Link>

          <div className='flex items-center gap-3'>
            <Link href='https://github.com/faradayafrica'>
              <Github className='w-[24px]' />
            </Link>
            <Link href='https://www.youtube.com/channel/UCtNFJ9q1z52ICj3FqeyHjxw'>
              <Youtube className='w-[24px]' />
            </Link>
            <Link href='https://twitter.com/faradayafrica'>
              <Twitter className='w-[24px]' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
