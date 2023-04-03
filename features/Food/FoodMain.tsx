import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import React from "react";

const FoodMain = () => {
  return (
    <div>
      <Breadcrumb />
      <hr />
      <div
        className="border border-red-600 p-2 grid grid-cols-1 md:grid-cols-4 w-full"
        // style={{ gridTemplateColumns: "1fr 3fr" }}
      >
        <div className="border border-green-600 hidden md:block">left
        </div>
        <div className="block md:hidden">menu</div>
        <div className="border border-blue-600 col-span-2 md:col-span-3">right</div>
      </div>
    </div>
  );
};

export default FoodMain;
