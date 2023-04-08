// layout/PageLayout.js
import Head from "next/head";
import Navigation from "../(components)/Navigation";
import Footer from "../(components)/Footer";
import Link from "next/link";
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


export default function PagesLayout({ children }) {
// 
// note https://github.com/vercel/next.js/issues/44295 URL# not handled @ 2023-04-05
//   
  return (
    // <MDXProvider>
    <MDXProvider components={{
      // Typography
      h1: props => <h1 className="pb-2 text-2xl font-extrabold uppercase underline hover:after:content-['_#']" {...props}/>,
      h2: props => <h2 className="text-secondary py-2 pt-4 text-2xl font-semibold capitalize hover:after:content-['_#']" {...props}/>,
      h3: props => <h3 className="text-tertiary py-2 pt-2 text-xl font-bold capitalize hover:after:content-['_#']" {...props}/>,
      h4: props => <h4 className="text-tertiary py-2 pt-2 text-lg italic hover:after:content-['_#']" {...props}/>,
      h5: props => <h5 className="text-tertiary py-2 pt-2 text-lg italic hover:after:content-['_#']" {...props} {...props}/>,
      h6: props => <h6 className="text-tertiary py-2 pt-2 text-lg italic hover:after:content-['_#']" {...props}/>,
      a: props => <Link {...props} className="hover:text-secondary text-primary-contrast" />,
      p: props => <p {...props} className="inline-block py-2 max-w-none"/>,
  
      // Code
      pre: props => <pre className="language-jsx my-4 grid border border-dotted p-4" {...props}/>,
      code: props => <code className="line-numbers text-tertiary" {...props}/>,

      // Lists
      OL: props => <ol {...props}/>,
      UL: props => <ul {...props}/>,
      LI: props => <li {...props}/>,


    }}> 
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
            <div className="col-span-2 p-2"></div>
            <div className="bg-primary col-span-8 flex min-h-[calc(100vh-135px)] flex-1 flex-col break-words p-6">
              {children}
              <br /><hr/>
              <p className="text-xs text-slate-400"><span className="italic">Disclaimer</span>: On occasions some parts of this blog may be collected from other sources to create a collection of information useful to me, in one place. Furthermore, while some find it sufficient to merely link to source documents, I have found that many publishers move or remove their content eventually. The content collected here is deemed to be evergreen and useful to me, so I have collated it chiefly for my personal use. However, If you have lawful rights to some content here, and you wish it taken down or attribution added, please contact me and I will gladly comply.</p>
            </div>
            <div className="col-span-2 p-2 "></div>
          </section>
        </main>
        <Footer />
      </div>
    </MDXProvider>
  );
}
