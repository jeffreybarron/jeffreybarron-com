// pages/components/About.js [Server Side]

import React from "react";

export default function About() {
  return (
    <>
      <div className="md:pt-12 md:pl-12">
        <h1 className="p-2">About Me</h1>
      </div>
      <div className="md:px-24 md:pb-12">
        <p className="p-2 ">
          Hi there! I&apos;m{" "}
          {/* <span className="font-fancyText text-tertiary px-2 text-3xl">
            Jeff
          </span> */}
          Jeff , a software engineer with a passion for exploring the why and
          how of life. I believe that understanding what makes us tick is the
          key to solving difficult problems in our personal lives, business,
          science, and technology.
        </p>
        <p className="p-2 ">
          My interests are broad, and I&apos;m deeply invested in solving
          business challenges around people, process, and technology, developing
          the people within my sphere of influence, and studying neuroscience
          and cognitive psychology.
        </p>
        <p className="p-2 ">
          I enjoy thinking deeply about complex problems and finding creative
          solutions that bring structure and order to ambiguous issues. When
          I&apos;m not coding, I&apos;m spending time with my wife, children,
          and family. They&apos;re my world, and I&apos;m constantly amazed by
          how much they teach me about life.
        </p>
        <p className="p-2 ">
          Overall, I&apos;m a highly motivated individual with a passion for
          using technology to solve real-world problems. Whether it&apos;s
          building user-friendly websites or designing systems that make
          people&apos;s lives easier, I&apos;m always up for a challenge. I
          believe that by combining my technical skills with a deep
          understanding of human psychology, I can make a positive impact on the
          world and help create a better future for all of us.
        </p>
        <br />
        <div>
          Your&apos;s Sincerely,
          <br />
          <p className="font-fancyText text-tertiary py-4 text-2xl md:pl-4">
            Jeffrey Barron
          </p>
          <p className="italic md:text-left">
            B. Psych. Sc.(Minor in Neuroscience), GradCert Computers
          </p>
        </div>
      </div>
    </>
  );
}
