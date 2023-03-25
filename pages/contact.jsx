// pages/contact.js [Server Side]

import PagesLayout from "./(layout)/PagesLayout";

import { Montserrat, Dancing_Script } from "next/font/google";
const bodyText = Montserrat({
  variable: "--font-bodytext",
  subsets: ["latin"],
});
const fancyText = Dancing_Script({
  variable: "--font-fancytext",
  subsets: ["latin"],
});

export default function ContactPage() {
  return (
    <div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
    </div>
  );
}

ContactPage.getLayout = function getLayout(page) {
  return <PagesLayout>{page}</PagesLayout>;
};
