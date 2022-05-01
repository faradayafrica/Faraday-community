import React from "react";

function Community() {
  return (
    <section className='container max-w-[784px] text-center'>
      <h2 className='text-xl md:text-2xl font-bold'>Faraday Community</h2>

      <p className='mt-4 max-w-[40rem] mx-auto'>
        Join the telegram group and channel where all African scholars can ask
        academic questions and other scholars attempt these questions and share
        the opinions with each other. A web app where this and other features
        will be implemented is currently being built.
      </p>
      <p className='mt-4 max-w-[40rem] mx-auto'>
        Let's learn together, share resources and connect with each other.
      </p>

      <p className='mt-4 max-w-[40rem] mx-auto'>
        By joining the community I agree to the faraday telegram{" "}
        <a
          href='https://docs.google.com/document/d/169jEkkdpboFZ10hHomZO4TQjfM0ldapMIDeFLxvgomQ/edit?usp=sharing'
          className='underline'
        >
          community guideline and code of conduct
        </a>
      </p>

      <div className='flex justify-center gap-4'>
        <a
          href='https://t.me/+Ekm9DS5Ucb5mMmQ0'
          className='block max-w-[223px] mt-4 bg-[#39B48B]  py-3 px-10 text-white text-center'
        >
          Join the Community
        </a>
        <a
          href='https://t.me/+E8rcxi4DxEQxMTFk'
          className='block max-w-[223px] mt-4 bg-[#39B48B]  py-3 px-10 text-white text-center'
        >
          Join the Channel
        </a>
      </div>
    </section>
  );
}

export default Community;
