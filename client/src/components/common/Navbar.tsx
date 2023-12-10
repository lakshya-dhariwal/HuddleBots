"use client";

import React from "react";
import Image from "next/image";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header
      className="border-b bg- border-custom-1 w-full bg-clip-padding bg-opacity-60  border-b-[1px] border-gray-700 border-0 absolute top-0 left-0 h-16 flex items-center px-10 z-10 text-slate-100 justify-between"
      style={{ backdropFilter: "blur(14px)" }}
    >
      <span className="flex gap-4">
        {" "}
        <img
          className="h-[40px]"
          src="https://framerusercontent.com/images/pgoY8aWMvP7Iybn2dcy0mbCYmlg.png"
        />{" "}
        <h1 className="italic text-4xl font-bold ">Bots</h1>
      </span>
    </header>
  );
};
export default Navbar;
