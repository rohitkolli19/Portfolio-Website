import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-gray-500 justify-center items-center"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/2a5c9a09-9bad-41a7-9e50-d56e95a8aac5"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-gray-500 focus:outline-none"
            />
            <input
              type="Text"
              name="Tmail"
              placeholder="Enter your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-gray-500 focus:outline-none"
            />
            <textarea
              name="Message"
              placeholder="Enter your Message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-gray-500 focus:outline-none"
            ></textarea>

            <button className="text-slate-100 bg-gradient-to-b from-cyan-500 to-teal-800 px-6 py-3 my-8 mx-auto flex items-center rounded-full hover:scale-110 duration-300">
              Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;