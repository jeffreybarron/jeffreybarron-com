// pages/blog/index.js [??? Side]

import path from "path";
import Link from "next/link";
import PagesLayout from "../(layout)/PagesLayout";
import { truncateFileExtensions } from "./../lib/helper";

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
      <h1>blog</h1>
      <h2>Index</h2>
      {blog.map((post) => (
        <div key={post}>
          <Link
            href={`/blog/${post}`}
            className="border-primary border-b border-dotted"
          >
            {post}
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const directoryPath = path.join(process.cwd(), "data/posts");
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
