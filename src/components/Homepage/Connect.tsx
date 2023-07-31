import Image from 'next/image';
import React from 'react';
import AfricaIcon from '@/images/africa.svg';

function Connect() {
  return (
    <section className='container text-white'>
      <h2 className='font-bold text-2xl text-center md:text-4xl'>
        Connecting schools across{' '}
        <span className='text-brandColor'>Nigeria</span>
      </h2>

      <div className='mt-8'>
        <AfricaIcon className='w-[70px] h-[62px] mx-auto' />
      </div>

      <div className='h-[400px] w-full overflow-x-scroll'>
        <img src='/images/map.svg' alt='' className='!w-[1025px]' />
        {/* <Image src='/images/map.svg' width={1000} height={1000} alt='' /> */}
      </div>
    </section>
  );
}

export default Connect;
