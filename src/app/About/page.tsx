import React from "react";
import Header from "../Header/Header";
import { PiShoppingCartBold } from "react-icons/pi";
import Logo from "../image/Logo.png";
import Image from "next/image";
import No from "../../app/image/No.png";
import Link from "next/link";
import Frame1 from "../../app/image/Frame1.png";
import Frame2 from "../../app/image/Frame2.png";
import Frame3 from "../../app/image/Frame3.png";
import Frame4 from "../../app/image/Frame4.png";
import chair from "../../app/image/chair.png";
import Large from "../../app/image/Large.png";
import Photo from "../../app/image/Photo.png";
import Parent from "../../app/image/Parent.png";

import Footer from "../Footer/Footer";
const productDetail = { id: "D24vb8qimRxTY37EypHlwx" }; // Example hardcoded value

const page = () => {
  return (
    <div className="sm:overflow-x:hidden">
      <Header />
      {/* Header Section */}
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
      <div className="w-full  h-[74px] px-6 sm:px-[120px] py-[14px] flex justify-between items-center ">
        {/* Navigation Links */}
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
            href={`/Product/${productDetail.id}`}
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
        {/* Contact Info */}
        <Link
          href="/Contact"
          className="text-black ml-auto hover:text-slate-400"
        >
          Contact: (808) 555-0111
        </Link>
      </div>
      <div className="border-t border-gray-300  w-full"></div>
      <div className="w-full  bg-[#007580] sm:flex sm:items-center sm:justify-between sm:px-16 px-6 py-10 sm:py-20 relative">
        <div className="sm:w-1/2 text-center sm:text-left">
          <h2 className="text-white text-2xl sm:text-3xl font-sans font-bold">
            About Us - Comforty
          </h2>
          <p className="text-white mt-6 sm:mt-4 text-sm sm:text-base">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <button className="inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#87b3b7] rounded text-sm sm:text-lg mt-6">
            View All Collection
          </button>
        </div>
        <div className="hidden sm:block sm:w-1/2">
          <Image
            src={chair}
            alt="Chair"
            width={619}
            height={478}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>

      {/* Section */}
      <div className="text-center sm:text-left font-sans font-bold text-2xl sm:text-4xl mt-12 sm:mt-20">
        What makes our Brand Different
      </div>
      <div className="flex flex-wrap justify-center sm:justify-between gap-6 mt-8">
        {[Frame1, Frame2, Frame3, Frame4].map((frame, index) => (
          <div
            key={index}
            className="w-[90%] sm:w-[309px] bg-[#F9F9F9] p-4 rounded-lg flex justify-center"
          >
            <Image
              src={frame}
              alt={`Frame ${index + 1}`}
              height={148}
              width={213}
            />
          </div>
        ))}
      </div>

      {/* Product Section */}
      <div className="mt-20">
        <h2 className="text-center text-2xl sm:text-3xl font-sans font-semibold">
          Our Popular Products
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="w-[90%] sm:w-[630px]">
            <Image
              src={Large}
              alt="Product 1"
              width={630}
              height={375}
              className="rounded-lg"
            />
            <p className="mt-4 text-sm text-black">The Poplar suede sofa</p>
            <p className="text-xs text-black">$99.00</p>
          </div>
          {[Photo, Parent].map((product, index) => (
            <div key={index} className="w-[90%] sm:w-[330px]">
              <Image
                src={product}
                alt={`Product ${index + 2}`}
                width={330}
                height={315}
                className="rounded-lg"
              />
              <p className="mt-4 text-sm text-black">The Dandy chair</p>
              <p className="text-xs text-black">$99.00</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 w-full mt-20 sm:mt-40"></div>

      <Footer />
    </div>
  );
};

export default page;
