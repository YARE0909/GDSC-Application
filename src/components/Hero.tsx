import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full min-h-screen h-full flex justify-center font-Orbitron">
      <div className="text-white w-full h-full items-center justify-center flex flex-col gap-5 pt-56">
        <h1 className="text-6xl md:text-9xl font-extrabold text-purple-600">
          Welcome
        </h1>
        <h1 className="text-sm md:text-xl text-center">
          These are my tasks for the GDSC technical domain
        </h1>
        <h1 className="text-sm md:text-xl text-center">
          Pradyumna D (RA2211056010142)
        </h1>
        <div className="w-full h-fit flex flex-col md:flex md:flex-row gap-5 justify-center items-center text-xl md:text-3xl">
          <Link
            className="p-4 bg-purple-500 rounded-lg hover:bg-purple-500/50 duration-300"
            href="/weather"
          >
            Weather App{" "}
          </Link>
          <Link
            className="p-4 bg-purple-500 rounded-lg hover:bg-purple-500/50 duration-300"
            href="/random"
          >
            {" "}
            Random text generator{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
