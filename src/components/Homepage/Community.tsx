import React from 'react';
import Button from '../Button';

function Community() {
  return (
    <section className='container w-full' id='about-faraday'>
      <div className='font-bold text-center'>
        <p className='uppercase text-sm md:text-2xl'>
          excited be a part of this?
        </p>
        <h2 className='text-center text-4xl md:text-6xl font-bold'>
          Here’s what you can do
        </h2>
      </div>

      <p className='mt-4 font-medium text-center max-w-[35rem] mx-auto'>
        Join the telegram group and channel where you can ask academic questions
        and other students can attempt these questions and share their opinions
        with each then join the website.
      </p>

      <Button className='px-14 mx-auto mt-6'>Join us!</Button>
    </section>
  );
}

export default Community;
