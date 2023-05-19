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
            I Started coding in 2020 with Java and after that i start practicing with coding Ninjas and there i got Level in coding
            and Now i am working with React and Node, and building some Personal Project.
        </p>

        <br />

        <p className="text-xl">
            Currently, I am working with Infosys Ltd. and in Infosys i have 13 Months of working Exprience on Java , Node and React etc...

        </p>
      </div>
    </div>
  );
};

export default About;
