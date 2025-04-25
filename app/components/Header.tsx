"use client";
import { useState } from "react";
import { AlignRight } from "lucide-react";
import Navbar from "./Navbar";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <header>
        <div className="w-full max-w-1170 mx-auto fxy-center py-[30px] px-2 md:px-0">
          <div className="w-full fy-jb">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold">
                <span>Joshim</span> <span className="text-primary"> Dev</span>
              </h1>
            </div>
            <div>
              <button onClick={toggleNav} aria-label="Open navigation menu">
                <AlignRight className="" size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>
      <Navbar isOpen={isNavOpen} onClose={closeNav} />
    </>
  );
};

export default Header;
