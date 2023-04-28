// pages/blog/index.js 

import fs from 'fs';
import path from "path";
import matter from "gray-matter";
import PagesLayout from "../../Layout/PagesLayout";
import PostCard from '../../Components/PostCard';
import { sortByDate } from '../../lib';
const COLLECTION = "article"


export default function BlogIndexPage( {blog} ) {

  return (
    <PagesLayout>
      <div className="items-center grid sm:grid-cols-2 gap-y-4 place-items-center">
        { blog.map((post, index) => (
          <PostCard key={index} collection={ COLLECTION }post={post} />
        ))} 
      </div>
    </PagesLayout>
  );
}

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
      blog: posts.sort(sortByDate),
    },
  };
}



