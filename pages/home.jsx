// pages/index.js [Server Side]

import RootLayout from "../Layout/RootLayout";
import About from "../Components/About";
import HeroPage2 from "../Components/HeroPage2";
import Navigation from "../Components/Navigation";
import Quote from "../Components/Quote";


export default function HomePage() {
  return (
    <RootLayout>
      <div>
        <HeroPage2 />
        <Quote
          quote="Entities are not to be multiplied beyond necessity [from
            latin]."
          author="William of Ockham"
        />
        <Navigation />
        <About />
        <Quote
          quote="Form and function should be one, joined in a spiritual union."
          author="Frank Lloyd Wright"
        />
      </div>
    </RootLayout>
  );
}

