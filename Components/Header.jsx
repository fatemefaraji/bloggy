import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="py-6 px-6 md:px-16 lg:px-32 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg rounded-b-3xl">
      <div className="flex justify-between items-center">
        <Image src={assets.logo} width={180} alt="logo" className="w-[130px] sm:w-auto" />
        <button className="flex items-center gap-2 font-medium py-2 px-4 sm:py-3 sm:px-6 bg-white text-indigo-600 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:bg-indigo-100">
          Get Started
          <Image src={assets.arrow} alt="arrow for Get Started" />
        </button>
      </div>
      <div className="text-center my-12">
        <h1 className="text-4xl sm:text-6xl font-bold drop-shadow-lg">Latest Blogs</h1>
        <p className="mt-6 max-w-[740px] mx-auto text-sm sm:text-lg opacity-90">
          Stay updated with the latest trends and insights.
        </p>
        <form className="flex justify-between max-w-[500px] mx-auto mt-8 bg-white rounded-lg overflow-hidden shadow-lg">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="pl-4 py-3 flex-grow outline-none text-gray-800"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 transition-all duration-300 hover:bg-indigo-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
