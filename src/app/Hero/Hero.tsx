import React from "react";
import Image from "next/image";
import Logo from "../../app/image/Logo.png";
import { PiShoppingCartBold } from "react-icons/pi";
import No from "../../app/image/No.png";
import { Button } from "@/src/components/ui/button";
import product from "../../app/image/product.png";
import Logo1 from "../../app/image/Logo1.png";
import Logo2 from "../../app/image/Logo2.png";
import Logo3 from "../../app/image/Logo3.png";
import Logo4 from "../../app/image/Logo4.png";
import Logo5 from "../../app/image/Logo5.png";
import Logo6 from "../../app/image/Logo6.png";
import Logo7 from "../../app/image/Logo7.png";
import Item1 from "../../app/image/Item1.png";
import Item2 from "../../app//image/Item2.png";
import Item3 from "../../app/image/Item3.png";
import Item4 from "../../app/image/Item4.png";
import Item5 from "../../app/image/Item5.png";
import Item6 from "../../app/image/Item6.png";
import Item7 from "../../app/image/Item7.png";
import Item8 from "../../app/image/Item8.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Category from "../../app/image/Category.png";
import C2 from "../../app/image/C2.png";
import C3 from "../../app/image/C3.png";
import hotCategory from "../../app/image/hotCategory.png";
import Link from "next/link";
import Footer from "../Footer/Footer";
const productDetail = { id: "D24vb8qimRxTY37EypHlwx" }; // Example hardcoded value

