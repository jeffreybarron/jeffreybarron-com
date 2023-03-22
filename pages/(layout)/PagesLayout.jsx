// layout/PageLayout.js
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
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
      <main className="font-bodyText bg-primaryBg text-primary h-[calc(100vh-40px)] w-screen flex-1 snap-y snap-mandatory scroll-pt-0 overflow-y-scroll">
        <Navigation />
        {children}
      </main>
      <Footer />
    </div>
  );
}
