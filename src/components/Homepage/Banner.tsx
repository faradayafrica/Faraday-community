import React from 'react';

function Banner() {
  return (
    <header className='w-full '>
      <div className='container w-full mt-44 md:mt-32'>
        <h1 className='text-center mx-auto text-4xl md:text-5xl font-bold md:leading-snug max-w-[370px] md:max-w-[484px]'>
          Students ask,{' '}
          <span className='text-brandColor'>Students Answer.</span>
        </h1>

        <div className='flex absolute left-0 md:left-1/2 gap-3  md:max-w-[900px] overflow-x-scroll md:overflow-visible mx-auto h-[400px] md:h-auto md:-translate-x-[60%]'>
          <img
            src='/images/hero-1.png'
            alt=''
            className='rounded-[441.345px] slidedown w-[9rem] h-[16rem] md:w-[14.58288rem] md:h-[23.74263rem] md:-translate-y-8'
          />
          <img
            src='/images/hero-2.png'
            alt=''
            className='rounded-[441.345px] slideup w-[150px] object-cover bg-center h-[200px] md:h-[250px] md:w-[180px] -translate-y-24 self-end'
          />
          <img
            src='/images/hero-3.jpg'
            alt=''
            className='rounded-[441.345px] slidedown object-cover bg-center w-[150px] h-[240px] md:w-[12.27813rem] md:h-[20.14275rem] self-end transform -translate-y-16 md:translate-y-0'
          />
          <img
            src='/images/hero-4.png'
            alt=''
            className='rounded-[441.345px] slideup w-[150px] h-[170px] md:w-[200px] md:h-[190px] object-cover bg-right translate-y-16 '
          />
        </div>
      </div>
    </header>
  );
}

export default Banner;
