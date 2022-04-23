import React from "react";
import BgBottom from "../../images/bg-bottom.svg";

function Banner() {
  return (
    <header className='min-h-[60vh] bg-[#00000065] text-white bg-homeBanner bg-no-repeat bg-cover grid place-content-center relative'>
      <div className='container'>
        <h1 className='text-center text-4xl md:text-5xl font-bold md:leading-snug  md:max-w-[484px]'>
          Students ask, Students Answer.
        </h1>

        <img
          src={BgBottom}
          alt='bgBottom'
          className='hidden container absolute -bottom-[60px] left-0 right-0 md:block'
          aria-hidden='true'
        />
      </div>
    </header>
  );
}

export default Banner;
