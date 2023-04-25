import path from "path";
import matter from 'gray-matter';
import dynamic from "next/dynamic";
import MDXLayout from "../../Layout/MDXLayout";
const COLLECTION = "blog"

export default function BlogPage({ slug, frontMatter }) {
  const Post = dynamic(() => import(`/data/${COLLECTION}/${slug}${frontMatter.ext}`), {
    loading: () => <p className="p-4">You must be the first person to read this article! Please hit refresh on your browser to read your freshly cooked post.</p>,
  });
  return (
    <MDXLayout>
      <Post slug={slug} frontMatter={frontMatter}/> 
    </MDXLayout>
  );
}

export function getStaticPaths() {
  // get all markdown files in the posts directoryPath
  const fs = require("fs");
  const directoryPath = path.join(process.cwd(), `/data/${COLLECTION}`);
  const allFiles = fs.readdirSync(directoryPath, "utf-8");
  const markdownFiles = allFiles.filter((file) => {
    return file.endsWith(".md") || file.endsWith(".mdx");
  });
  // create slug and extension for each file
  const paths = markdownFiles.map((file) => {
    const lastDotIndex = file.lastIndexOf(".");
    // if no dot, then no extension
    if (lastDotIndex === -1) {
      return ({
        params: {
          slug: file,
          fileExtension: "",
          fileName: file
        }
      });
    } 
    return ({
      params: {
        slug: file.substring(0, lastDotIndex),
        fileExtension: file.substring(lastDotIndex, file.length),
        fileName: file
      }
    });
  });
  
  return {
    paths,
    fallback: false, // returns 404 if no match
  };
}

export async function getStaticProps({ params : {slug }}) {
  // read markdown file as string
  const fs = require("fs");

  // handle .md and .mdx markdown file types
  let directoryPath = path.join(process.cwd(), `/data/${COLLECTION}/${slug}`);
  if (fs.existsSync(`${directoryPath}.md`)) {
    directoryPath = `${directoryPath}.md`;
  } else if (fs.existsSync(`${directoryPath}.mdx`)){
    directoryPath = `${directoryPath}.mdx`;
  }
  // read markdown file as string
  const markdownWithMeta = fs.readFileSync(directoryPath, "utf-8");

  // parse markdown string into data and content using gray-matter
  const {data: frontMatter, content} = matter(markdownWithMeta) 
   // split comma delimited authors and tags into array objects
  frontMatter.authors = _splitIntoArray(frontMatter.authors);
  frontMatter.tags = _splitIntoArray(frontMatter.tags);

  return {
    props: {
      slug,
      frontMatter,
      content
    }
  };
}

function _splitIntoArray(variable) {
  if (!Array.isArray(variable)) {
    variable = variable.split(",");
  }
  return variable;
}

