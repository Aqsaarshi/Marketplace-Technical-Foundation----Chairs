"use client";

import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/src/sanity/lib/client";
import Header from "../Header/Header";
import { PiShoppingCartBold } from "react-icons/pi";
import Image from "next/image";
import Logo from "../../image/Logo.png";
import No from "../../image/No.png";
import Footer from "../Footer/Footer";

const builder = imageUrlBuilder(client);

const urlFor = (source: any) => builder.image(source).url();

interface Product {
  type: string;
  _id: string;
  name: string;
  description: string;
  price: number;
  image: {
    asset: {
      _ref: string;
    };
  };
}

const ProductDetail: React.FC = () => {
  // Access addToCart from CartContext
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false); // Flag to check client-side rendering
  const [id, setId] = useState<string | null>(null); // Store dynamic product ID

  useEffect(() => {
    setIsClient(true); // Set client flag to true after mounting
  }, []);

  useEffect(() => {
    if (isClient) {
      const currentUrl = window.location.href;
      const idFromUrl = currentUrl.split("/").pop();
      setId(idFromUrl || null);
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient && id) {
      const fetchProduct = async () => {
        try {
          const fetchedProduct = await client.fetch(
            `*[_type == "products" && _id == $id][0]`,
            { id }
          );
          setProduct(fetchedProduct);
        } catch (error) {
          console.error("Error fetching product:", error);
          setError("Failed to fetch product details. Please try again later.");
        }
      };

      fetchProduct();
    }
  }, [id, isClient]);

  if (error) return <div>{error}</div>;
  if (!product) return <div>Loading...</div>;

  function addToCart(arg0: {
    _id: string;
    name: string;
    price: number;
    quantity: number;
  }) {
    throw new Error("Function not implemented.");
  }

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
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-stretch px-5 py-24">
          <div className="lg:max-w-lg lg:w-1/2 md:w-1/2 w-full mb-8 md:mb-0 flex justify-center items-center">
            {product.image?.asset ? (
              <img
                className="object-cover object-center rounded w-full h-full max-h-96"
                alt={product.name || "Product Image"}
                src={urlFor(product.image.asset)}
              />
            ) : (
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-md">
                No Image Available
              </div>
            )}
          </div>
          <div className="lg:flex-grow lg:w-1/2 w-full lg:pl-16 md:pl-10 flex flex-col justify-center">
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-bold font-sans text-gray-900">
              {product.name || "Library Stool"}
              <span className="block lg:inline">{product.type || "Chair"}</span>
            </h1>
            <div className="text-lg font-medium text-gray-700 mb-4">
              <span className="text-[#029FAE] font-bold">
                ${product.price || "0.00"} USD
              </span>
            </div>
            <p className="mb-6 leading-relaxed">{product.description}</p>
            <div className="flex">
              <button
                onClick={() => {
                  if (product) {
                    addToCart({
                      _id: product._id,
                      name: product.name,
                      price: product.price,
                      quantity: 1,
                    });
                  }
                }}
                className="inline-flex items-center text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#1f646a] rounded text-lg"
              >
                <PiShoppingCartBold className="mr-2" />
                Add to Cart
              </button>
              {/* Link to Cart page after adding to cart */}
              <a
                href="/Cart"
                className="inline-flex items-center text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#1f646a] rounded text-lg ml-4"
              >
                Go to Cart
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetail;
