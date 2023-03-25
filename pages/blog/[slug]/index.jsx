// pages/blog/[slug]/index.js [??? Side]

import { useRouter } from "next/router";
import BlogLayout from "./../../(layout)/BlogLayout";
import path from "path";
import { truncateFileExtensions } from "./../../lib/helper";

import dynamic from "next/dynamic";

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;
  const Post = dynamic(() => import(`/data/posts/${slug}.mdx`));

  return (
    <BlogLayout>
      <Post />
    </BlogLayout>
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
  console.log("[slug]/getstaticprops", data);
  return {
    // Passed to the page component as props
    props: {
      blog: data,
    },
  };
}

export function getStaticPaths() {
  const fs = require("fs");
  const directoryPath = path.join(process.cwd(), "data/posts");
  const allFiles = fs.readdirSync(directoryPath, "utf-8");
  const blogFiles = allFiles.filter((file) => {
    return file.endsWith(".md") || file.endsWith(".mdx");
  });
  const data = truncateFileExtensions(blogFiles);
  const paths = data.map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
