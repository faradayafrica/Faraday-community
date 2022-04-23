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
          ans1: "Here is the format to do that Start with your name, school and deptment and drop your question at the end of you question tag @faradayqna. If you don't tag @faradayqna your question might get buried in the group chat.",
          ans2: "the admin with @faradayqna will copy your details and question. Gives it a serial number and pin it in the group chat. The admin will also post it in our channel and in our twitter handle so it can get adequate engagement it deserves. Once you see an answer that appeals to you most pls comment on it.",
        },
        {
          ques: "How can I answer question in the telegram community?",
          ans1: "Also check our pinned message, channel and twitter handle for questions to answer. Here is a format on how to do that Start with the serial number given to that question then your name, dept and school.  then your answer at the end @faradayqna if you don't tag @faradayqna your answer might get buried in the group chat. in the twitter handle you can just comment on that question.",
        },
        {
          ques: "Is question and answer the only value we get in the telegram community?",
          ans1: "No, that not all the group have to offer. Twice every month we will have virtual event on twitter space or google meet to discuss our experience studying in African university. In the group, discussion on difficulties we face and possible hack to get by will be talk on daily basis..",
        },
        {
          ques: "How is faraday different from chegg and numerous question and answer sites",
          ans1: "a. We are free for everyone that wants to join the community and also use the app when its ready",
          ans2: "b. We are breaking the barriers between campuses by connecting students with each other to foster peer-learning and collaboration among scholars.",
        },
        {
          ques: "Why should I write my name, deptment, school and tagging @faradayqna while asking question or answering?",
          ans1: "The name, department and school help to foster that relationship between scholars and also this gives you right to your questions and answers.(do you think the right... apart is unneccesary) if yes pls ignore it.",
          ans2: "The tag help the admin to broadcast your question and answer so it won't get buried in the group chat.",
        },
        {
          ques: "What happens if I don't tag @faradayqna while asking or providing answer in the group chat.",
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
