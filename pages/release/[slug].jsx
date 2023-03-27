// pages/release/[slug]/index.js [??? Side]

import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import path from "path";

import MDXLayout from "../(layout)/MDXLayout";
import { truncateFileExtensions } from "../../lib/helper";

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;
  const Post = dynamic(() => import(`/data/release/${slug}.mdx`));

  return (
    <MDXLayout>
      <Post />
    </MDXLayout>
  );
}

// Called First
export function getStaticPaths() {
  const fs = require("fs");
  const directoryPath = path.join(process.cwd(), "data/release");
  const allFiles = fs.readdirSync(directoryPath, "utf-8");
  const releaseFiles = allFiles.filter((file) => {
    return file.endsWith(".md") || file.endsWith(".mdx");
  });
  const data = truncateFileExtensions(releaseFiles);

  const paths = data.map((slug) => `/release/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

// Called Second
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
