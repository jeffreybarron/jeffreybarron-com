// pages/index.js
import RootLayout from "./(layout)/RootLayout";
import Navigation from "./components/Navigation";
import Quote from "./components/Quote";

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
        <div className="">
          <div className="block duration-700 hover:-rotate-6 hover:transition-all">
            <p className="text-accent font-fancyText text-8xl capitalize md:text-9xl">
              <span className="md:text-callout ">jeffrey</span>{" "}
              <br className="md:hidden" />
              barron
            </p>
            <h3 className="text text-primary pt-4 text-2xl capitalize delay-100 duration-700 ease-in-out ">
              software engineer, <br className="sm:hidden" />
              web-developer, <br className="md:hidden" />
              designer, photographer, <br />
              human behaviour affectionado
            </h3>
            <p className="text-callout italic md:text-right">
              B. Psych. Sc.(Minor in Neuroscience)
            </p>
          </div>
        </div>
      </div>
      <Quote
        quote="Entities are not to be multiplied beyond necessity [from
              latin]."
        author="William of Ockham"
      />
      <div className="from-primaryBg to-secondaryBg bg-gradient-to-r box-decoration-clone">
        <Navigation />
      </div>
      <div className="flew-col text-primary sticky snap-start items-center justify-center align-middle">
        <div className="font-bodyText md:pt-12 md:pl-12">
          <h1 className="p-2">About Me</h1>
        </div>
        <div className="md:px-24 md:pb-12">
          <p className="p-2 ">
            Hi there, I'm{" "}
            <span className="font-fancyText text-callout hover:text-secondaryBg px-2 text-3xl">
              Jeff
            </span>
            , a software engineer with a passion for exploring the why and how
            of life. I believe that understanding what makes us tick is the key
            to solving difficult problems in our personal lives, business,
            science, and technology.
          </p>
          <p className="p-2 ">
            My interests are broad, and I'm deeply invested in solving business
            challenges around people, process, and technology, developing the
            people within my sphere of influence, and studying neuroscience and
            cognitive psychology.
          </p>
          <p className="p-2 ">
            I enjoy thinking deeply about complex problems and finding creative
            solutions that bring structure and order to ambiguous issues. When
            I'm not coding, I'm spending time with my wife, children, and
            family. They're my world, and I'm constantly amazed by how much they
            teach me about life.
          </p>
          <p className="p-2 ">
            Overall, I'm a highly motivated individual with a passion for using
            technology to solve real-world problems. Whether it's building
            user-friendly websites or designing systems that make people's lives
            easier, I'm always up for a challenge. I believe that by combining
            my technical skills with a deep understanding of human psychology, I
            can make a positive impact on the world and help create a better
            future for all of us.
          </p>
        </div>
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
