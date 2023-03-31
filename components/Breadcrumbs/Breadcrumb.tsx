import { useRouter } from "next/router";
import React from "react";

const Breadcrumb = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const formattedPathname =
    pathname.charAt(1).toUpperCase() + pathname.slice(2);

  return (
    <div>
      <span>
        Home / <span className="text-gray-400">{formattedPathname}</span>{" "}
      </span>
    </div>
  );
};

export default Breadcrumb;
