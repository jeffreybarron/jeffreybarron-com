// pages/index.js [Server Side]

import RootLayout from "../Layout/RootLayout";
import About from "../Components/About";
import HeroPage from "../Components/HeroPage";
import Navigation from "../Components/Navigation";
import Quote from "../Components/Quote";

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
    <RootLayout>
    <div className="">
      {/* <!-- Hero of the Show --> */}
      <div className="from-primary to-secondary flex h-screen snap-start items-center justify-center bg-gradient-to-r box-decoration-clone p-4 align-middle">
        <HeroPage />
      </div>
      <Quote
        quote="Entities are not to be multiplied beyond necessity [from
          latin]."
        author="William of Ockham"
      />
      <div className="from-primary to-secondary flex h-[10vh] snap-start items-center justify-center bg-gradient-to-r box-decoration-clone align-middle">
        <Navigation />
      </div>
      {/* <!-- About Me Copy --> */}
      <div className="flew-col text-primary-contrast font-bodyText min-h-[65vh] snap-start items-center justify-center align-middle">
        <About />
      </div>
      <Quote
        quote="Form and function should be one, joined in a spiritual union."
        author="Frank Lloyd Wright"
      />
    </div>
    </RootLayout>
  );
}

