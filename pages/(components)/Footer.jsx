// pages/components/Footer.js [Server Side]

import React from "react";
import Image from "next/image";
import git_image from "/public/images/pages/github-mark-white.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="from-primary to-secondary flex h-10 w-full justify-evenly bg-gradient-to-r box-decoration-clone">
      <div className="flex w-full items-center justify-end p-2 text-sm">
        <span className="text-tertiary">
        All Rights Reserved, Jeffrey Barron © 2023. 
        </span>
        <span className="ml-2">
          <Link href="https://github.com/jeffreybarron">
            <Image
              src={git_image}
              alt="Link to https://github.com/jeffreybarron"
              width={20}
              height={20}
              // height="h-auto"
              aria-label="github Logo"
            />
          </Link>
        </span>
      </div>
    </footer>
  );
}

{
  /* <div className="font-fancyText flex flex w-full w-full items-center justify-center justify-center  p-4 text-xs capitalize italic text-gray-300"></div> */
}
