// pages/blog/[slug]/index.js [??? Side]
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import ErrorPage from "next/error";
import path from "path";
import MDXLayout from "../../Layout/MDXLayout";
import { truncateFileExtensions, splitIntoArray } from "../../lib/helper";
const COLLECTION = "release"

export default function Page(props) {
  // props from getStaticProps()
  const router = useRouter();
  if (router.isFallback) {
      return <ErrorPage statusCode={404} />
  }
  const { slug } = router.query;
  const currentPage = props.posts.filter((file) => {
      return file.fileSlug.includes(slug);
  });
  const Post = dynamic(() => import(`/data/${COLLECTION}/${currentPage[0].fileName}`));
  return (
    <MDXLayout>
      <Post currentPage={currentPage[0]} /> 
    </MDXLayout>
  );
}

export function getStaticPaths() {
  const markdownFileSlugs = _getMarkdownSlugs(COLLECTION)
  const paths = markdownFileSlugs.map((slug) => `/${COLLECTION}/${slug}`);
  return {
    paths,
    fallback: 'blocking',
    // fallback: false,
  };
}


export async function getStaticProps() {
  const posts = _getMarkdownFileInfo(COLLECTION);
  return {
    props: {posts}
  };
}


// Helper Functions
function _getMarkdownSlugs(folder){
  const markdownFiles = __getMarkdownFiles(folder);
  return truncateFileExtensions(markdownFiles);
}

function _getMarkdownFileInfo(folder){
  const markdownFiles = __getMarkdownFiles(folder);
  const paths = markdownFiles.map((file) => { 
    let slug = "";
    let ext = "";
    const lastDotIndex = file.lastIndexOf(".");
    if (lastDotIndex === -1) {
      slug = file;
      ext = "";
    }
    slug = file.substring(0, lastDotIndex);
    ext = file.substring(lastDotIndex, file.length);

    let fileObject = {
      fileName: file,
      filePath: `/data/${folder}/${file}`,
      fileRoute: `/${folder}/${slug}`,
      fileSlug: slug,
      ext: ext 
    }
    //use gray-matter to add file frontmatter to fileObject
    const frontMatter = __getFrontMatter(fileObject.filePath);
    // fileObject.frontMatter = frontMatter.data;
    fileObject.authors = frontMatter.data.authors;
    fileObject.tags = frontMatter.data.tags;
    fileObject.images = frontMatter.data.images;
    fileObject.title = frontMatter.data.title;
    fileObject.summary = frontMatter.data.summary;
    fileObject.modified = frontMatter.data.title;
    fileObject.created = frontMatter.data.title;
    

    return (fileObject)
  });
  return paths;
};


function __getMarkdownFiles(folder){
  const fs = require("fs");
  const directoryPath = path.join(process.cwd(), `/data/${folder}`);
  const allFiles = fs.readdirSync(directoryPath, "utf-8");
  const markdownFiles = allFiles.filter((file) => {
    return file.endsWith(".md") || file.endsWith(".mdx");
  });
  return markdownFiles;
}

function __getFrontMatter(file){
  const fs = require("fs");
  const matter = require("gray-matter");
  const filePath = path.join(process.cwd(), file);
  const str = fs.readFileSync(filePath, "utf-8");
  const frontMatter = matter(str) 
  
  // handle frontmatter arrays
  frontMatter.data.authors = splitIntoArray(frontMatter.data.authors);
  frontMatter.data.tags = splitIntoArray(frontMatter.data.tags);
  frontMatter.data.images = splitIntoArray(frontMatter.data.images);
  // console.log(`${frontMatter.data.authors}\n${frontMatter.data.tags}\n${frontMatter.data.images}\n`);
  
  return frontMatter;
}
