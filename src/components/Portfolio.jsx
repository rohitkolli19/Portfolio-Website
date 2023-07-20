import React from "react";
import Tailwind from "../assets/portfolio/Tailwind.jpg";
import reactWeather from "../assets/portfolio/Weather Forecaster.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 2,
      src: Tailwind,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="My Blog"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-gray-500 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-start w-full h-full pt-16">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Blog
          </p>
          <p className="py-6">Explore my accomplishments and projects here.
          I have designed and developed several websites using React and Tailwind CSS. One of these websites is a management platform, which serves as a demonstration project aimed at gaining hands-on experience. Additionally, I created a Weather Forecaster application utilizing React, Tailwind CSS, and React Hooks, implementing JSX for efficient user interfaces. These projects showcase my proficiency in building dynamic and visually appealing web applications with the technologies.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
