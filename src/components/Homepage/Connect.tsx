import Image from 'next/image';
import React from 'react';
import AfricaIcon from '@/images/africa.svg';

function Connect() {
  return (
    <div className='pt-24 text-white '>
      <div className='container'>
        <h2>
          Connecting schools across{' '}
          <span className='text-brandColor'>Nigeria</span>
        </h2>

        <AfricaIcon className='w-[70px] h-[62px]' />

        <Image src='/images/map.png' width={1000} height={1000} alt='' />
      </div>
    </div>
  );
}

export default Connect;
