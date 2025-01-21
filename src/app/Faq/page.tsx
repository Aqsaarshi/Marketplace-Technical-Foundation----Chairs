import React from "react";
import Header from "../Header/Header";
import Image from "next/image";
import Logo from "../../app/image/Logo.png";
import { PiShoppingCartBold } from "react-icons/pi";
import No from "../../app/image/No.png";
import Link from "next/link";
import Footer from "../Footer/Footer";
const productDetail = { id: "D24vb8qimRxTY37EypHlwx" }; // Example hardcoded value

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
      <div className="border-t border-gray-300 w-full"></div>

      <div className="w-full max-w-full-xl mx-auto mt-16">
        {/* Your content here */}
        <div>
          <h1 className="text-4xl md:text-5xl text-black text-center font-sans font-bold ">
            Questions Looks Here
          </h1>
          <p className="text-sm text-black text-center mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <section className="body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-2">
              {/* Question 1 */}
              <div className="p-2 lg:w-1/2 w-full">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      What types of chairs do you offer?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
              {/* Question 2 */}
              <div className="p-2 lg:w-1/2 w-full">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      How can we get in touch with you?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
              {/* Question 3 */}
              <div className="p-2 lg:w-1/2 w-full">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Do your chairs come with a warranty?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
              {/* Question 4 */}
              <div className="p-2 lg:w-1/2 w-full">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      What will be delivered? And When?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
              {/* Question 5 */}
              <div className="p-2 lg:w-1/2 w-full">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Can I try a chair before purchasing?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
              {/* Question 6 */}
              <div className="p-2 lg:w-1/2 w-full">
                <div className="h-full flex items-center bg-[#F7F7F7] border-gray-200 border p-4 rounded-lg">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      How do I clean and maintain my Comforty chair?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi quis modi ullam amet debitis libero veritatis enim
                      repellat optio natus eum delectus deserunt, odit expedita
                      eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default page;
