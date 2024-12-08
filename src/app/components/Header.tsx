import React from 'react';
import { FaHeart, FaBell, FaSearch, FaCog } from 'react-icons/fa';
import { VscSettings } from "react-icons/vsc";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white py-4 px-4 md:px-8 shadow-md flex flex-wrap items-center justify-between">
      {/* Logo and Search Bar Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-auto gap-4 lg:gap-20">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-blue-600">MORENT</div>
        
        {/* Search Bar */}
        <div className="relative w-full lg:w-[492px] h-[44px]">
          <input
            type="text"
            placeholder="Search something here"
            className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ borderRadius: '70px' }}
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FaSearch />
          </div>
          <div className="absolute text-2xl right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <VscSettings />
          </div>
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-4 mt-4 lg:mt-0">
        {/* Favorites Icon */}
        <Link href="/favorites">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <FaHeart className="text-lg md:text-xl text-gray-600 cursor-pointer" />
          </div>
        </Link>

        {/* Notifications Icon */}
        <Link href="/notifications">
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <FaBell className="text-lg md:text-xl text-gray-600 cursor-pointer" />
            <span className="absolute top-1 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
        </Link>

        {/* Settings Icon */}
        <Link href="/settings">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <FaCog className="text-lg md:text-xl text-gray-600 cursor-pointer" />
          </div>
        </Link>

        {/* Profile Picture */}
        <Link href="/profile">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer hover:shadow-md transition">
            <Image src="/profil.png" alt="Profile" width={40} height={40} />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
