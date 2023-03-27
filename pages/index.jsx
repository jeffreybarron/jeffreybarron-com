// pages/index.js [Server Side]

import RootLayout from "./(layout)/RootLayout";
import About from "./(components)/About";
import HeroPage from "./(components)/HeroPage";
import Navigation from "./(components)/Navigation";
import Quote from "./(components)/Quote";

import { Montserrat, Dancing_Script } from "next/font/google";
const bodyText = Montserrat({
  variable: "--font-bodytext",
  subsets: ["latin"],
});
const fancyText = Dancing_Script({
  variable: "--font-fancytext",
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <div className="">
      {/* <div className="from-primaryBg to-secondaryBg bg-gradient-to-r box-decoration-clone"> */}
      {/* <!-- Hero of the Show --> */}
      <div className="from-primaryBg to-secondaryBg flex h-screen snap-start items-center justify-center bg-gradient-to-r box-decoration-clone p-4 align-middle">
        <HeroPage />
      </div>
      <Quote
        quote="Entities are not to be multiplied beyond necessity [from
          latin]."
        author="William of Ockham"
      />
      <div className="from-primaryBg to-secondaryBg flex h-[10vh] snap-start items-center justify-center bg-gradient-to-r box-decoration-clone align-middle">
        <Navigation />
      </div>
      {/* <!-- About Me Copy --> */}
      <div className="flew-col text-primary font-bodyText min-h-[65vh] snap-start items-center justify-center align-middle">
        <About />
      </div>
      <Quote
        quote="Form and function should be one, joined in a spiritual union."
        author="Frank Lloyd Wright"
      />
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {/* <NestedLayout>{page}</NestedLayout> */}
      {page}
    </RootLayout>
  );
};
