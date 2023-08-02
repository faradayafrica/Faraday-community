import React from 'react';

function About() {
  return (
    <section className='container w-full' id='about-faraday'>
      <div className='font-bold text-center'>
        <p className='uppercase text-sm md:text-2xl'>Curious about us?</p>
        <h2 className='text-center text-4xl md:text-6xl font-bold'>
          Here's who we are
        </h2>
      </div>

      <p className='mt-4 font-medium text-center max-w-[35rem] mx-auto'>
        Faraday is a community driven ed-tech platform improving the learning
        experience for students in tertiary institutions. We're working
        tirelessly to build a community where everyone can share what they know
        with others who need help.
      </p>
    </section>
  );
}

export default About;
