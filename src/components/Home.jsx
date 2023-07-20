import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-slate-800 flex items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row px-4 w-full">
        <div className="flex flex-col justify-center md:w-1/2">
          <h2 className="text-3xl sm:text-7xl font-bold text-gray-500">
            Welcome, I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have gained significant experience in building and designing
            websites, along with expertise in hosting them on Vercel.
            Currently, I'm actively involved in the development of a web
            application using technologies such as React, Node.js, and Tailwind
            CSS.
          </p>

          <div>
            <Link
              to="My Blog"
              smooth
              duration={500}
              className="group text-slate-100 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-teal-800 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full h-auto md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
