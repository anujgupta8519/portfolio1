import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        In 2020, I began my coding journey with Java. I honed my skills by practicing on platforms like Coding Ninjas,
         eventually reaching the 7th level in coding. Currently, I am working with React and Node, building personal projects 
         to further enhance my abilities.
        </p>

        <br />

        <p className="text-xl">
        At present, I am employed at Infosys Ltd., where I have accumulated 13 months of professional experience. 
        During my tenure, I have focused on utilizing my skills in Java, Node.js, React,
         and other relevant technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
