import React, { useState } from "react";
import CustomButton from "../Buttons/CustomButton";
import { MdClose } from "react-icons/md";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(false);

  const handleShowBanner = () => {
    setShowBanner(true);
  };

  return (
    <>
      {!showBanner && (
        <div className="bg-color-main-100 w-full h-full">
          <div className="text-white flex items-center justify-between px-2 w-11/12 mx-auto sm:w-10/12 sm:mx-auto">
            <div data-testid="emptyDiv" className=""></div>
            <div className="">
              <p role={"paragraph"} className="">
                We are offering discounts up to 50% off selected products
              </p>
            </div>
            <div className="">
              <CustomButton
                onClick={handleShowBanner}
                className="bg-black w-10 h-10 flex justify-center items-center"
                type="button"
                role={"button"}
              >
                <MdClose size={25} />
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
