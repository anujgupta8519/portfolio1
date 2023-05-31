import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 px-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            With one year of experience in software development and design, my primary focus 
          and passion revolve around web applications. I find great enjoyment in working with a diverse
           range of technologies such as React, Node.js, Java, Spring, MongoDB, MERN stack, Java-React, and other
            tools that contribute to the development process.
          </p>

          <div>
            <a
              href="https://github.com/anujgupta8519"
              target="_blank"
              rel="noreferrer"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div>
        <a href="https://www.codingninjas.com/codestudio/profile/anujgupta" target="_blank"  rel="noreferrer">
          <img
            src={HeroImage}
            alt="my profile"
            style={{width:"500px", height:"300px"}}
            className="rounded-2xl mx-auto w-2/3 md:w-full cursor-pointer hover:scale-110 duration-700 "
          />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
