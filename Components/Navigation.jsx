// pages/components/Navigation.js [Server Side]

import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <nav className="from-primary to-secondary sticky top-0 z-0 flex w-full items-center justify-center bg-gradient-to-r box-decoration-clone p-4 align-middle">
      <div className="text-primary-contrast w-full items-center justify-around capitalize sm:flex sm:gap-1 sm:text-lg">
        <Link href="/" className="border-primary-contrast border-b border-dotted">
          <div className="hover:text-tertiary flex items-center justify-start sm:justify-center p-1  sm:hover:-rotate-6">
            home
          </div>
        </Link>
        <Link href="/curriculum-vitae" className="border-primary-contrast border-b border-dotted">
          <div className="hover:text-tertiary flex items-center justify-start sm:justify-center p-1 sm:hover:-rotate-6">
            curriculum vitae
          </div>
        </Link>
        <Link href="/blog" className="border-primary-contrast border-b border-dotted">
          <div className="hover:text-tertiary flex items-center justify-start sm:justify-center p-1 sm:hover:-rotate-6">
            blog
          </div>
        </Link>
        <Link href="/contact" className="border-primary-contrast border-b border-dotted">
          <div className="hover:text-tertiary flex items-center justify-start sm:justify-center p-1 sm:hover:-rotate-6">
            contact
          </div>
        </Link>
      </div>
    </nav>
  );
}
