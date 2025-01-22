"use client";

import React, { useEffect, useState } from "react";
import { useCart } from "@/src/app/Context/CartContext"; // Adjust the path as needed
import { client } from "@/src/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { useParams, useRouter } from "next/navigation";
import Header from "../../Header/Header";
import Link from "next/link";
import Image from "next/image";
import { PiShoppingCartBold } from "react-icons/pi";
import No from "../../image/No.png";
import Logo from "../../image/Logo.png";
import Footer from "../../Footer/Footer";

const builder = imageUrlBuilder(client);
const urlFor = (source: Product["image"]["asset"]) =>
  builder.image(source).url();
interface Product {
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

const ProductDetail: React.FC = () => {
  const { addToCart } = useCart();
  const router = useRouter();
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await client.fetch(
          `*[_type == "products" && _id == $id][0]`,
          { id: params?.id }
        );
        setProduct(fetchedProduct);

        // Fetch featured products
        const fetchedFeaturedProducts = await client.fetch(
          `*[_type == "products" && _id != $id][0..3]`,
          { id: params?.id }
        );
        setFeaturedProducts(fetchedFeaturedProducts);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [params?.id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        _id: product._id,
        name: product.title,
        price: product.price,
        quantity: 1,
        image: undefined,
      });

      router.push("/Cart"); // Redirect to Shop page
    }
  };

  if (!product) return <div>Loading...</div>;

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
            href="/Shop"
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
      <div className="container mx-auto px-6 py-10">
        {/* Product Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <img
              src={urlFor(product.image.asset)}
              alt={product.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-2xl text-green-600 font-semibold mb-4">
              ${product.price.toFixed(2)} USD
            </p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <button
              onClick={handleAddToCart}
              className="bg-[#029FAE] text-white px-6 py-3 rounded-md hover:bg-[#66acb3] transition"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Featured Products Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg shadow-md p-4"
              >
                <img
                  src={urlFor(product.image.asset)}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
