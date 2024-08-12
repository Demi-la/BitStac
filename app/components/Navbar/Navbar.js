"use client";
import { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSideBar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="'container mx-auto">
      <Nav isSidebarOpen={isSidebarOpen} toggleSideBar={toggleSideBar} />
      <MobileNav isSidebarOpen={isSidebarOpen} toggleSideBar={toggleSideBar} />
    </div>
  );
};

export default Navbar;
