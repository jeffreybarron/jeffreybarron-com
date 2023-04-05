// pages/blog/[slug]/index.js [??? Side]

import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import path from "path";

import MDXLayout from "./../(layout)/MDXLayout";
import { truncateFileExtensions } from "../../lib/helper";

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;
  const Post = dynamic(() => import(`/data/posts/${slug}.mdx`));

  return (
    <MDXLayout>
      {/* TODO: how to pass through the slug for the headings */}
      <Post slug={slug}/>
    </MDXLayout>
  );
}

// Called First
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

// Called Second
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
