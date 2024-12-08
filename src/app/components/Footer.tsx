import React from 'react';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center px-4 py-6 bg-white">
      {/* Intro Section */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
        <div className="flex flex-col gap-2 text-center lg:text-left w-full lg:w-1/3">
          <h1 className="text-[#3563e9] text-2xl lg:text-3xl font-bold">MORENT</h1>
          <p className="text-gray-500 w-full lg:w-[300px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 w-full lg:w-2/3">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-lg">About</h2>
            <ul className="space-y-1 text-gray-600">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-lg">Community</h2>
            <ul className="space-y-1 text-gray-600">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-lg">Socials</h2>
            <ul className="space-y-1 text-gray-600">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full border-t border-[#e7eef6] my-6"></div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="text-center lg:text-left">
          <p className="text-sm font-bold">©2022 MORENT. All rights reserved</p>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-end gap-4">
          <a href="#" className="text-sm font-bold hover:underline">
            Privacy & Policy
          </a>
          <a href="#" className="text-sm font-bold hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
