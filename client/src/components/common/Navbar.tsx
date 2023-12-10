"use client";

import React from "react";
import Image from "next/image";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header
      className="absolute top-0 w-[100vw] h-[64px] px-[100px] flex flex-row items-center justify-between  text-white border-b-[1px] border-slate-700 z-50"
      style={{ backdropFilter: "blur(14px)" }}
    >
      <span className="flex gap-4">
        {" "}
        <img
          className="h-[35px]"
          src="https://framerusercontent.com/images/pgoY8aWMvP7Iybn2dcy0mbCYmlg.png"
        />{" "}
        <h1 className="italic text-4xl font-bold ">Bots</h1>
      </span>
    </header>
  );
};
export default Navbar;
