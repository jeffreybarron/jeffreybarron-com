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

export default function BlogPage({ blog }) {
  return (
    <div>
      <h1>blog</h1>
      <ul>
        <li>TODO: build index from folder list</li>
        <li>TODO: Basic format page</li>
        <li>TODO: all md files to lowercase and mdx</li>
        <li>TODO: add meta data and customise pages</li>
        <li>TODO: sort and catagorise on meta tags</li>
        <li>TODO: Add page images</li>
        <li>TODO: turn index into cards</li>
        <li></li>
      </ul>
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
  // const fs = require("fs");
  // const directoryPath = path.join(process.cwd(), "pages/blog/posts");
  // const allFiles = fs.readdirSync(directoryPath, "utf-8");
  // const blogFiles = allFiles.filter((file) => {
  //   return file.endsWith(".md") || file.endsWith(".mdx");
  // });
  // console.log(blogFiles);
  // const data = truncateFileExtensions(blogFiles);
  // console.log(data);
  const data = getBlogPosts();

  return {
    // Passed to the page component as props
    props: {
      blog: data,
    },
  };
}

BlogPage.getLayout = function getLayout(page) {
  return <PagesLayout>{page}</PagesLayout>;
};

function getBlogPosts(location = "pages/blog/posts") {
  const fs = require("fs");
  const directoryPath = path.join(process.cwd(), location);
  const allFiles = fs.readdirSync(directoryPath, "utf-8");
  const blogFiles = allFiles.filter((file) => {
    return file.endsWith(".md") || file.endsWith(".mdx");
  });
  console.log(blogFiles);
  return truncateFileExtensions(blogFiles);
}
