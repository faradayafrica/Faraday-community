import React from "react";

function Faq() {
  return (
    <section className='container max-w-[784px] mt-24' id='faq'>
      <h2 className='text-xl md:text-2xl font-bold mb-5'>FAQs</h2>

      {[
        {
          ques: "How is the community valuable to me?",
          ans1: "The value the community is giving you is having access to other scholars across Africa that can attempt your questions and share resources with you. Also the community gives you the ability to attempt other people question and make meaniful connection with one another.",
        },
        {
          ques: "How can I ask question in the telegram community?",
          ans1: "State your name, school and department, then ask your question and at the end of it tag @faradayqna. If you don't tag @faradayqna your question might get buried in the group chat.",
          ans2: "An admin will copy your details and question, give it a serial number and pin it in the group chat. The admin will also post it in our channel and in our twitter handle so it can get adequate engagement it deserves. Once you see an answer that appeals to you most pls comment on it.",
        },
        {
          ques: "How can I answer question in the telegram community?",
          ans1: "Check for pinned messages, channel messages and twitter handle for questions to answer. Start with the serial number given to that question then state your name, dept and school and your answer. At the end tag @faradayqna. If you don't tag @faradayqna your answer might get buried in the group chat. On twitter you can just comment on that question.",
        },
        {
          ques: "Is question and answer the only value we get in the Telegram community?",
          ans1: "No, that's definitely not all the Community has to offer. Twice every month we will have virtual event using Twitter Spaces or Google Meet to discuss our experiences studying in African universities. In the Community, difficulties we face and possible hacks to get by will be discussed.",
        },
        {
          ques: "How is faraday different from chegg and numerous question and answer sites",
          ans1: "A. We are free for everyone that wants to join the community and also use our App when its ready",
          ans2: "B. We are breaking the barriers between campuses by connecting Students with each other to foster peer-learning and collaboration among scholars.",
        },
        {
          ques: "Why should I write my name, department, school and tag @faradayqna while asking a question or answering one?",
          ans1: "The name, department and school helps to create an identity for you to help other Students connect with you.",
          ans2: "The tag helps the admin to broadcast your question and answer so it won't get buried in the Community",
        },
        {
          ques: "What happens if I don't tag @faradayqna while asking or providing an answer in the Community",
          ans1: "Your questions and answers might get buried.",
        },
      ].map((item, index) => (
        <details key={index} className='border-t py-3 border-gray-500'>
          <summary className='font-bold'>{item.ques}</summary>
          <p className='mt-2 ml-4'>{item.ans1}</p>
          {item?.ans2 && <p className='mt-2 ml-4'>{item.ans2}</p>}
        </details>
      ))}
    </section>
  );
}

export default Faq;
