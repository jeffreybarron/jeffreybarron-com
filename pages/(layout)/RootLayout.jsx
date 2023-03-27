// layout/RootLayout.js
import Head from "next/head";
import Footer from "../(components)/Footer";
import { Montserrat, Dancing_Script } from "next/font/google";
const bodyText = Montserrat({
  variable: "--font-bodytext",
  subsets: ["latin"],
});
const fancyText = Dancing_Script({
  variable: "--font-fancytext",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <div className={`${bodyText.variable} ${fancyText.variable}`}>
      <Head>
        <title>Jeffrey Barron</title>
        <meta
          name="description"
          content="Blog and Portfolio of Jeffrey Barron"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="font-bodyText bg-primary flex h-screen w-screen flex-1 snap-y snap-mandatory scroll-pt-0 overflow-y-scroll">
        {children}
      </main>
      <Footer />
    </div>
  );
}
