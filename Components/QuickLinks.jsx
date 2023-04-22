import React from 'react'
import Link from "next/link";

export default function QuickLinks() {
  return (
    <div className="flew-col text-primary-contrast font-bodyText min-h-[16vh] items-center justify-center align-middle bg-primary">
      
      <div className="md:pt-6 md:pl-12">
        <h3 className="p-2">Quick Links</h3>
      </div>

      <div className="md:px-24 md:pb-6 flex flex-row">
        <div className="capitalize text-sm">
          <h4 className="">Resources</h4>
            <p>
              <Link href="/curriculum-vitae" className="border-primary-contrast border-b border-dotted">
                <div className="hover:text-tertiary text-primary-contrast block p-1">
                  curriculum vitae
                </div>
              </Link>
            </p>
            <p>
              <Link href="/blog" className="border-primary-contrast border-b border-dotted">
                <div className="hover:text-tertiary text-primary-contrast block p-1">
                  blog
                </div>
              </Link>
            </p>
            <p>
              <Link href="/contact" className="border-primary-contrast border-b border-dotted">
                <div className="hover:text-tertiary text-primary-contrast block p-1">
                  contact
                </div>
              </Link>
            </p>
            <p>
              <Link href="/release" className="border-primary-contrast border-b border-dotted">
                <div className="hover:text-tertiary text-primary-contrast block p-1">
                  release history
                </div>
              </Link>
            </p>
        </div>
        <div className="capitalize text-sm sm:ml-32">
          <h4 className="">Legal</h4>
            <p>
              <Link href="/privacy-policy" className="border-primary-contrast border-b border-dotted">
                <div className="hover:text-tertiary text-primary-contrast block p-1">
                  privacy policy
                </div>
              </Link>
            </p>
            <p>
              <Link href="/terms-and-conditions" className="border-primary-contrast border-b border-dotted">
                <div className="hover:text-tertiary text-primary-contrast block p-1">
                  terms and conditions
                </div>
              </Link>
            </p>
        </div>

      </div>
    </div>
  )
}

