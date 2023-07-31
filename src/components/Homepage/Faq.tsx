import React, { useEffect, useState } from 'react';
import { base } from '../../util';
import { Disclosure } from '@headlessui/react';
import ChevronUpIcon from '@/images/arrow-chevron-up.svg';
import ChevronDownIcon from '@/images/arrow-chevron-down.svg';
import MicrosoftStartupsIcons from '@/images/microsoft-startup.svg';

function Faq() {
  const [faqs, setFaqs] = useState<
    any[] | { question: string; paragraph2: string; paragraph1: string }[]
  >([]);

  useEffect(() => {
    base('faqs')
      .select({ view: 'Grid view' })
      .eachPage((faqs: any, fetchNextPage) => {
        const newData = faqs.map((faq: any) => faq.fields);
        setFaqs(newData);
        fetchNextPage();
      });
  }, []);

  return (
    <section className='container' id='faq'>
      <h2 className='text-4xl md:text-7xl text-center font-bold mb-5'>FAQs</h2>

      <div className='mx-auto mt-7 w-full rounded-2xl space-y-4'>
        {faqs &&
          faqs.map((faq, index) => (
            <div className='bg-[#F2F2F2] rounded-3xl p-5'>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full'>
                      <span className='block text-left text-base md:text-lg max-w-md'>
                        {faq.question}
                      </span>

                      {open ? (
                        <ChevronUpIcon className='w-[24px]' />
                      ) : (
                        <ChevronDownIcon className='w-[24px]' />
                      )}
                    </Disclosure.Button>

                    <Disclosure.Panel className=' bg-white rounded-2xl text-[#242424] p-6 mt-5'>
                      <p className=''>{faq.paragraph1}</p>
                      {faq?.paragraph2 && <p className=''>{faq.paragraph2}</p>}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
      </div>

      <div className='my-16'>
        <a
          href='https://t.me/+Ekm9DS5Ucb5mMmQ0'
          className='flex items-center text-[#011945]  border-2 border-[#011945] font-medium  p-2 text-center text-lg mx-auto rounded-full w-fit gap-3'
        >
          <img src='/images/telegram.svg' width={50} />
          {/* <TelegramIcon /> */}
          Join us on telegram
        </a>
      </div>

      <div className='absolute bottom-0 left-0 flex p-4 gap-3 mx-auto w-full justify-center'>
        <p className='font-medium'>Powered by</p>
        <MicrosoftStartupsIcons />
      </div>
    </section>
  );
}

export default Faq;
