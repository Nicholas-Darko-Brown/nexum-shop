import React from "react";
import Image from "next/image";
import LoginHeaderPhoto from "@/public/images/close-up.jpg";

const LoginHeader = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0" style={{ top: "40%", left: "10%", fontWeight: "bold", fontSize: "2rem" }}>
        <span className="">Login</span>
      </div>
      <Image
        src={LoginHeaderPhoto}
        className="object-cover h-full w-full"
        style={{ height: "300px" }}
        alt="login header photo"
      />
    </div>
  );
};

export default LoginHeader;
