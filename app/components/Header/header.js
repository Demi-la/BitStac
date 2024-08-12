import Image from "next/image";
import exclude from "../../../public/assets/pngs/exclude.png";
import { PiLightning } from "react-icons/pi";
import {socials}  from "./data";
import Products from "../products/products";


const Header = () => {
  return (
    <div className="bg-primary-gradient mt-8 h-[70rem]">
      <div className="block lg:flex gap-[5rem] lg:px-10 px-4">
        <div className="lg:mt-16 mt-8">
          <p className="bg-[#F4F1FE] text-[#1B095D] font-medium lg:text-[12px] md:text-[12px] text-[10px] tracking-[0.12em] py-3 px-3 inline-flex gap-2 rounded-lg">
            <span className="text-lg">
              <PiLightning />
            </span>
            ACROSS MULTIPLE PLATFORMS
          </p>
          <h1 className="text-[#121212] lg:text-[3.5rem] md:text-[3rem] text-[1.25rem] font-bold lg:w-[40rem] md:w-[90%] w-[85%] lg:leading-[4.438rem] md:leading-[4.438rem] mt-8">
            Effortless Global Money Transfers at Your Fingertips
          </h1>
          <p className="text-[#121212] lg:text-[1.25rem] md:text-[1.25rem] text-[12px] font-normal lg:w-[70%] w-full mt-4">
            Enjoy flexible deposit and withdrawal options, virtual cards, and
            real-time currency conversion—all in one secure app
          </p>
          <div className="flex lg:gap-8 gap-4 mt-4">
            {socials.map((social, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-[#161616] lg:py-3 py-2 px-6  rounded-lg"
              >
                <Image
                  src={social.icon}
                  alt={social.altMessage}
                  width={"100%"}
                  height={"100%"}
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
                <div className="text-white">
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
        <div className="mt-8 lg:0">
          <Image
            src={exclude}
            alt="Hero Image"
            height={"100%"}
            width={"100%"}
            className="md:mx-auto "
          />
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Header
