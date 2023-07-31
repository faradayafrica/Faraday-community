import React from 'react';
import MicrosoftStartupsIcons from '@/images/microsoft-startup.svg';

function Welcome() {
  return (
    <div className='w-full flex flex-col  justify-between'>
      <h2 className='font-bold text-center text-xl md:text-5xl'>
        Welcome to{' '}
        <span className='block text-brandColor mt-4 text-5xl md:text-8xl'>
          Faraday
        </span>
      </h2>

      <div className='absolute bottom-0 left-0 flex p-4 gap-3 mx-auto w-full justify-center'>
        <p className='font-medium'>Powered by</p>
        <MicrosoftStartupsIcons />
      </div>
    </div>
  );
}

export default Welcome;
