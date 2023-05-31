import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white px-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">

        In 2020, I embarked on my coding journey with Java, diligently practicing and refining my skills
         on platforms like Coding Ninjas. Through perseverance and dedication, I attained the impressive achievement
          of reaching the 7th coding level. Currently, I am fully immersed in working with React and Node, focusing on 
          building personal projects that serve as both a learning experience and an opportunity to enhance my abilities. 
          With each project, I strive to further expand my knowledge and expertise in web development, leveraging the power of 
          React and Node to create innovative and impactful applications.
        </p>

        <br />

        <p className="text-xl">
        I am currently employed at Infosys Ltd., where I have gathered 13 months of professional experience. 
        During my tenure, my focus has been on utilizing my skills in Java, Node.js, React, and other relevant technologies. 
        I have been actively involved in projects that have allowed me to apply and further develop my expertise in these areas.
        </p>
      </div>
    </div>
  );
};

export default About;
