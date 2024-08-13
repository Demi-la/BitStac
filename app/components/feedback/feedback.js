import Image from "next/image";
import { productSuccess } from "./data";
import blackSwirlArrow from "../../../public/assets/svgs/blackSwirlArrow.svg";
import leftQuote from "../../../public/assets/svgs/leftQuote.svg";
import rightQuote from "../../../public/assets/svgs/rightQuote.svg";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
const Feedback = () => {
  return (
    <>
      <div className="bg-secondary-gradient lg:px-[12rem] px-2 pt-[12rem] pb-[5rem] relative">
        <div className="absolute lg:left-14 top-[4rem] w-[50px] h-[50px] lg:w-[100%] lg:h-[100%]">
          <Image src={blackSwirlArrow} alt="Arrow" />
        </div>
        <div className="flex justify-center lg:gap-[5rem] gap-4 ">
          {productSuccess.map((item, index) => (
            <div key={index} className="text-center">
              <h1 className="lg:text-[36px] text-[16px] font-bold text-[#050213]">
                {item.total}
              </h1>
              <p className="lg:text-[24px] text-[11px] font-normal text-[#717171] mt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center lg:mt-[12rem] mt-[8rem] ">
          <h2 className="lg:text-[40px] text-[18px] font-bold text-[#121212]">
            From Our Users
          </h2>
          <p className="lg:text-[24px] text-[14px] font-normal text-[#121212] mt-2">
            Feedback from our users about the Bitstac Idea
          </p>
        </div>
      </div>
      <div className="bg-[#1B2029] relative lg:h-[24rem] md:h-[24rem] h-[17rem] mb-[10rem] lg:w-[100%] w-[100%] mx-auto">
        <div className="flex lg:px-[8rem] px-8  py-[5rem] text-center justify-center gap-6">
          <div className="w-[20px] h-[20px] lg:w-[100%] lg:h-[100%]">
            <Image src={leftQuote} alt="Quote" />
          </div>
          <div className="text-white">
            <p className="font-light lg:text-[28px] md:text-[28px] text-[12px] lg:w-[75%] w-[100%] mx-auto">
              “ This app has been working wonderfully well for me and i have
              been using it for a while now ”
            </p>
            <p className="font-bold lg:text-[24px] md:text-[24px] text-[14px] mt-8">
              Yetunde Adeleke, CEO Fumzy
            </p>
          </div>
          <div className="w-[20px] h-[20px] lg:w-[100%] lg:h-[100%]">
            <Image src={rightQuote} alt="Quote" />
          </div>
        </div>
        <div className="lg:feedback-curved-shape absolute  bottom-0 h-[5.4rem]  left-[7rem] lg:left-[11rem] md:left-[20rem] lg:w-[100%] z-20">
          <div className="flex justify-center  h-full lg:text-[48px]  text-[30px] text-center lg:text-[#00000080] text-white lg:gap-[25%] md:gap-[10rem]  gap-[5rem] lg:mt-4 mt-6">
            <p className="lg:relative lg:right-[21rem]">
              {" "}
              <GoArrowLeft />
            </p>
            <p>
              {" "}
              <GoArrowRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