const Hero = () => {
  return (
    <div>
      {/* Top Header */}
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

      {/* Hero Section */}
      <div className="w-full h-[850px] gap-0 rounded-b-[48px] bg-[#F0F2F3]  relative">
        {/* Hero Content Section */}
        <div className="w-full h-auto absolute top-[40%] md:top-[600px] lg:top-[300px] left-[5%] sm:left-[10%]  gap-0 rounded-tl-[8px] mt-4 sm:mb-40">
          <p className="font-sans text-black">Welcome to chairy</p>
          <p className="sm:text-5xl text-2xl font-sans font-bold mt-4">
            Best Furniture
          </p>
          <p className="sm:text-5xl text-1xl font-sans font-bold">
            Collection For Your Interior.
          </p>
          <Button
            className="w-[171px] h-[52px] mt-9 bg-[#029FAE] hover:bg-cyan-400 text-white font-sans"
            variant="outline"
          >
            Shop Now
          </Button>
        </div>
        {/* Main Product Image */}
        <div className="w-[200px] h-[584px] sm:w-[434px] sm:h-[584px] absolute top-[50px] sm:top-[115px] left-[5%] sm:left-[15%] md:left-[30%] lg:left-[60%] mt-4 sm:mt-0">
          <Image src={product} alt="Product" height={584} width={434} />
        </div>
      </div>

      {/* Companies Logos */}
      <div className="flex justify-between w-full h-auto lg:w-full absolute top-[1107px] left-0 md:-left-0  flex-wrap gap-0 md:gap-0 lg:gap-2">
        <Image
          src={Logo1}
          alt="Logo 1"
          height={87}
          width={85}
          className="h-auto mt-4 sm:mt-0"
        />
        <Image
          src={Logo2}
          alt="Logo 2"
          height={109}
          width={107}
          className="h-auto mt-4 sm:mt-0"
        />
        <Image
          src={Logo3}
          alt="Logo 3"
          height={139}
          width={135}
          className="h-auto mt-4 sm:mt-0"
        />
        <Image
          src={Logo4}
          alt="Logo 4"
          height={66}
          width={64}
          className="h-auto mt-4 sm:mt-0"
        />
        <Image
          src={Logo5}
          alt="Logo 5"
          height={101}
          width={98}
          className="h-auto mt-4 sm:mt-0"
        />
        <Image
          src={Logo6}
          alt="Logo 6"
          height={115}
          width={113}
          className="h-auto mt-4 sm:mt-0"
        />
        <Image
          src={Logo7}
          alt="Logo 7"
          height={87}
          width={84}
          className="h-auto mt-4 sm:mt-0"
        />
      </div>

      {/* Features Page */}
      <div className="w-full mt-96 sm:mt-44 px-4 lg:px-[80px] py-8">
        {/* Section Title */}
        <div className="w-full h-auto text-[24px] sm:text-[32px] font-sans font-semibold mb-8">
          <h1 className="text-[24px] sm:text-[32px] font-sans font-semibold mt-14">
            Featured Products
          </h1>
        </div>

        {/* Products Container */}
        <div className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-center lg:justify-start gap-8">
          {/* Product 1 */}
          <div className="w-full sm:w-[312px] h-auto">
            <Image
              src={Item1}
              alt="Library Stool Chair"
              height={312}
              width={330}
              className="w-full h-auto"
            />
            <p className="block text-sm text-[#007580] mt-4">
              Library Stool Chair
            </p>
            <p className="text-xs text-black">$20</p>
            <div className="w-[44px] h-[44px] bg-[#007580] rounded-sm flex justify-center items-center text-white mt-2 ml-auto">
              <HiOutlineShoppingCart />
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-full sm:w-[312px] h-auto">
            <Image
              src={Item2}
              alt="Library Stool Chair"
              height={315}
              width={330}
              className="w-full h-auto"
            />
            <p className="block text-sm text-[#007580] mt-4">
              Library Stool Chair
            </p>
            <p className="text-xs text-black">$20</p>
            <div className="w-[44px] h-[44px] bg-[#F0F2F3] rounded-sm flex justify-center items-center text-black mt-2 ml-auto">
              <HiOutlineShoppingCart />
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-full sm:w-[312px] h-auto">
            <Image
              src={Item3}
              alt="Library Stool Chair"
              height={315}
              width={330}
              className="w-full h-auto"
            />
            <p className="block text-sm text-[#007580] mt-4">
              Library Stool Chair
            </p>
            <p className="text-xs text-black">$20</p>
            <div className="w-[44px] h-[44px] bg-[#F0F2F3] rounded-sm flex justify-center items-center text-black mt-2 ml-auto">
              <HiOutlineShoppingCart />
            </div>
          </div>

          {/* Product 4 */}
          <div className="w-full sm:w-[312px] h-auto">
            <Image
              src={Item4}
              alt="Library Stool Chair"
              height={312}
              width={330}
              className="w-full h-auto"
            />
            <p className="block text-sm text-[#007580] mt-4">
              Library Stool Chair
            </p>
            <p className="text-xs text-black">$20</p>
            <div className="w-[44px] h-[44px] bg-[#F0F2F3] rounded-sm flex justify-center items-center text-black mt-2 ml-auto">
              <HiOutlineShoppingCart />
            </div>
          </div>
        </div>
      </div>

      {/* Top Categories */}
      <div className="w-full h-auto  text-white lg:ml-0 md:ml-0 xl:ml-16 ">
        <h1 className="text-[32px] font-sans font-semibold text-black text-center sm:text-left">
          Top categories
        </h1>
        <div className="flex flex-col sm:flex-row gap-7 mt-9 items-center sm:justify-start px-4 sm:px-0">
          <div className="w-full sm:w-[424px] h-auto">
            <Image src={Category} alt="Category 1" height={424} width={424} />
          </div>
          <div className="w-full sm:w-[424px] h-auto">
            <Image src={C2} alt="Category 2" height={424} width={424} />
          </div>
          <div className="w-full sm:w-[424px] h-auto">
            <Image src={C3} alt="Category 3" height={424} width={424} />
          </div>
        </div>
      </div>

      {/* Stylish Chair Section */}
      <div className="w-full h-auto  px-8 ">
        <div className="w-full h-auto">
          <Image
            src={hotCategory}
            alt="Stylish Chair"
            height={648}
            width={1320}
            className="rounded-md w-full h-auto"
          />
        </div>
      </div>

      {/* Our Products */}
      <div className="w-full h-auto relative px-4 sm:px-8 lg:px-20">
        <div className="w-full h-auto">
          {/* Section Title */}
          <h1 className="text-center text-[24px] sm:text-[28px] lg:text-[32px] font-sans font-semibold">
            Our Products
          </h1>

          {/* Product Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {/* Product Cards */}
            {[Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8].map(
              (item, index) => (
                <div
                  key={index}
                  className="w-full h-auto p-4 bg-white shadow-sm rounded-lg"
                >
                  <Image
                    src={item}
                    alt={`Product ${index + 1}`}
                    height={312}
                    width={330}
                    className="w-full h-auto rounded-md object-cover"
                  />
                  <p className="text-sm text-[#007580] mt-4">
                    Library Stool Chair
                  </p>
                  <p className="text-xs text-black">$20</p>
                  <div className="relative">
                    <Link
                      href="/Cart"
                      className="w-[44px] h-[44px] absolute bg-[#007580] flex justify-center items-center text-white rounded-sm -mt-8 right-0"
                    >
                      <HiOutlineShoppingCart />
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
