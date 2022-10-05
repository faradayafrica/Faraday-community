import React from "react";
import Logo from "../images/footer-logo.svg";
import Youtube from "../images/youtube.svg";
import Twitter from "../images/twitter.svg";
import Github from "../images/github.svg";

function Footer() {
  return (
    <footer className='bg-[#3F3F41] py-14 md:bg-footerBg bg-top md:pb-32 bg-cover bg-[center_10px] '>
      <div className='container  text-white'>
        <img src={Logo} alt='faraday logo' className='mb-8' />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div>
            <h4 className='text-lg mb-3'>Socials</h4>

            <div className='flex gap-3'>
              <a
                href='https://github.com/faradayafrica'
                target='_blank'
                rel='noreferrer'
              >
                <img src={Github} alt='youtube' />
              </a>
              <a
                href='https://youtube.com/channel/UCtNFJ9q1z52ICj3FqeyHjxw'
                target='_blank'
                rel='noreferrer'
              >
                <img src={Youtube} alt='youtube' />
              </a>
              <a
                href='https://twitter.com/faradayafrica'
                target='_blank'
                rel='noreferrer'
              >
                <img src={Twitter} alt='youtube' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
