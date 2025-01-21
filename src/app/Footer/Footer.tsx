import React from "react";
import Image from "next/image";
import Logo from "../../app/image/Logo.png";
import { FaFacebook, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 shadow-lg ">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap md:text-left text-center items-start gap-6">
          {/* Logo and Social Links */}
          <div className="w-full md:w-1/4 mb-6">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image src={Logo} alt="Logo" height={40} width={168} />
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus
            </p>
            <div className="flex justify-center md:justify-start mt-4 space-x-4 text-gray-600">
              <FaFacebook className="hover:text-[#029FAE] cursor-pointer" />
              <FaTwitter className="hover:text-[#029FAE] cursor-pointer" />
              <IoLogoInstagram className="hover:text-[#029FAE] cursor-pointer" />
              <FaPinterest className="hover:text-[#029FAE] cursor-pointer" />
              <FaYoutube className="hover:text-[#029FAE] cursor-pointer" />
            </div>
          </div>

          {/* Categories */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-4">
              CATEGORIES
            </h2>
            <nav className="list-none space-y-2">
              <li>
                <a className="text-black hover:text-gray-800">Sofa</a>
              </li>
              <li>
                <a className="text-black hover:text-gray-800">Armchair</a>
              </li>
              <li>
                <a className="text-black hover:text-gray-800">Wing Chair</a>
              </li>
              <li>
                <a className="text-black hover:text-[#007580]">Desk Chair</a>
              </li>
              <li>
                <a className="text-black hover:text-[#007580]">Park Bench</a>
              </li>
            </nav>
          </div>

          {/* Support */}
          <div className="w-full md:w-1/4 mb-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-4">
              SUPPORT
            </h2>
            <nav className="list-none space-y-2">
              <li>
                <a className="text-black hover:text-gray-800">Help & Support</a>
              </li>
              <li>
                <a className="text-black hover:text-gray-800">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="text-black hover:text-gray-800">Privacy Policy</a>
              </li>
              <li>
                <a className="text-black hover:text-gray-800">Help</a>
              </li>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/4 mb-6 flex flex-col sm:flex-row items-center sm:gap-2">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-4 sm:mb-0">
              NEWSLETTER
            </h2>
            <div className="flex flex-col sm:flex-row items-center sm:gap-2 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Your Email"
                className="w-full sm:w-auto bg-gray-100 rounded border border-gray-300 text-gray-700 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <button className="mt-2 sm:mt-0 sm:ml-2 text-white bg-[#029FAE] py-2 px-6 rounded hover:bg-[#1f646a]">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Bitters chicharrones fanny pack waistcoat green juice.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200">
        <div className="container px-5 py-4 mx-auto flex items-center justify-center">
          <p className="text-sm text-gray-500">
            © 2024 - Designed & Developed by Zakirsoft
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
