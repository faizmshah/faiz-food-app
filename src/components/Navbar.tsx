"use client";

import React from "react";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { headerItems } from "@/constants/constant";
import { NavItems } from "@/models/Header";
import { Link as ScrollLink } from "react-scroll";

import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(Boolean(false));
  return (
    <div className="flex justify-between bg-white px-4 md:px-20 sticky items-center">
      <Image src="/logo-3.png" width={100} height={100} alt="logo" />
      <div
        className={`md:flex gap-8 items-center font-semibold text-[14px] hidden`}
      >
        {Object.keys(headerItems).map((item) => (
          <ScrollLink to={headerItems[item as keyof NavItems].page}  spy={true}
          smooth={true}
            className="text-black font-bold cursor-pointer block md:inline-block hover:text-accent hover:border-b-[4px] border-accent pb-[3px]"
            key={headerItems[item as keyof NavItems].label}
          >
            {headerItems[item as keyof NavItems].label}
          </ScrollLink>
        ))}

        <button className="bg-accent text-white px-6 py-23 rounded-3xl">
          SignUp
        </button>
      </div>

      
      <IoMdMenu
        className="md:hidden md:object-cover text-black"
        onClick={() => setShowMenu(!showMenu)}
        size={30}
      />
      <div
        className={`absolute top-16 right-8 z-100 flex flex-col rounded-lg md:hidden p-2 h-fit min-w-40 text-center bg-[#262B40] font-semibold text-[14px] ${
          showMenu ? "block" : "hidden"
        }`}
      >

       
        {Object.keys(headerItems).map((item) => (
          <ScrollLink to={headerItems[item as keyof NavItems].page}  spy={true} smooth={true}
            className="text-white cursor-pointer pt-1 m-1 bg-[#191f36] text-center  hover:text-accent hover:border-b-[4px] border-accent pb-[3px]"
            key={headerItems[item as keyof NavItems].label}
           
          
          >
            {headerItems[item as keyof NavItems].label}
          </ScrollLink>
        ))}
        </div>
      </div>
    
  );
};

export default Navbar;
