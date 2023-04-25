// pages/components/Footer.js [Server Side]

import React from "react";
import NextImage from "next/image";
import git_image from "/public/pages/images/github-mark-white.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="from-primary via-secondary to-secondary-700 bg-gradient-to-r box-decoration-clone flex h-10 w-full justify-evenly sticky">
      <div className="z-50 flex w-full items-center justify-end p-2 text-sm ">
        <span className="text-tertiary xl:text-primary">
        All Rights Reserved, Jeffrey Barron © 2023. 
        </span>
        <span className="ml-2 object-contain">
          <Link href="https://github.com/jeffreybarron">
            <NextImage
              src={git_image}
              width={20}
              height={20}
              alt="Link to https://github.com/jeffreybarron"
              aria-label="github Logo"
            />
          </Link>
        </span>
      </div>
    </footer>
  );
}
