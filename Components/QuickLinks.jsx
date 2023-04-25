import React from 'react'
import Link from "next/link";

export default function QuickLinks() {
  return (
    <div className=" text-primary-contrast font-bodyText items-center justify-center align-middle bg-primary md:pb-6 sticky">
      <div className="static z-50 bg-primary">
        <div className="md:pt-6 md:pl-12">
          <h3 className="p-2">Quick Links</h3>
        </div>

        <div className="md:px-24 p-2 sm:flex flex-row">
          <div className="capitalize max-w-sm">
            <h4 className="">Resources</h4>
            <ul className=" text-primary-contrast block p-1">
              <li>
                <Link href="/curriculum-vitae" className="hover:text-tertiary">
                  curriculum vitae
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-tertiary">
                  blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-tertiary">
                  contact
                </Link>
              </li>
              <li>
                <Link href="/release" className="hover:text-tertiary">
                  release history
                </Link>
              </li>
            </ul>
          </div>

          <div className="capitalize sm:ml-4 md:ml-16 max-w-sm">
            <h4 className=""><sup>*</sup>White-label Services</h4>
            <ul className=" text-primary-contrast block p-1">
              <li>
                <Link href="/contact" className="hover:text-tertiary">
                  Webflow Site $6k+ (inc GST)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-tertiary">
                  Wix Site $6k+ (inc GST)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-tertiary">
                  Wordpress Site $6k+ (inc GST)
                </Link>
              </li>
            </ul>
          </div>

          <div className="capitalize sm:ml-4 md:ml-16 max-w-sm">
            <h4 className=""><sup>*</sup>Bespoke Services</h4>
            <ul className=" text-primary-contrast block p-1">
              <li>
                <Link href="/contact" className="hover:text-tertiary">
                  Full Website $11k+ AUD(inc GST)<p>NextJS Framework based</p>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-tertiary">
                  1-Hour Consultation $275 p/hour (inc GST)
                </Link>
              </li>
            </ul>
          </div>

          <div className="capitalize sm:ml-4 md:ml-16 max-w-sm">
            <h4 className="">Legal</h4>
            <ul className=" text-primary-contrast block p-1">
              <li>
                <Link href="/privacy-policy" className="hover:text-tertiary">
                  privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-tertiary">
                  terms and conditions
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="md:px-24 md:pb-6 p-2 sm:flex flex-row">
          <p className="text-xs"><sup>*</sup>Terms, Conditions, 3rd-party fees and other charges may apply.</p>
        </div>
      </div>
    </div>
  )
}






