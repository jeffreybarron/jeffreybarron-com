// pages/blog/index.js [??? Side]

import fs from 'fs';
import path from "path";
import Link from "next/link";
import Image from "next/image";
import matter from "gray-matter";
import PagesLayout from "../../Layout/PagesLayout";
import PostCard from '../../Components/PostCard';
import { truncateFileExtensions } from "../../lib/helper";
const COLLECTION = "release"

import { Montserrat, Dancing_Script } from "next/font/google";
const bodyText = Montserrat({
  variable: "--font-bodytext",
  subsets: ["latin"],
});
const fancyText = Dancing_Script({
  variable: "--font-fancytext",
  subsets: ["latin"],
});

// BlogPage.getLayout = function getLayout(page) {
//   return <PagesLayout>{page}</PagesLayout>;
// };

export default function BlogPage( {blog} ) {

  return (
    <PagesLayout>
      <div className="bg-slate-300 items-center grid sm:grid-cols-2 place-items-center">
        { blog.map((post, index) => (
          <PostCard key={index} post={post} />
        ))} 
      </div>
    </PagesLayout>
  );
}

// export async function getStaticProps() {
//   const fs = require("fs");
//   const directoryPath = path.join(process.cwd(), "data/blog");
//   const allFiles = fs.readdirSync(directoryPath, "utf-8");
//   const blogFiles = allFiles.filter((file) => {
//     return file.endsWith(".md") || file.endsWith(".mdx");
//   });
//   const data = truncateFileExtensions(blogFiles);
//   return {
//     // Passed to the page component as props
//     props: {
//       blog: data,
//     },
//   };
// }

export async function getStaticProps() {
  // Get Files from the Blog Directory
  const allFiles = fs.readdirSync(path.join(process.cwd(),`/data/${COLLECTION}`), "utf-8");
  const markdownFiles = allFiles.filter((file) => {
    return file.endsWith(".md") || file.endsWith(".mdx");
  });

  // Get the Front Matter from the Blog Files
  const posts = markdownFiles.map(fileName => {
    // Create slug
    let slug = '';
    if (fileName.endsWith('.md')){
      slug = fileName.replace('.md', '')
    } else if (fileName.endsWith('.mdx')) {
      slug = fileName.replace('.mdx', '')
    }

    // Get FrontMatter
    const filePath = path.join(process.cwd(), `/data/${COLLECTION}`, fileName);
    const str = fs.readFileSync(filePath, "utf-8");
    
    //destructure and rename data to frontMatter
    const { data: frontMatter } = matter(str) 
  
    //split authors and tags into arrays
    if (!Array.isArray(frontMatter.authors)) {
      frontMatter.authors = frontMatter.authors.split(",");
    }
    if (!Array.isArray(frontMatter.tags)) {
      frontMatter.tags = frontMatter.tags.split(",");
    }
    
    return {
      slug,
      frontMatter
    }    
  })

  return {
    // Passed to the page component as props
    props: {
      blog: posts,
    },
  };
}




// function splitIntoArray(variable) {
//   if (!Array.isArray(variable)) {
//     variable = variable.split(",");
//   }
//   return variable;
// }
