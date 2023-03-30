import React from "react";

const Navlink = () => {
  return (
    <>
      <nav className="bg-black text-gray-300 hidden md:block">
        <ul className="flex gap-10 w-[88%] py-3 sm:w-10/12 mx-auto">
          <li className="hover:text-white">Home</li>
          <li className="hover:text-white">New Arrivals</li>
          <li className="hover:text-white">Food</li>
          <li className="hover:text-white">Cosmetics</li>
          <li className="hover:text-white">Top Deals</li>
          <li className="hover:text-white">Best Sellers</li>
        </ul>
      </nav>
    </>
  );
};

export default Navlink;
