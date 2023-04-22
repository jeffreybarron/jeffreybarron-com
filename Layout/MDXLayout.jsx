// layout/PageLayout.js
import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MDXProvider } from "@mdx-js/react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import QuickLinks from "@/Components/QuickLinks";

import { Montserrat, Dancing_Script, Karla } from "next/font/google";
const bodyText = Karla({
  variable: "--font-bodytext",
  subsets: ["latin"],
});
// const bodyText = Montserrat({
//   variable: "--font-bodytext",
//   subsets: ["latin"],
// });
const fancyText = Dancing_Script({
  variable: "--font-fancytext",
  subsets: ["latin"],
});


const components = {
  // Typography
    // 
    // note Nextjs 13 Link not scrolling to anchor element
    // https://github.com/vercel/next.js/issues/44295 URL# not handled @ 2023-04-05
    //   
    h1: props => <h1 className="pb-2 text-2xl font-extrabold uppercase underline hover:after:content-['_#']" {...props}/>,
    h2: props => <h2 className="text-secondary py-2 pt-4 text-2xl font-semibold capitalize hover:after:content-['_#']" {...props}/>,
    h3: props => <h3 className="text-tertiary py-2 pt-2 text-xl font-bold capitalize hover:after:content-['_#']" {...props}/>,
    h4: props => <h4 className="text-tertiary py-2 pt-2 text-lg italic hover:after:content-['_#']" {...props}/>,
    h5: props => <h5 className="text-tertiary py-2 pt-2 text-lg italic hover:after:content-['_#']" {...props} {...props}/>,
    h6: props => <h6 className="text-tertiary py-2 pt-2 text-lg italic hover:after:content-['_#']" {...props}/>,
    a: props => <Link {...props} className="hover:text-secondary text-primary-contrast" />,
    p: props => <p {...props} className="inline-block py-2 max-w-[100vw]"/>,

  // Code
    pre: props => <pre className="language-jsx my-4 grid border border-dotted p-4" {...props}/>,
    code: props => <code className="line-numbers text-tertiary" {...props}/>,

  // Data
    table: props => <table {...props} className="text-primary m-4 shadow-md shadow-primary-contrast bg-primary-300"/>,
    th: props => <th {...props} className="border-b-2 border-b-primary px-2"/>,
    td: props => <td {...props} className="px-2"/>,
    ul: props => <ol {...props}/>,
    ol: props => <ul {...props}/>,
    li: props => <li {...props}/>,

  // obsidian image tag
    Image: props => <Image 
      placeholder="loading..." 
      width={1024}
      height={1024}
      className="w-[75%] self-center border-secondary border-l-2 border-b rounded-t-xl shadow-secondary shadow-lg my-6"  
      {...props} />,

};

export default function MDXLayout( {children} ) {

  let frontMatter = children.props.frontMatter;
// let slug = children.props.slug;
// let content = children.props.content;

// let frontMatter = children.props.frontMatter;
  return (
    // <MDXProvider>
    <MDXProvider components={ components }> 
      <div className={`${bodyText.variable} ${fancyText.variable}`}>
        <Head>
          <title>Jeffrey Barron</title>
          <meta name="Jeffrey Barron" content="Blog and Portfolio of Jeffrey Barron"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main className="font-bodyText bg-primary text-primary-contrast w-screen flex-1 snap-y snap-mandatory scroll-pt-0 overflow-y-scroll">
          <Navigation />
          <section className="flex flex-1 grid-flow-col grid-cols-12 sm:grid">
            <div className="sm:col-span-1 lg:col-span-2 lg:p-2"></div>
            <div className="lg:col-span-8 px-1 sm:col-span-10 flex min-h-[calc(100vh-135px)] flex-1 flex-col break-words sm:p-3 md:p-6">
              {/* <!-- Metadata --> */}
              <div className="bg-primary-800 border-l-2 object-contain flex flex-col max-w-[100vw] p-1 sm:p-2 lg:p-4 text-sm border-b rounded-t-lg shadow-secondary shadow-lg">
                <h1 className="pb-4" >{frontMatter.title}</h1>
                  <div className="">
                  <span className="pr-1 font-semibold">Tags:</span>
                  {frontMatter.tags.map((tag, index) => (
                    <span key={index} className="pr-1"> 
                      {tag}{index < frontMatter.tags.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
                {/* <!-- Authors --> */}
                <div className="">
                  <span className="pr-1 font-semibold">Author(s):</span>
                  {frontMatter.authors.map((author, index) => (
                    <span key={index} className="pr-1"> 
                      {author}{index < frontMatter.authors.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
                {/* <!-- Dates --> */}
                <div className="flex w-full justify-between">
                  <div className="sm:flex"><div className="font-semibold pr-1">Created:</div><div className="flex-1">{frontMatter.created}</div></div>
                  <div className="sm:flex"><div className="font-semibold pr-1">Updated:</div><div className="flex-1">{frontMatter.modified}</div></div>
                </div>
              </div>
              {/* <!-- Content --> */}
              <div className="max-w-[100vw] flex flex-col pt-6">
                {children}
              </div>
              {/* <!-- Footer --> */}
              <p className="text-xs text-slate-400 mt-6 mb-4"><span className="italic">Disclaimer</span>: On occasions some parts of this blog may be collected from other sources to create a collection of information useful to me, in one place. Furthermore, while some find it sufficient to merely link to source documents, I have found that many publishers move or remove their content eventually. The content collected here is deemed to be evergreen and useful to me, so I have collated it chiefly for my personal use. However, If you have lawful rights to some content here, and you wish it taken down or attribution added, please contact me and I will gladly comply.</p>
            </div>
            <div className="sm:col-span-1 lg:col-span-2 lg:p-2"></div>
          </section>
        </main>
        <QuickLinks />
        <Footer />
      </div>
    </MDXProvider>
  );
}
