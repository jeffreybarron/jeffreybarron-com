// layout/PageLayout.js
import Head from "next/head";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

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

export default function PagesLayout({ children }) {
  return (
    <div className={`${bodyText.variable} ${fancyText.variable}`}>
      <Head>
        <title>Jeffrey Barron</title>
        <meta
          name="Jeffrey Barron"
          content="Blog and Portfolio of Jeffrey Barron"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="font-bodyText bg-primary text-primary-contrast min-h-[calc(100vh-40px)] w-screen flex-1 snap-y snap-mandatory scroll-pt-0 overflow-y-scroll">
        <Navigation />
        <section className="flex flex-1 grid-flow-col grid-cols-12 sm:grid">
          <div className="col-span-2 p-2"></div>
          <div className="bg-primary col-span-8 p-2 pt-8">{children}</div>
          <div className=" col-span-2 p-2 "></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
