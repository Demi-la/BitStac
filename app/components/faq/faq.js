"use client";
import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { faqs } from "./data";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="bg-[#F5FDFF] lg:px-[5rem] px-4 lg:py-[2rem] py-[4rem]">
        <div className="text-[#121212] text-center ">
          <h2 className="lg:text-[40px] md:text-[40px] text-[20px] font-bold lg:w-[43%] mx-auto">
            Frequently Asked Question
          </h2>
          <p className="lg:text-[24px] md:text-[24px] text-[13px] font-normal lg:w-[50%] mx-auto mt-4">
            Have questions? We’ve got answers. Find out everything you need to
            know about our Bitstac
          </p>
        </div>
        <div className="mt-[2rem] flex flex-col gap-2">
          {faqs.map((item, index) => (
            <div key={index} className=" py-4 lg:w-[70%] lg:mx-auto ">
              <div
                className="flex justify-between w-full text-left text-lg font-medium text-gray-900"
                onClick={() => toggleFAQ(index)}
              >
                <p className="font-medium lg:text-[22px] md:text-[22px] text-[14px]">
                  {item.question}
                </p>
                {openIndex === index ? (
                  <HiMinus className="lg:w-6 lg:h-6 md:w-6 md:h-6  w-4 h-4 mt-1" />
                ) : (
                  <HiPlus className="lg:w-6 lg:h-6 md:w-6 md:h-6   w-4 h-4 mt-1" />
                )}
              </div>
              {openIndex === index && (
                <div className="font-light lg:text-[20px] md:text-[20px] text-[12px] text-[#2D2933] mt-4 w-[80%]">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
