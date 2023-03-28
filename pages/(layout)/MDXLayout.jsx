// layout/PageLayout.js
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";

import { Montserrat, Dancing_Script } from "next/font/google";
const bodyText = Montserrat({
  variable: "--font-bodytext",
  subsets: ["latin"],
});
const fancyText = Dancing_Script({
  variable: "--font-fancytext",
  subsets: ["latin"],
});

import Navigation from "../(components)/Navigation";
import Footer from "../(components)/Footer";
import { Heading, Pre, Lists } from "../(components)/MDXStyle";
import Para from "../(components)/MDXStyle";
const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  p: Para,
  pre: Pre.PRE,
  code: Pre.CODE,
  li: Lists.LI,
  ul: Lists.UL,
  ol: Lists.OL,  
};

export default function PagesLayout({ children, ...props }) {

  return (
    <MDXProvider components={components}>
      <div className={`${bodyText.variable} ${fancyText.variable}`}>
        <Head>
          <title>Jeffrey Barron</title>
          <meta
            name="Jeffrey Barron"
            content="Blog and Portfolio of Jeffrey Barron"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main className="font-bodyText bg-primary text-primary-contrast w-screen flex-1 snap-y snap-mandatory scroll-pt-0 overflow-y-scroll">
          <Navigation />
          <section className="flex flex-1 grid-flow-col grid-cols-12 sm:grid">
            <div className="col-span-2  p-2"></div>
            <div className="bg-primary col-span-8 flex min-h-[calc(100vh-135px)] flex-1 flex-col break-words p-8">
              {/* <div className="bg-primary col-span-8 flex flex-col items-center break-words p-6 pt-8 "> */}
              {children}
            </div>
            <div className="col-span-2  p-2 "></div>
          </section>
        </main>
        <Footer />
      </div>
    </MDXProvider>
  );
}
