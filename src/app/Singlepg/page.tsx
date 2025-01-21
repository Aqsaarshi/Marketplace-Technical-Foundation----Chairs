import React from "react";
import Header from "../Header/Header";
import Image from "next/image";
import No from "../../app/image/No.png";
import Logo from "../../app/image/Logo.png";
import { PiShoppingCartBold } from "react-icons/pi";
import Item2 from "../../app/image/Item2.png";

import Item7 from "../../app/image/Item7.png";
import Item1 from "../../app/image/Item1.png";
import Items4 from "../../app/image/Items4.png";
import Item3 from "../../app/image/Item3.png";
import Items1 from "../../app/image/Items1.png";
import { FaFacebook, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-[84px] px-2 sm:px-[20px] md:px-[30px] lg:px-[40px] py-[20px] flex flex-row sm:flex-row justify-between items-center bg-[#F0F2F3]">
        <Image
          src={Logo}
          height={40}
          width={166}
          alt="Logo"
          className="ml-[20px] sm:ml-0"
        />
        <Link
          href="/Cart"
          className="flex items-center w-[120px] h-[44px] px-[18px] py-[11px] gap-[12px] rounded-tl-[8px] bg-white relative z-10 mt-4 sm:mt-0 sm:w-auto sm:ml-0 sm:mr-0 ml-[10px] mr-[10px]"
        >
          <PiShoppingCartBold className="h-[40px] w-[40px]" />
          <p>Cart</p>
          <Image src={No} alt="No Items" height={30} width={30} />
        </Link>
      </div>

      <div className="w-full h-[74px] px-6 sm:px-[120px] py-[14px] flex justify-between items-center">
        <nav className="w-full sm:w-[339px] flex flex-wrap items-center text-base ">
          <Link
            href="/"
            className="mr-5 hover:text-slate-400 font-Inter text-[#007580]"
          >
            Home
          </Link>
          <Link
            href="/Cart"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            Shop
          </Link>
          <Link
            href="/Product"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            Product
          </Link>
          <Link
            href="/{product.id}"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            Pages
          </Link>
          <Link
            href="/About"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            About
          </Link>
        </nav>
        <Link
          href="/Contact"
          className="text-black ml-auto hover:text-slate-400"
        >
          Contact: (808) 555-0111
        </Link>
      </div>
      <div className="border-t border-gray-300 w-full my-4 sm:my-6 lg:my-8"></div>
      {/* Hero Section */}
      <section className="text-gray-600 body-font w-[320px] sm:w-[1920px] ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={Item2}
              height={607}
              width={675}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold font-sans text-gray-900">
              Library Stool
              <span className="hidden lg:block">Chair</span>
            </h1>
            <button className="inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#1f646a] rounded-full text-lg mt-8">
              $99.00 USD
            </button>
            <div className="border-t border-gray-300 w-full mt-4"></div>
            <p className="mb-8 leading-relaxed font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit. Nullam tincidunt erat enim. Lorem ipsum dolor
              <br /> sit amet, consectetur adipiscing
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#1f646a] rounded text-lg">
                <PiShoppingCartBold className="mt-1 mr-3" /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <div className="w-[320px] sm:w-[1920px] flex flex-col items-center py-12 px-4 ml-[10px] sm:-ml-[180px]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Featured Products
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Product Cards */}
          {[Item7, Item1, Items4, Item3, Items1].map((item, index) => (
            <div
              key={index}
              className="w-[270px] h-auto flex flex-col items-center"
            >
              <Image
                src={item}
                alt={`Item ${index + 1}`}
                height={270}
                width={330}
              />
              <p className="text-sm text-black mt-4">Library Stool Chair</p>
              <p className="text-xs text-right text-black">$99</p>
            </div>
          ))}
        </div>
        <button className="inline-flex text-black border-b py-2 px-6 focus:outline-none bg-[#029FAE] hover:bg-[#1f646a]  rounded text-lg mt-8">
          View All
        </button>
      </div>
      <div className="border-t border-gray-300  mt-[20px]"></div>
      <footer className="w-[320px] sm:w-[1920px] sm:mt-[105px] mt-[100px] bg-gray-100 text-gray-600 shadow-lg sm:-ml-40 ">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap md:text-left text-center items-start">
            {/* Logo and Social Links */}
            <div className="w-[320px] sm:w-[1920px] md:w-1/4 mb-4">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <Image src={Logo} alt="Logo" height={40} width={168} />
              </a>
              <p className="mt-4 text-sm text-gray-500">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis
                interdum. Cras egestas purus
                <div className="flex justify-start mt-2 space-x-2 text-gray-600">
                  <FaFacebook />
                  <FaTwitter />
                  <IoLogoInstagram />
                  <FaPinterest />
                  <FaYoutube />
                </div>
              </p>
            </div>
            {/* Categories */}
            <div className="w-full md:w-1/4 mb-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-4">
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
            <div className="w-full md:w-1/4 mb-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Support
              </h2>
              <nav className="list-none mb-4">
                <li>
                  <a className="text-black hover:text-gray-800">
                    Help & Support
                  </a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-black hover:text-gray-800">Help</a>
                </li>
              </nav>
            </div>
            {/* Newsletter */}
            <div className="w-full md:w-1/4 mb-4">
              <h2 className="title-font font-medium text-[#9A9CAA] tracking-widest text-sm mb-3">
                NEWSLETTER
              </h2>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full bg-gray-100 rounded border border-gray-300 text-gray-700 py-1 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
                <button className="ml-2 text-white bg-[#029FAE] py-2 px-4 rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Bitters chicharrones fanny pack waistcoat green juice
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container px-5 py-4 mx-auto flex items-center justify-center">
            <p className="text-sm text-gray-500">
              © 2024 - Designed & Developed by Zakirsoft
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
