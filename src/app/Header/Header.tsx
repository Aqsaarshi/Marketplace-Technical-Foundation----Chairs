import React from "react";
import Image from "next/image";
import check from "../../app/image/check.png";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full bg-[#272343]">
      <div className="flex flex-wrap justify-between items-center px-4 py-2 sm:px-6 lg:px-16">
        {/* Shipping Message */}
        <div className="flex items-center gap-2 text-center">
          <Image src={check} alt="Check Icon" height={16} width={16} />
          <p className="text-xs sm:text-sm text-white">
            Free shipping on all orders over $50
          </p>
        </div>

        {/* Accordion and Links */}
        <div className="flex flex-wrap items-center gap-4 text-white text-xs sm:text-sm">
          {/* Language Selector */}
          <Accordion type="single" collapsible className="relative">
            <AccordionItem value="item-1">
              <AccordionTrigger>Eng</AccordionTrigger>
              <AccordionContent>Urdu</AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* FAQ and Help Links */}
          <div className="flex items-center gap-2">
            <Link href="/Faq" className="hover:underline">
              FAQs
            </Link>
            <AiOutlineExclamationCircle />
            <Link href="/contact" className="hover:underline">
              Need Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
