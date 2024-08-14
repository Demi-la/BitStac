import paystackLogo from "../../../public/assets/pngs/paystackLogo.png";
import barclaysLogo from "../../../public/assets/pngs/barclaysLogo.png";
import capitalOneLogo from "../../../public/assets/pngs/capitalOneLogo.png";
import hsbcLogo from "../../../public/assets/pngs/hsbcLogo.png";
import rightPattern from "../../../public/assets/svgs/rightPattern.svg";
import leftPattern from "../../../public/assets/svgs/leftPattern.svg";
import { socialsData } from "./data";
import Image from "next/image";

const FeaturedCompanies = () => {
  return (
    <>
      <div className="text-center lg:p-[10rem] md:p-[10rem] p-[2rem] text-[#121212]">
        <h2 className="font-bold lg:text-[40px] md:text-[40px] text-[20px]">
          Featured Companies
        </h2>
        <p className="font-normal lg:text-[24px] md:text-[24px] text-[14px] ">
          Trusted By
        </p>
        <div className="flex lg:gap-[5rem] md:gap-[5rem] gap-8 justify-center mt-[3rem] ">
          <div className="w-[100%] h-[100%]">
            <Image src={paystackLogo} alt="Paystack Logo" />
          </div>
          <div className="w-[100%] h-[100%] ">
            <Image src={capitalOneLogo} alt="CapitalOne Logo" />
          </div>
          <div className="w-[100%] h-[100%] ">
            <Image src={barclaysLogo} alt="Barclays Logo" />
          </div>
          <div className="w-[100%] h-[100%] ">
            <Image src={hsbcLogo} alt="HSBC Logo" />
          </div>
        </div>
      </div>
      <div className="bg-[#1B2029] lg:mx-10 md:mx-10 mx-4 relative lg:h-[30rem] md:h-[30rem] rounded-3xl">
        <div className="flex justify-between relative z-0">
          <div>
            <Image
              src={leftPattern}
              alt="Pattern"
              className="lg:w-[100%] lg:h-[100%] md:w-[100%] md:h-[100%] w-[50%] h-[50%] "
            />
          </div>
          <div>
            <Image
              src={rightPattern}
              alt="Pattern"
              className="lg:w-[100%] lg:h-[100%]  md:w-[100%] md:h-[100%] w-[50%] h-[50%] lg:transform scale-x-[-1] lg:relative md:relative absolute right-0 bottom-0 sm:static"
            />
          </div>
        </div>
        <div className="absolute z-[99] lg:top-[2rem] md:top-[2rem]  top-[-1rem] py-[3rem] text-center">
          <div className="text-white  lg:ml-14 md:ml-14">
            <h2 className="font-semibold lg:text-[40px] md:text-[40px] text-[18px]  lg:w-[50%] md:w-[60%] lg:mx-auto md:mx-auto">
              Get Started With Bitstac Today
            </h2>
            <p className="font-light lg:text-[24px] md:text-[24px] text-[12px]  lg:w-[60%] md:w-[70%] mx-auto mt-6">
              Experience the ultimate convenience and control over your finances
              with our cutting-edge technology.
            </p>
          </div>
          <div className="flex lg:gap-8 lg:mt-12 mt-8 gap-4 justify-center">
            {socialsData.map((social, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white lg:py-3 py-2 px-6  rounded-lg"
              >
                <Image
                  src={social.icon}
                  alt={social.altMessage}
                  width={"100%"}
                  height={"100%"}
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <div className="text-[#161616]">
                  <div className="lg:text-[12px] text-[8px] font-medium">
                    {social.message}
                  </div>
                  <div className="font-semibold lg:text-[14px] text-[10px]">
                    {social.platform}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCompanies;
