"use client";

import React, { FormEvent, useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/src/sanity/lib/client";
import Link from "next/link";
import No from "../image/No.png";
import Logo from "../image/Logo.png";
import Image from "next/image";
import Header from "../Header/Header";
import { PiShoppingCartBold } from "react-icons/pi";
import Footer from "../Footer/Footer";
const productDetail = { id: "D24vb8qimRxTY37EypHlwx" }; // Example hardcoded value

const builder = imageUrlBuilder(client);

const urlFor = (source: any) => builder.image(source).url();

const getProductsFromSanity = async () => {
  try {
    const query = `*[_type=="products"][0..19]{
      _id,
      title,
      description,
      price,
      image {
        asset {
          _ref
        }
      }
    }`;
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching products: ", error);
    return [];
  }
};

interface Product {
  name: string | undefined;
  _id: string;
  title: string;
  description: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState(""); // Added state for email input

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProductsFromSanity();
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  // Filter products based on the search query
  const filteredProducts = (products || []).filter((product) => {
    const name = product.title ? product.title.toLowerCase() : "";
    const description = product.description
      ? product.description.toLowerCase()
      : "";

    return (
      name.includes(searchQuery.toLowerCase()) ||
      description.includes(searchQuery.toLowerCase())
    );
  });

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Thank you for subscribing with ${email}!`);
    setEmail(""); // Clear email input after submission
  };

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
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Product List from Sanity
        </h1>

        <div className="mb-6 px-6">
          <input
            type="text"
            placeholder="Search for products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow-lg p-4 bg-white"
            >
              <Link href={`/Product/${product._id}`}>
                {product.image?.asset ? (
                  <img
                    src={urlFor(product.image.asset)}
                    alt={product.title}
                    className="w-full h-60 object-cover rounded-md"
                  />
                ) : (
                  <div className="w-full h-60 bg-gray-200 flex items-center justify-center rounded-md">
                    No Image Available
                  </div>
                )}
                <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-lg font-bold mt-2">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
        {/* Subscribe Section */}
        <div className="mt-16 bg-gray-100 py-10 px-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Or Subscribe To The Newsletter
          </h2>
          <form
            onSubmit={handleSubscribe}
            className="max-w-md mx-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
            />
            <button
              type="submit"
              className="bg-[#029FAE] text-white px-6 py-3 rounded-md hover:bg-[#66acb3] transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Instagram Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Follow Products And Discounts On Instagram
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <div key={product._id} className="border rounded-lg shadow-md">
                <img
                  src={urlFor(product.image.asset)}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />{" "}
    </div>
  );
};

export default ProductList;
