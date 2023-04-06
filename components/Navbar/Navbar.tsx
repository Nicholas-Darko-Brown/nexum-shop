import Image from "next/image";
import React, { useState } from "react";
import BlackLogo from "@/public/images/nexum-logo-black.png";
import CustomInputField from "../Forms/CustomInputField";
import { MdSearch, MdMenu, MdClose } from "react-icons/md";
import LanguageSwitcher from "../Forms/LanguageSwitcher";
import { RiShoppingBagFill } from "react-icons/ri";
import CustomButton from "../Buttons/CustomButton";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useAtom } from "jotai";
import { cartAtom } from "../Layouts/CustomListingPage";
import {BsTrash} from "react-icons/bs"

const Navbar = () => {
  const [cartItems, setCartItems] = useAtom(cartAtom)
  const { user, isLoading } = useUser();
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const handleRemoveItem = (id: string) => {
    const filteredItem = cartItems.filter((cartItem) => cartItem.id !== id)
    setCartItems(filteredItem)
  }

  const handleRemoveAllItems = () => {
    setCartItems([])
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center my-3 w-[88%] mx-auto md:w-10/12 md:mx-auto">
        <div className="">
          <Link href="/">
            <Image src={BlackLogo} width={150} alt="logo" />
          </Link>
        </div>

        <div className="relative hidden md:block">
          <CustomInputField
            className="border border-gray-400 rounded-sm pl-2 pr-6 py-1 relative w-72"
            placeholder="Search (keywords,brands,etc)"
          />
          <MdSearch
            size={20}
            color={"gray"}
            className="absolute left-[92%] top-2 cursor-pointer"
          />
        </div>

        <div className="flex items-center">
          <div className="mr-5 hidden sm:block">
            <LanguageSwitcher />
          </div>

          <div className="mr-5 relative w-full">
            <CustomButton
              onClick={handleShowCart}
              className="relative"
              type="button"
            >
              <RiShoppingBagFill size={25} color="gray" />
              <span className="absolute left-4 top-[0%] bg-color-main-100 w-4 h-4 text-[11px] flex justify-center items-center text-white rounded-full">
                0
              </span>
            </CustomButton>

            {showCart && <div className="z-50 absolute h-[60vh] overflow-y-auto right-0 bg-white w-96 border rounded shadow">
                <div className="m-3">
                  <h2 className="text-lg">Your shopping cart</h2>
                <div className="border-b pb-2 flex justify-between">
                  <span className="font-light"> {cartItems.length} {cartItems.length === 0 || cartItems.length === 1 ? "item" : "items"} in your cart.</span>
                  <button onClick={handleRemoveAllItems} className="text-red-600 flex gap-1 px-2 py-1 rounded items-center bg-red-100"><BsTrash /> Remove all</button>
                </div>
                </div>
                {cartItems.length === 0 ? <h1 className="font-light text-2xl text-center">No items in cart</h1> : 
                <div className="p-3">
                  {cartItems.map(item => (
                    <div key={item.id} className="w-full px-3 py-2 border mb-2 shadow rounded">
                      <div className="flex justify-between items-center">

                      <h3 className="text-lg font-medium pb-2">{item.name}</h3>
                      <div className="cursor-pointer text-red-600 bg-red-100 h-fit rounded">
                          <MdClose size={25} onClick={() => handleRemoveItem(item.id)} />
                        </div>
                      </div>
                      {/* image & quantity */}
                      <div className="flex justify-between">
                        <div className="flex space-x-2">
                        <div className="bg-color-main-200 rounded">
                          <img src={item.image} className="w-32 h-40 object-cover" alt={item.name} />
                        </div>
                        <div className="">
                          <p>Quantity: {item.quantity}</p>
                      <div className="">
                        <span className="font-bold text-lg text-color-main-100">${(item.price)*(item.quantity)}</span>
                      </div>
                        </div>
                        </div>

                      </div>
                      {/* price */}
                    </div>
                  ))}
                </div>
}
              </div>}
          </div>
          {/* Large screen login */}
          <div className="">
            {!isLoading && !user && (
              <Link href={"/login"}>
                <CustomButton
                  className="hidden text-gray-500 hover:text-black md:flex items-center gap-1"
                  type="button"
                >
                  <FaUserCircle /> Login
                </CustomButton>
              </Link>
            )}
            {user && (
              <div className="relative hidden md:block">
                <Image
                  onClick={handleShowProfile}
                  src={user.picture!}
                  width={40}
                  height={40}
                  className="object-cover rounded-full shadow cursor-pointer relative"
                  alt={""}
                />
                {showProfile && (
                  <div className="absolute z-20 right-2 bg-white shadow rounded p-2">
                    <ul className="space-y-2">
                      {/* <li>{user.name}</li> */}
                      <li className="font-medium cursor-pointer">
                        {user.email}
                      </li>
                      <hr />
                      <Link href="/api/auth/logout">
                        <li className="cursor-pointer">Logout</li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Mobile Menu */}
          <div className="block md:hidden">
            <CustomButton onClick={handleShowMenu} className="" type="button">
              {!showMenu ? (
                <MdMenu color="gray" size={30} />
              ) : (
                <MdClose color="gray" size={30} />
              )}
            </CustomButton>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className={`${showMenu ? "md:hidden" : "block"}`}>
          <ul className="absolute z-10 right-7  bg-white border rounded shadow-sm w-[50%] p-2 space-y-1">
            <Link onClick={handleShowMenu} href="/">
              <li className="hover:font-bold cursor-pointer">Home</li>
            </Link>
            <li className="hover:font-bold cursor-pointer">New Arrivals</li>
            <li className="hover:font-bold cursor-pointer">Food</li>
            <li className="hover:font-bold cursor-pointer">Cosmetics</li>
            <li className="hover:font-bold cursor-pointer">Top Deals</li>
            <li className="hover:font-bold cursor-pointer">Best Sellers</li>
            <hr />
            <li>
              <LanguageSwitcher />
            </li>
            <hr />
            <li onClick={handleShowMenu} className="">
              {!isLoading && !user && (
                <Link href="/login">
                  <CustomButton
                    className="text-gray-500 flex items-center gap-1 hover:text-black"
                    type="button"
                  >
                    <FaUserCircle /> Login
                  </CustomButton>
                </Link>
              )}
              {user && (
                <div className="relative">
                  <span className="font-medium">{user.name}</span>
                  <hr />
                  <Link href="/api/auth/logout">
                    <li className="cursor-pointer">Logout</li>
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
      {/* Mobile Input */}
      <div className="relative block w-full md:hidden">
        <CustomInputField
          className="border border-black rounded-sm pl-2 pr-6 py-1 relative w-full"
          placeholder="Search (keywords,brands,etc)"
        />
        <MdSearch
          size={20}
          color={"gray"}
          className="absolute right-0 top-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
