import React from "react";

function Community() {
  return (
    <section className='container max-w-[784px]' id='faraday-community'>
      <h2 className='text-center text-xl md:text-2xl font-bold'>
        Faraday Community
      </h2>

      <p className='mt-4 text-center max-w-[40rem] mx-auto'>
        Join the telegram group and channel where all African scholars can ask
        academic questions and other scholars attempt these questions and share
        the opinions with each other. A web app where other features will be
        implemented is currently being built.
      </p>
      <p className='mt-4 text-center max-w-[40rem] mx-auto'>
        Let's learn together, share resources and connect with each other.
      </p>

      {/* <p>
        The join now will redirect you to our telegram group pls change it to
        Join us so we can have 3 links telegram group, telegram channel and
        twitter For telegram group link: https://t.me/+Ekm9DS5Ucb5mMmQ0 For
        telegram channel link: https://t.me/+E8rcxi4DxEQxMTFk for twitter:
        https://twitter.com/faradayafrica
      </p> */}

      <a
        href='https://t.me/+Ekm9DS5Ucb5mMmQ0'
        className='block max-w-[223px] mt-4 bg-[#39B48B] mx-auto py-3 px-10 text-white text-center'
      >
        Join the Community
      </a>
    </section>
  );
}

export default Community;
