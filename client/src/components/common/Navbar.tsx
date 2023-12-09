"use client";

import React from "react";
import Image from "next/image";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header
      className="border-b bg- border-custom-1 w-full bg-clip-padding bg-opacity-60 border-b-[1px] border-gray-200 border-0 absolute top-0 left-0 h-16 flex items-center px-10 z-10 text-slate-100 justify-between"
      style={{ backdropFilter: "blur(14px)" }}
    >
      <h1>Banter</h1>
    </header>
  );
};
export default Navbar;
