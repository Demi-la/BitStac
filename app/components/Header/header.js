import Image from "next/image";
import heroImage from "../../../public/heroImage.png";
import { socials } from "./data";
import arrow from "../../../public/assets/svgs/arrow.svg";
import { global } from "../products/data";
import { GoArrowSwitch } from "react-icons/go";
import tether from "../../../public/assets/svgs/tether.svg"
import nigerialIcon from "../../../public/assets/svgs/nigerialIcon.svg";
import ukIcon from "../../../public/assets/svgs/ukIcon.svg";
import { PiArrowsHorizontalLight, PiLightning, PiBankFill } from "react-icons/pi";
const Header = () => {
  return (
    <div className="bg-primary-gradient mt-8 relative">
      <div className="block lg:flex gap-[5rem] lg:px-10 px-4 relative">
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
          <p className="text-[#121212] lg:text-[1.25rem] md:text-[1.25rem] text-[12px] font-normal lg:w-[93%] w-full mt-4">
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
          <div className="relative w-[90%] h-[90%] mx-auto ">
            <Image src={heroImage} alt="Logo" className="heroImageMask" />
          </div>
        </div>
      </div>

      <div className="heroNotification bg-white  p-2 gap-4 w-[21%] rounded-lg absolute left-[36rem] top-[34rem] lg:flex hidden ">
        <div>
          <p className="bg-[#F4F1FE] h-12 w-12 rounded-lg text-[#1B095D] text-[1.5rem] p-3">
            <GoArrowSwitch />
          </p>
        </div>
        <div>
          <p className="font-medium text-[16px]">Swap Successful</p>
          <div className="flex gap-1 font-semibold text-[12px] mt-2">
            <p>USDT</p>
            <Image src={tether} alt="USDT" />
            <PiArrowsHorizontalLight className="mt-1 mx-2" />
            <Image src={nigerialIcon} alt="Naira" />
            <p>NGN</p>
          </div>
        </div>
      </div>

      <div className="heroNotification bg-white p-2 gap-4 w-[21%] rounded-lg absolute right-[2rem] top-[0.5rem] lg:flex hidden ">
        <div>
          <p className="bg-[#F4F1FE] h-12 w-12 rounded-lg text-[#1B095D] text-[1.5rem] p-3">
            <PiBankFill />
          </p>
        </div>
        <div>
          <p className="font-medium text-[16px]">You’ve received £2,000 </p>
          <div className="flex gap-1 font-semibold text-[12px] mt-2">
            <p>GBP</p>
            <Image src={ukIcon} alt="GBP" />
            <PiArrowsHorizontalLight className="mt-1 mx-2" />
            <Image src={nigerialIcon} alt="Naira" />
            <p>NGN</p>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="relative" id="products">
        <div className="text-center lg:mt-[12rem] mt-[7rem] text-[#121212]  flex relative justify-center">
          <div className="absolute lg:left-[9rem] left-0 lg:top-3 top-[5rem]  lg:w-full w-[50px] h-[50px]">
            <Image src={arrow} alt="Arrow" />
          </div>
          <div>
            <h1 className="lg:text-[2.5rem] md:text-[2.5rem] text-[18px] font-bold">
              All-In-One Financial Freedom
            </h1>
            <p className="lg:text-[24px] md:text-[24px] text-[12px] font-normal lg:font-light lg:w-[60%] w-[80%] mx-auto lg:mt-4 mt-2">
              Explore the powerful features that make our app the ultimate
              solution for seamless & secure
            </p>
          </div>
        </div>
        <div className="lg:mx-10 mx-4 mt-14">
          {global.map((item, index) => (
            <div
              key={index}
              className="px-8 py-2 lg:flex  bg-gray-gradient rounded-2xl"
            >
              <div>
                <h2 className="text-[#121212] lg:text-[2rem] md:text-[2rem] text-[16px] font-bold lg:w-[60%] w-[100%] lg:mt-[4rem] mt-[1rem]">
                  {item.title}
                </h2>
                <p className="text-[#161616] lg:text-[20px] md:text-[20px]  text-[12px] lg:font-light font-normal lg:w-[85%]  w-[100%] mt-4">
                  {item.description}
                </p>
                <ul className="mt-4 text-[12px] font-normal lg:text-[20px] md:text-[20px] lg:font-light">
                  <l1 className="flex gap-2">
                    <Image
                      src={item.icon}
                      alt="Bullet"
                      className="w-[14px] h-[14px]  lg:w-[24px] lg:h-[24px] md:w-[24px] md:h-[24px]"
                    />{" "}
                    {item.point1}
                  </l1>
                  <l1 className="flex gap-2 mt-3">
                    <Image
                      src={item.icon}
                      alt="Bullet"
                      className="w-[14px] h-[14px]  lg:w-[24px] lg:h-[24px] md:w-[24px] md:h-[24px]"
                    />{" "}
                    {item.point2}
                  </l1>
                </ul>
              </div>
              <div className="relative lg:left-[-1rem] w-full mt-4 lg:mt-0">
                <Image
                  src={item.globeImage}
                  alt="Globe"
                  className="md:mx-auto "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
