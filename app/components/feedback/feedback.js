import Image from "next/image";
import { productSuccess } from "./data";
import blackSwirlArrow  from "../../../public/assets/svgs/blackSwirlArrow.svg"
import leftQuote  from "../../../public/assets/svgs/leftQuote.svg"
import rightQuote  from "../../../public/assets/svgs/rightQuote.svg"
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
const Feedback = () => {
  return (
    <>
      <div className="bg-secondary-gradient px-[12rem] pt-[12rem] pb-[5rem] relative">
        <div className="absolute left-14 top-[4rem]">
          <Image src={blackSwirlArrow} alt="Arrow" />
        </div>
        <div className="flex justify-center gap-[5rem]">
          {productSuccess.map((item, index) => (
            <div key={index} className="text-center">
              <h1 className="text-[36px] font-bold text-[#050213]">
                {item.total}
              </h1>
              <p className="text-[24px] font-normal text-[#717171]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-[12rem]">
          <h2 className="text-[40px] font-bold text-[#121212]">
            From Our Users
          </h2>
          <p className="text-[24px] font-normal text-[#121212]">
            Feedback from our users about the Bitstac Idea
          </p>
        </div>
      </div>
      <div className="bg-[#1B2029] relative h-[24rem] mb-[10rem] ">
        <div className="flex px-[8rem]  py-[5rem] text-center justify-center gap-6">
          <div>
            <Image src={leftQuote} alt="Quote" />
          </div>
          <div className="text-white">
            <p className="font-light text-[28px] w-[75%] mx-auto">
              “ This app has been working wonderfully well for me and i have
              been using it for a while now ”
            </p>
            <p className="font-bold text-[24px] mt-8">
              Yetunde Adeleke, CEO Fumzy
            </p>
          </div>
          <div>
            <Image src={rightQuote} alt="Quote" />
          </div>
        </div>
        <div className="feedback-curved-shape absolute  bottom-0 h-[5.4rem] left-[11rem] w-[100%] z-20">
          <div className="flex justify-center h-full text-[48px] text-center text-[#00000080] gap-[25%] mt-4">
            <p className="relative right-[21rem]">
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
}

export default Feedback
