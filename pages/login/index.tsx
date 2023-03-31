import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import LoginHeader from "features/Login/LoginHeader";
import LoginMain from "features/Login/LoginMain";
import React from "react";

const LoginPage = () => {
  return (
    <div className="">
      <div className="">
        <LoginHeader />
      </div>
      <div className="w-[88%] mx-auto md:w-10/12 md:mx-auto">
        <div className="py-2">
          <Breadcrumb />
          <hr />
        </div>
        <div className="py-5">
          <LoginMain />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
