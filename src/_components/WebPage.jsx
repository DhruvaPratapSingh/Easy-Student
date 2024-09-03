import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Typed from 'typed.js';

const WebPage = () => {
  useEffect(() => {
    const options = {
      strings: ["", "Apply Internships", "prepare according to your dream Company", "find Coding cheat Sheets ","talk to AI","find popular practice sheets"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    const typed = new Typed(".typing", options);

    return () => {
      // Cleanup to destroy Typed instance to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className=" flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between w-full mt-10 ">
        <div className="w-1/2 font-extrabold md:font-extrabold m-10 p-10 text-2xl md:text-4xl flex flex-col items-center md:items-start">
        <div className="flex w-full m-4">
        <h1 className=" md:flex-row gap-3 text-wrap">
          <img
            src="https://dhruv-codes.vercel.app/_next/static/media/waving-hand.1da6fc7a.gif"
            alt="Waving Hand"
            className="w-14 h-14"
          />
          hey <span className="md:ml-2 text-green-600">gamechangers🫵</span>
        </h1>
      </div>
        <h2>Here You Can <span className="typing text-red-700"></span></h2>
        </div>
        <div className="w-1/2 m-5">
          <img className='w-full h-full flex items-center justify-center ' src="/giify.gif" alt="Gif animation" />
        </div>
      </div>
    </div>
  );
}

export default WebPage;
