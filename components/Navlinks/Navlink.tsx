import Link from "next/link";
import React from "react";
import { useFetchCategories } from "services/categories";

const Navlink = () => {
  const { data, isLoading } = useFetchCategories()
  console.log("data", data)

  return (
    <>
      <nav className="bg-black text-gray-300 hidden md:block">
        <ul className="flex gap-10 w-[88%] py-3 sm:w-10/12 mx-auto">
          <Link href="/">
            <li className="hover:text-white">Home</li>
          </Link>
          <li className="hover:text-white">New Arrivals</li>
          <Link href="/food">
            <li className="hover:text-white">Food</li>
          </Link>
          <li className="hover:text-white">Cosmetics</li>
          <li className="hover:text-white">Top Deals</li>
          <li className="hover:text-white">Best Sellers</li>
        </ul>
      </nav>
    </>
  );
};

export default Navlink;
