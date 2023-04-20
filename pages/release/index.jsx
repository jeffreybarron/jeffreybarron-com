// pages/release/index.js [??? Side]

import path from "path";
import Link from "next/link";
import PagesLayout from "../../Layout/PagesLayout";
import { truncateFileExtensions } from "../../lib/helper";

import { Montserrat, Dancing_Script } from "next/font/google";
const bodyText = Montserrat({
  variable: "--font-bodytext",
  subsets: ["latin"],
});
const fancyText = Dancing_Script({
  variable: "--font-fancytext",
  subsets: ["latin"],
});

ReleasePage.getLayout = function getLayout(page) {
  return <PagesLayout>{page}</PagesLayout>;
};

export default function ReleasePage({ release }) {
  return (
    <div>
      <h1>Release History</h1>
      <ul>
        {release.map((post) => (
          <li key={post}>
            <Link href={`/release/${post}?collection=release`}>{post}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


// export async function getStaticProps() {
//   const apiPath = `http://localhost:3000/api/get_collection_info?collection=release`;
//   const res = await fetch(apiPath);
//   const data = await res.json();
//   return {
//     // Passed to the page component as props
//     props: {
//       blogs: data,
//     },
//   };
// }

export async function getStaticProps() {
  const fs = require("fs");
  const directoryPath = path.join(process.cwd(), "data/release");
  const allFiles = fs.readdirSync(directoryPath, "utf-8");
  const releaseFiles = allFiles.filter((file) => {
    return file.endsWith(".md") || file.endsWith(".mdx");
  });
  const data = truncateFileExtensions(releaseFiles);
  return {
    // Passed to the page component as props
    props: {
      release: data,
    },
  };
}

