import React from "react";
import Banner from "../components/Homepage/Banner";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import About from "../components/Homepage/About";
import Community from "../components/Homepage/Community";
import Faq from "../components/Homepage/Faq";

function Homepage() {
  return (
    <>
      <Navigation />
      <Banner />
      <main className='space-y-20 mb-20'>
        <About />
        <Community />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
