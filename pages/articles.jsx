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

export default function ArticlesPage() {
  return (
    <div>
      <h1>articles</h1>
    </div>
  );
}

ArticlesPage.getLayout = function getLayout(page) {
  return <PagesLayout>{page}</PagesLayout>;
};
