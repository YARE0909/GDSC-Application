import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[90px] flex justify-between items-center bg-black text-white font-Orbitron p-4">
      <div>
        <Link
          href="/"
          className="text-3xl md:text-4xl font-extrabold text-purple-600"
        >
          GDSC Tasks
        </Link>
      </div>
      <div className="flex">
        <Link
          className="p-4 text-purple-500 rounded-lg hover:text-white duration-300 font-bold"
          href="/weather"
        >
          Weather App
        </Link>
        <Link
          className="p-4 text-purple-500 rounded-lg hover:text-white duration-300 font-bold"
          href="/random"
        >
          Random text generator
        </Link>
        <Link
          className="p-4 text-purple-500 rounded-lg hover:text-white duration-300 font-bold"
          href="https://github.com/YARE0909/GDSC-Application"
          target="_blank"
        >
          Repo
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
