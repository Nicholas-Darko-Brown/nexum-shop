import { useRouter } from "next/router";
import React from "react";

const Breadcrumb = () => {
  const router = useRouter();
  const pathname = router.query.custom_category as string;
  const formattedPathname =
    pathname?.charAt(0).toUpperCase() + pathname?.slice(1);

  return (
    <div>
      <span>
        Home / <span className="text-gray-400">{formattedPathname}</span>{" "}
      </span>
    </div>
  );
};

export default Breadcrumb;
