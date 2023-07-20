import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-500 pt-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-15">
        I'm a ambitious computer science student, embarking on an exhilarating journey in web development. Within a mere three months, I've gained knowledge and experience on web technology frameworks, including React Native, Node.js, and Tailwind CSS. My dedication to learning extends to mastering the core languages of web development - HTML, CSS, and JavaScript.
        </p>

        <br />

        <p className="text-xl">
        Driven by a passion for creating immersive digital experiences, I've developed websites, showcasing my hands-on experiences as a developer. Notably, one of these projects was a hands-on experience, where I applied my knowledge to bring ideas to life. Another project served as a pivotal showcase of my capabilities, blending React Native, Node.js, and Tailwind CSS into a seamless web application.

As a computer science student with a relentless quest for growth, I am eager to embrace new challenges, continuously push boundaries, and contribute to the dynamic landscape of web development.
        </p>
      </div>
    </div>
  );
};

export default About;
