"use client";
import { Logo } from "@/components/elements/MainLogo";
import MobileNav from "./elements/MobileNav";
import { DesktopNav } from "./elements/DesktopNav";
import { DarkModeToggle } from "./elements/DarkModeToggle";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const MainHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="bg-emerald-800 dark:bg-emerald-900 w-full h-16 fixed top-0 z-50 text-white dark:text-yellow-50">
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
          <div className="px-3">
            <Logo size="2xl" />
          </div>
          <DesktopNav />
          <div className="flex items-center  sm:hidden">
            <DarkModeToggle />
            <div className="py-2 px-3" onClick={toggleDropdown}>
              {!isDropdownOpen ? (
                <IoMenu className="h-8 w-8" />
              ) : (
                <IoClose className="h-8 w-8" />
              )}
            </div>
          </div>
        </div>
      </header>
      <div
        className={`fixed top-16 z-40  w-full sm:hidden transition-transform duration-300 ${isDropdownOpen ? "transform translate-y-0" : "transform -translate-y-full"}`}
      >
        <MobileNav />
      </div>
    </>
  );
};

export default MainHeader;
