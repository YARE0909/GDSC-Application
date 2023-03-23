import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div>
      <div className="w-full h-[90px] flex justify-between items-center bg-black text-white font-Orbitron p-4">
        <div>
          <Link
            href="/"
            className="text-3xl md:text-4xl font-extrabold text-purple-600"
          >
            GDSC Tasks
          </Link>
        </div>

        <div
          className="p-4 text-purple-500 rounded-lg hover:text-white duration-300 font-bold md:hidden"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <h1>Menu</h1>
        </div>

        <div className="hidden md:flex">
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
      <div
        className={
          mobileNav ? "md:hidden w-full h-fit flex flex-col font-Orbitron border-t-2 border-b-2 border-gray-700 bg-black" : "hidden"
        }
      >
        <Link
          className="p-4 text-purple-500 rounded-lg hover:text-white duration-300 font-bold"
          href="/weather"
          onClick={() => setMobileNav(!mobileNav)}
        >
          Weather App
        </Link>
        <Link
          className="p-4 text-purple-500 rounded-lg hover:text-white duration-300 font-bold"
          href="/random"
          onClick={() => setMobileNav(!mobileNav)}
        >
          Random text generator
        </Link>
        <Link
          className="p-4 text-purple-500 rounded-lg hover:text-white duration-300 font-bold"
          href="https://github.com/YARE0909/GDSC-Application"
          target="_blank"
          onClick={() => setMobileNav(!mobileNav)}
        >
          Repo
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
