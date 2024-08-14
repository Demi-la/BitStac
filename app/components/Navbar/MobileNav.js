import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/pngs/logo.png";

const MobileNav = ({ isSidebarOpen, toggleSideBar }) => {
  const sideNavStyles = {
    transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
    transition: "transform 0.3s ease",
  };
  return (
    <div
      style={sideNavStyles}
      className="fixed top-0 left-0 z-50 flex transition-all duration-300"
    >
      {isSidebarOpen && (
        <div className=" px-4 pt-6  w-[96vw]  md:w-[50vw] h-screen  bg-[#F0FCFF]">
          <div className=" flex justify-between ">
            <div>
              <Image
                src={logo}
                alt="Logo"
                width={"100%"}
                height={"100%"}
                objectFit="contain"
              />
            </div>
            <div>
              <button onClick={toggleSideBar}>
                <FaTimes className="text-[#746c6c]  text-[1.5rem] mt-4" />
              </button>
            </div>
          </div>
          <div className="">
            <ul className="flex flex-col gap-4 font-normal text-[16px] text-[#121212] mt-2">
              <li>
                <Link href="#products">Products</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                {" "}
                <Link href="#blog">Blog</Link>
              </li>
              <li>
                {" "}
                <Link href="#faqs">FAQs</Link>
              </li>
            </ul>
            <div className="mt-4">
              <button className="bg-[var(--btn-color)] px-[18px] py-[12px] rounded-md text-white font-bold text-[14px] tracking-[0.12em]">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
