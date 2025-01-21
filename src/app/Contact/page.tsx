import React from "react";
import Image from "next/image";
import Header from "../Header/Header";
import Logo from "../../app/image/Logo.png";
import No from "../../app/image/No.png";
import { PiShoppingCartBold } from "react-icons/pi";
import group from "../../app/image/group.png";
import waranty from "../../app/image/waranty.png";
import Link from "next/link";
import Footer from "../Footer/Footer";
const productDetail = { id: "D24vb8qimRxTY37EypHlwx" }; // Example hardcoded value

const page = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <Header />
      <div className="w-full h-[84px] px-2 sm:px-[20px] md:px-[30px] lg:px-[40px] py-[20px] flex flex-row sm:flex-row justify-between items-center bg-[#F0F2F3]">
        <Image
          src={Logo}
          height={40}
          width={166}
          alt="Logo"
          className="ml-[20px] sm:ml-0"
        />
        <a
          href="/Cart"
          className="flex items-center w-[120px] h-[44px] px-[18px] py-[11px] gap-[12px] rounded-tl-[8px] bg-white relative z-10 mt-4 sm:mt-0 sm:w-auto sm:ml-0 sm:mr-0 ml-[10px] mr-[10px]"
        >
          <PiShoppingCartBold className="h-[40px] w-[40px]" />
          <p>Cart</p>
          <Image src={No} alt="No Items" height={30} width={30} />
        </a>
      </div>
      <div className="w-full  h-[74px] px-6 sm:px-[120px] py-[14px] flex justify-between items-center ">
        {/* Navigation Links */}
        <nav className="w-full sm:w-[339px] flex flex-wrap items-center text-base ">
          <a
            href="/"
            className="mr-5 hover:text-slate-400 font-Inter text-[#007580]"
          >
            Home
          </a>
          <a
            href="/Cart"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            Shop
          </a>
          <a
            href="/Product"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            Product
          </a>
          <Link
            href={`/Product/${productDetail.id}`}
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            Pages
          </Link>
          <a
            href="/About"
            className="mr-5 hover:text-slate-400 font-Inter text-[#636270]"
          >
            About
          </a>
        </nav>
        {/* Contact Info */}
        <a href="/Contact" className="text-black ml-auto hover:text-slate-400">
          Contact: (808) 555-0111
        </a>
      </div>
      <div className="border-t border-gray-300 w-full my-4 sm:my-6 lg:my-8"></div>

      {/* Contact Section */}
      <section className="w-full text-gray-600 body-font relative px-4 sm:px-8">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-sans text-center font-bold mt-7">
          Get In Touch With Us
        </h1>
        <p className="text-center font-sans mt-4 sm:mt-7 text-sm sm:text-base">
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us
          <br className="hidden sm:block" /> An Email. Our Staff Will Always Be
          There To Help You. Do Not Hesitate!
        </p>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-8 py-12 flex flex-wrap items-start justify-center gap-10">
          {/* Image */}
          <Image
            src={group}
            alt="Group"
            height={537}
            width={393}
            className="rounded-lg w-full sm:w-auto max-w-[90%] sm:max-w-[393px]"
          />

          {/* Form */}
          <div className="w-full sm:w-[480px] bg-white flex flex-col p-6 shadow-lg rounded-lg">
            <h2 className="text-gray-900 text-lg sm:text-xl mb-2 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-4 text-gray-600 text-sm sm:text-base">
              Post-ironic portland shabby chic echo park, banjo fashion axe.
            </p>
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full h-[50px] bg-white rounded border border-gray-300 focus:border-[#029FAE] focus:ring-2 focus:ring-[#029FAE]/50 text-base outline-none text-gray-700 py-1 px-3"
              />
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full h-[50px] bg-white rounded border border-gray-300 focus:border-[#029FAE] focus:ring-2 focus:ring-[#029FAE]/50 text-base outline-none text-gray-700 py-1 px-3"
              />
            </div>
            {/* Message Input */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full h-32 bg-white rounded border border-gray-300 focus:border-[#029FAE] focus:ring-2 focus:ring-[#029FAE]/50 text-base outline-none text-gray-700 py-1 px-3 resize-none"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button className="h-[50px] w-full text-white bg-[#029FAE] border-0 py-3 px-6 focus:outline-none hover:bg-[#93dce2] rounded text-lg font-sans">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Warranty Image */}
      <div className="w-full px-4 sm:px-8 flex justify-center mt-10">
        <Image
          src={waranty}
          alt="Warranty"
          width={1320}
          height={270}
          className="rounded-lg w-full max-w-[1320px] h-auto"
        />
      </div>
      <Footer />

      {/* Footer */}
    </div>
  );
};

export default page;
