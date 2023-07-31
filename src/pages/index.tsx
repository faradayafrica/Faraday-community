import React from 'react';
import Banner from '@/components/Homepage/Banner';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import About from '@/components/Homepage/About';
import Community from '@/components/Homepage/Community';
import Faq from '@/components/Homepage/Faq';
import Connect from '@/components/Homepage/Connect';
import SectionContainer from '@/components/SectionContainer';
import Welcome from '@/components/Homepage/Welcome';
import Contribute from '@/components/Homepage/Contribute';
import Head from 'next/head';

function Homepage() {
  return (
    <>
      <Head>
        <title>Faraday Community</title>
      </Head>

      <Navigation />

      <div className='scrollbar-hide-scroll snap-y snap-mandatory overflow-y-scroll h-screen'>
        <SectionContainer className='bg-headerBg bg-no-repeat bg-contain bg-bottom'>
          <Banner />
        </SectionContainer>

        <SectionContainer className='relative'>
          <Welcome />
        </SectionContainer>

        <SectionContainer className='bg-[url(/images/pattern/about.png)] bg-[#FFC47F]'>
          <About />
        </SectionContainer>

        <SectionContainer className='bg-[url(/images/pattern/community.png)] bg-[#FBFBFB]'>
          <Community />
        </SectionContainer>

        <SectionContainer className='bg-[url(/images/pattern/contribute.png)] bg-[#7DFFF5]'>
          <Contribute />
        </SectionContainer>

        <SectionContainer className='bg-[url(/images/pattern/footer.png)] bg-brandNight '>
          <Connect />
        </SectionContainer>

        <SectionContainer className='relative'>
          <Faq />
        </SectionContainer>

        <SectionContainer className='bg-[url(/images/pattern/footer.png)] !min-h-fit bg-brandNight '>
          <Footer />
        </SectionContainer>
      </div>
    </>
  );
}

export default Homepage;
