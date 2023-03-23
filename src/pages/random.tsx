import React, { useState } from "react";
import randomAPI from "./api/randomAPI";

const random = () => {
  const [randomWord, setRandomWord]: any = useState([]);
  const [wordState, setWordState] = useState(false);

  const fetchWord = async (num: number) => {
    const response = await randomAPI.get(`/posts/${num}`);
    const word = response.data["title"];
    setRandomWord(word);
  };
  return (
    <div className="w-full min-h-screen h-full flex flex-col gap-8 justify-start items-center bg-black font-Orbitron text-white pt-[90px] p-4">
      <h1 className="text-5xl text-center">Random Text Generator</h1>

      <button
        className="p-4 bg-purple-500 rounded-lg hover:bg-purple-500/50 duration-500"
        onClick={() => {
          const num = Math.floor(Math.random() * 100) + 1;
          fetchWord(num);
          setWordState(true);
        }}
      >
        Generate Word
      </button>
      <h1 className="text-4xl">Your Random Text</h1>
      {wordState ? (
        <h1 className="text-3xl text-center">{randomWord}</h1>
      ) : (
        <h1 className="text-3xl text-gray-500 text-center">
          Click on the button to generate random text
        </h1>
      )}
    </div>
  );
};

export default random;
