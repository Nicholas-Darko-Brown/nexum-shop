import Image from "next/image";
import React, { useState } from "react";
import BlackLogo from "@/public/images/nexum-logo-black.png";
import CustomInputField from "../Forms/CustomInputField";
import { MdSearch, MdMenu, MdClose } from "react-icons/md";
import LanguageSwitcher from "../Forms/LanguageSwitcher";
import { RiShoppingBagFill } from "react-icons/ri";
import CustomButton from "../Buttons/CustomButton";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center my-3 w-[88%] mx-auto sm:w-10/12 sm:mx-auto">
        <div className="">
          <Image src={BlackLogo} width={150} alt="logo" />
        </div>

        <div className="relative hidden sm:block">
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

          <div className="mr-5 relative">
            <CustomButton className="relative" type="button">
              <RiShoppingBagFill size={25} color="gray" />
              <span className="absolute left-4 top-[0%] bg-color-main-100 w-4 h-4 text-[11px] flex justify-center items-center text-white rounded-full">
                0
              </span>
            </CustomButton>
          </div>
          {/* Large screen login */}
          <div className="">
            <CustomButton
              className="hidden  text-gray-500 sm:flex items-center gap-1"
              type="button"
            >
              <FaUserCircle /> Login
            </CustomButton>
          </div>
          {/* Mobile Menu */}
          <div className="block sm:hidden">
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
        <div className={`${showMenu ? "sm:hidden" : "block"}`}>
          <ul className="absolute z-10 right-7  bg-white border rounded shadow-sm w-[40%] pl-4 py-2">
            <li>
              <LanguageSwitcher />
            </li>
            <li className="pt-2">
              <CustomButton
                className="text-gray-500 flex items-center gap-1"
                type="button"
              >
                <FaUserCircle /> Login
              </CustomButton>
            </li>
          </ul>
        </div>
      )}
      {/* Mobile Input */}
      <div className="relative block w-full sm:hidden">
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
