import React from "react";
import Link from "next/link";
import Image from "next/image";
import WhiteLogo from "@/public/images/nexum-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="grid gap-2 grid-cols-1 w-[88%] mx-auto py-10 sm:w-10/12 sm:mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="space-y-3">
          <Link href="/">
            <Image src={WhiteLogo} width={150} alt="logo" />
          </Link>
          <p className="text-gray-400">
            Nexum Shop is committed to giving you the best shopping experience
          </p>
        </div>
        <div className="">
          <ul className="space-y-2">
            <li className="font-bold text-xl">Account</li>
            <div className="text-gray-400 space-y-1">
              <li>My Account</li>
              <li>Check Order</li>
              <li>Wishlist</li>
              <li>My Cart</li>
            </div>
          </ul>
        </div>
        <div className="">
          <ul className="space-y-2">
            <li className="font-bold text-xl">Customer</li>
            <div className="text-gray-400 space-y-1">
              <li>Contact Us</li>
              <li>Gift Certificates</li>
              <li>Help</li>
              <li>Distribution</li>
            </div>
          </ul>
        </div>
        <div className="">
          <ul className="space-y-2">
            <li className="font-bold text-xl">About</li>
            <div className="text-gray-400 space-y-1">
              <li>About Us</li>
              <li>Imprint</li>
              <li>Privacy</li>
              <li>Terms</li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
