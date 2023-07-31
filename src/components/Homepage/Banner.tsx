import React from 'react';

function Banner() {
  return (
    <header className='w-full '>
      <div className='container w-full'>
        <h1 className='text-center mx-auto text-4xl md:text-5xl font-bold md:leading-snug  md:max-w-[484px]'>
          Students ask,{' '}
          <span className='text-brandColor'>Students Answer.</span>
        </h1>
      </div>
    </header>
  );
}

export default Banner;
