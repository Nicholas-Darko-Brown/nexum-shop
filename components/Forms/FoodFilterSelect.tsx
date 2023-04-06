import React from "react";
import CustomButton from "../Buttons/CustomButton";
import CustomCheckbox from "./CustomCheckbox";
import { useRouter } from "next/router";

const FoodFilter = () => {
  const router = useRouter();
  const foodCategory = router.asPath.includes("food");
  const getCategoryPath = router.asPath.includes("food" || "cosmetics");
  return (
    <>
      <form className="w-full">
        <label htmlFor=""></label>
        <select
          name=""
          id=""
          className="w-full p-2 border border-black rounded"
        >
          <option value="best matches">Best Matches</option>
        </select>

        <div className="my-4">
          <CustomButton
            text="Remove all Filters"
            type="submit"
            className="border border-black w-full py-2 rounded"
          />
        </div>

        {getCategoryPath && (
          <div className="border border-black w-full py-2 rounded my-4">
            <h3 className="font-semibold pl-2 pb-2">Category</h3>
            <hr />
            <div className="pl-5 pt-2 space-y-2">
              <CustomCheckbox
                label={foodCategory ? "Fruit Juice" : "Cream & Lotion"}
                id="fruit juice"
                type="radio"
                name="category"
              />
              <CustomCheckbox
                label={foodCategory ? "Wines" : "Perfume"}
                id="wines"
                type="radio"
                name="category"
              />
            </div>
          </div>
        )}

        <div className="border border-black w-full py-2 rounded mt-4">
          <h3 className="font-semibold pl-2 pb-2">Price</h3>
          <hr />
          <div className="pl-5 pt-2 space-y-2">
            <CustomCheckbox
              label="$0 - $19.99"
              id="low"
              type="radio"
              name="price"
            />
            <CustomCheckbox
              label="$20 - $49.99"
              id="moderate"
              type="radio"
              name="price"
            />
            <CustomCheckbox
              label="$50 - $99.99"
              id="high"
              type="radio"
              name="price"
            />
            <CustomCheckbox
              label="$100 - $499.99"
              id="expensive"
              type="radio"
              name="price"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default FoodFilter;
