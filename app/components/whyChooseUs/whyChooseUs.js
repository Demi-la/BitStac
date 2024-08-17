import Image from "next/image";
import swirlArrow from "../../../public/assets/svgs/swirlArrow.svg";
import { whyChooseUsData } from "./data";

const WhyChooseUs = () => {
  return (
    <>
      <div className="relative  lg:mt-[8rem] mt-[5rem] md:mt-[8rem]" id="about">
        <div className="bg-[#1B2029] relative border-none">
          <div className="curved-shape absolute  right-0 h-[400px] lg:z-10 lg:w-[87%] w-[100%] top-[-1rem] hidden md:block lg:block">
            <div className="text-[#121212] text-center lg:mt-6 mt-[3rem]">
              <h1 className="font-bold lg:text-[40px] md:text-[40px] text-[18px]">
                Why Choose Us
              </h1>
              <p className="font-normal lg:text-[24px] md:text-[24px] text-[16px] lg:ml-0  lg:w-[100%]  ml-[20%]  w-[68%]  lg:px-0">
                Discover the unique advantages that set us apart
              </p>
            </div>
          </div>
          <div>
            <div className="Mobilecurved-shape absolute  right-0 h-[400px] z-[99] w-[80%] top-[-1.3rem] lg:hidden md:hidden block ">
              <div className="text-[#121212] text-center mt-6 ">
                <h1 className="font-bold lg:text-[40px] md:text-[40px] text-[18px] mt-6">
                  Why Choose Us
                </h1>
                <p className="font-normal text-[16px]  ml-[10%]  w-[80%] mt-2 ">
                  Discover the unique advantages that set us apart
                </p>
              </div>
            </div>
          </div>
          <div className="relative lg:right-[-2rem] right-[-1rem] lg:top-[3rem] top-[2rem] lg:w-[100%] lg:h-[100%]  w-[70px] h-[70px]">
            <Image src={swirlArrow} alt="Arrow" />
          </div>
          <div className="lg:flex gap-8  lg:mx-12 mx-5 lg:mt-[10rem] md:mt-[10rem] mt-[8rem] pb-[4rem]">
            {whyChooseUsData.map((item, index) => (
              <div
                key={index}
                className="boxShadow bg-[#1B1F28]  p-4 mt-8 lg:mt-0 lg:mb-[5rem]"
              >
                <div className="bg-[#F4F1FE] h-12 w-12 rounded-lg text-[#1B095D] text-[1.5rem] p-3">
                  {item.icon}
                </div>
                <h2 className="font-bold lg:text-[24px] md:text-[24px] text-[18px] text-white mt-4">
                  {item.title}
                </h2>
                <p className="lg:text-[19px] md:text-[19px] text-[12px] font-light text-white mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
