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
      <div className="bg-[#F5FDFF] px-[5rem] py-[2rem]">
        <div className="text-[#121212] text-center ">
          <h2 className="text-[40px] font-bold w-[43%] mx-auto">
            Frequently Asked Question
          </h2>
          <p className="text-[24px] font-normal w-[50%] mx-auto mt-4">
            Have questions? We’ve got answers. Find out everything you need to
            know about our Bitstac
          </p>
        </div>
        <div className="mt-[2rem] flex flex-col gap-2">
          {faqs.map((item, index) => (
            <div key={index} className=" py-4 w-[70%] mx-auto">
              <button
                className="flex justify-between w-full text-left text-lg font-medium text-gray-900"
                onClick={() => toggleFAQ(index)}
              >
                <p className="font-medium text-[22px]">{item.question}</p>
                {openIndex === index ? (
                  <HiMinus className="w-6 h-6" />
                ) : (
                  <HiPlus className="w-6 h-6" />
                )}
              </button>
              {openIndex === index && (
                <div className="font-light text-[20px] text-[#2D2933] mt-4 w-[80%]">
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
