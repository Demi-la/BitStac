import Image from "next/image";
import { productSuccess } from "./data";
import blackSwirlArrow from "../../../public/assets/svgs/blackSwirlArrow.svg";
import leftQuote from "../../../public/assets/svgs/leftQuote.svg";
import rightQuote from "../../../public/assets/svgs/rightQuote.svg";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
const Feedback = () => {
  return (
    <>
      <div className="bg-secondary-gradient relative  px-4 mx-auto lg:pb-[5rem] pb-8">
        <div className=" lg:px-[12rem]  pt-[12rem] ">
          <div className="absolute lg:left-14 top-[4rem] w-[50px] h-[50px] lg:w-[100%] lg:h-[100%]">
            <Image src={blackSwirlArrow} alt="Arrow" />
          </div>
          <div className="flex justify-center lg:gap-[5rem] md:gap-[3rem] gap-4 ">
            {productSuccess.map((item, index) => (
              <div key={index} className="text-center">
                <h1 className="lg:text-[36px] md:text-[36px] text-[16px] font-bold text-[#050213]">
                  {item.total}
                </h1>
                <p className="lg:text-[24px] md:text-[24px] text-[11px] font-normal text-[#717171] mt-2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center lg:mt-[12rem] mt-[8rem] ">
            <h2 className="lg:text-[40px] md:text-[40px] text-[18px] font-bold text-[#121212]">
              From Our Users
            </h2>
            <p className="lg:text-[24px] md:text-[24px] text-[14px] font-normal text-[#121212] mt-2">
              Feedback from our users about the Bitstac Idea
            </p>
          </div>
        </div>
      </div>
      <div className="feedback-bg bg-[#1B2029]  lg:w-[90%] lg:h-[30rem] md:h-[24rem] h-[17rem] lg:mb-[10rem] mb-[2rem]  w-[95%] mx-auto relative ">
        <div className="flex lg:px-[8rem] px-8  lg:py-[5rem] py-8 text-center justify-center items-center gap-6">
          <div>
            <Image
              src={leftQuote}
              alt="Quote"
              className="w-[20px] h-[20px] lg:w-[100%] lg:h-[100%] md:w-[100%] md:h-[100%] relative lg:top-[-4rem]  md:top-[-4rem] top-[-2rem]"
            />
          </div>
          <div className="text-white">
            <p className="font-light lg:text-[28px] md:text-[28px] text-[12px] lg:w-[85%] w-[100%] mx-auto">
              “ This app has been working wonderfully well for me and i have
              been using it for a while now ”
            </p>
            <p className="font-bold lg:text-[24px] md:text-[24px] text-[14px] lg:mt-8 mt-4">
              Yetunde Adeleke, CEO Fumzy
            </p>
          </div>
          <div>
            <Image
              src={rightQuote}
              alt="Quote"
              className="w-[20px] h-[20px] lg:w-[100%] lg:h-[100%] md:w-[100%] md:h-[100%] relative lg:top-[-4rem] md:top-[-4rem] top-[-2rem]"
            />
          </div>
        </div>
      </div>
      <div className="lg:text-[48px] text-[30px] flex text-center justify-center relative lg:top-[-20rem] md:top-[-8rem] top-[-16rem] lg:gap-[55%] gap-[45%]">
        <p>
          {" "}
          <GoArrowLeft />
        </p>
        <p>
          {" "}
          <GoArrowRight />
        </p>
      </div>
    </>
  );
};

export default Feedback;
