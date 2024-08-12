import Image from "next/image";
import { FcMenu } from "react-icons/fc";
import logo from "../../../public/assets/pngs/logo.png";
import MobileNav from "./MobileNav";
const Nav = ({ isSidebarOpen, toggleSideBar }) => {
  return (
    <>
      <div className="flex justify-between lg:px-10 px-4 py-8">
        <div className={isSidebarOpen ? "hidden" : ""}>
          <Image src={logo} alt="Logo" width={"100%"} height={"100%"} />
        </div>
        <ul className="flex gap-10  font-normal text-[16px] text-[#121212] mt-2 hidden lg:flex">
          <li>Products</li>
          <li>About</li>
          <li>Blog</li>
          <li>FAQs</li>
        </ul>
        <div className="hidden lg:flex">
          <button className="bg-[var(--btn-color)] px-[18px] py-[12px] rounded-md text-white font-bold text-[14px] tracking-[0.12em]">
            GET STARTED
          </button>
        </div>
        <div
          className={`lg:hidden mt-2 ${isSidebarOpen ? "hidden" : "visible"}`}
        >
          <button onClick={toggleSideBar}>
            <FcMenu className="text-2xl text-white" />
          </button>
        </div>
      </div>
      <MobileNav isSidebarOpen={isSidebarOpen} toggleSideBar={toggleSideBar} />
    </>
  );
};

export default Nav;
