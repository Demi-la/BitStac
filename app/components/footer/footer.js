import Image from "next/image";
import footerLogo from "../../../public/assets/svgs/footerLogo.svg";
import facebook from "../../../public/assets/svgs/facebook.svg";
import twitter from "../../../public/assets/svgs/twitter.svg";
import instagram from "../../../public/assets/svgs/instagram.svg";
import linkedin from "../../../public/assets/svgs/linkedin.svg";
const Footer = () => {
  return (
    <>
      <div className="bg-[#FAFAFA] lg:p-[4rem] p-[1.5rem] lg:mt-[12rem] mt-[3rem]">
        <div className="lg:flex md:flex gap-[15%]">
          <div className="text-[#121212]">
            <h2 className="font-bold lg:text-[32px] text-[29px]">
              Join Our Newsletter
            </h2>
            <p className="font-normal lg:text-[20px] md:text-[18px] text-[12px] lg:w-[50%] mt-2">
              Get all latest Bitstac New delivered to your mail box
            </p>
          </div>
          <div className="flex lg:gap-4 gap-2 mt-6 lg:mt-0">
            <div className="">
              <input
                placeholder="Email Address"
                className=" lg:pl-[18px] md:pl-[18px] pl-[12px] lg:py-[16px] md:py-[16px] py-[12px] lg:w-[20rem] w-[13rem] rounded-md border border-1-[#98A2B3] placeholder-[#98A2B3]"
              />
            </div>
            <div>
              <button className="bg-[var(--btn-color)] lg:px-[18px] md:px-[18px]  px-[12px] py-[16px] rounded-md text-white font-bold lg:text-[14px] md:text-[14px] text-[12px] tracking-[0.12em]">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-center items-center mt-[4rem]">
          <div>
            <Image src={footerLogo} alt="Logo" width={"100%"} height={"100%"} />
          </div>
          <div className="flex gap-12 lg:hidden md:hidden mt-[2rem]">
            <Image src={facebook} alt="Logo" width={"100%"} height={"100%"} />
            <Image src={twitter} alt="Logo" width={"100%"} height={"100%"} />
            <Image src={instagram} alt="Logo" width={"100%"} height={"100%"} />
            <Image src={linkedin} alt="Logo" width={"100%"} height={"100%"} />
          </div>
          <div className="text-[#1D2739] font-semibold lg:text-[20px] md:text-[20px] text-[14px] mt-[4rem] lg:mt-0 md:mt-0">
            <p>© 2024 Bitstac. All rights reserved.</p>
          </div>
          <div className="lg:flex md:flex hidden gap-6 ">
            <Image src={facebook} alt="Logo" width={"100%"} height={"100%"} />
            <Image src={twitter} alt="Logo" width={"100%"} height={"100%"} />
            <Image src={instagram} alt="Logo" width={"100%"} height={"100%"} />
            <Image src={linkedin} alt="Logo" width={"100%"} height={"100%"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
