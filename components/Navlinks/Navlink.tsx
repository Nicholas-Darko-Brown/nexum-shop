import Link from "next/link";
import React from "react";
import { useFetchCategories } from "services/categories";

const Navlink = () => {
  const { data } = useFetchCategories();

  return (
    <>
      <nav className="bg-black text-neutral-300 hidden md:block">
        <ul className="flex gap-5 w-[88%] py-3 sm:w-10/12 mx-auto">
          {data?.elements.slice(1, -4).map((category) => (
            <li key={category.id} className="hover:text-white hover:underline sm:text-[12px] lg:text-sm">
              <Link href={`/product/${category.name.toLowerCase()}`}>
              {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* <nav className="bg-black text-gray-300 hidden md:block">
        <ul className="flex gap-10 w-[88%] py-3 sm:w-10/12 mx-auto">
          <Link href="/">
            <li className="hover:text-white">Home</li>
          </Link>
          <li className="hover:text-white">New Arrivals</li>
          <Link href="/food">
            <li className="hover:text-white">Food</li>
          </Link>
          <Link href="/cosmetics">
            <li className="hover:text-white">Cosmetics</li>
          </Link>
          <li className="hover:text-white">Top Deals</li>
          <li className="hover:text-white">Best Sellers</li>
        </ul>
      </nav> */}
    </>
  );
};

export default Navlink;
