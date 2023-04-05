// pages/blog/index.js [??? Side]

import path from "path";
import Link from "next/link";
import PagesLayout from "../(layout)/PagesLayout";
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

BlogPage.getLayout = function getLayout(page) {
  return <PagesLayout>{page}</PagesLayout>;
};

export default function BlogPage({ blog }) {
  return (
    <div>
      <h1>blog roll</h1>
      <ul>
        {blog.map((post) => (
          <li key={post}>
            <Link href={`/blog/${post}?collection=blog`}>{post}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const directoryPath = path.join(process.cwd(), "data/blog");
  const allFiles = fs.readdirSync(directoryPath, "utf-8");
  const blogFiles = allFiles.filter((file) => {
    return file.endsWith(".md") || file.endsWith(".mdx");
  });
  const data = truncateFileExtensions(blogFiles);
  return {
    // Passed to the page component as props
    props: {
      blog: data,
    },
  };
}
