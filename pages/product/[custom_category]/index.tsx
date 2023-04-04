import CustomListingPage from "@/components/Layouts/CustomListingPage";
import FoodHeader from "features/Food/FoodHeader";
import { useRouter } from "next/router";
import React from "react";

const CustomCategory = () => {
  const router = useRouter();
  const categoryName = router.asPath;
  return (
    <div>
      <FoodHeader />
      <CustomListingPage category={categoryName} />
    </div>
  );
};

export default CustomCategory;
