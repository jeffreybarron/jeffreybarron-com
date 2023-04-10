// pages/blog/[slug]/index.js [??? Side]
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import ErrorPage from "next/error";
import path from "path";
import MDXLayout from "./../(layout)/MDXLayout";
import { truncateFileExtensions } from "../../lib/helper";
const COLLECTION = "release"

export default function Page(props) {
  // props from getStaticProps()
  const router = useRouter();
  if (router.isFallback) {
      return <ErrorPage statusCode={404} />
  }
  const { slug } = router.query;
  const currentPage = props.article.filter((file) => {
    return file.fileSlug.includes(slug);
  });
  const Post = dynamic(() => import(`/data/${COLLECTION}/${currentPage[0].fileName}`));
  return (
    <MDXLayout>
      {/* TODO: how to pass through the slug for the headings */}
      <Post props={currentPage[0]} />
    </MDXLayout>
  );
}

export function getStaticPaths() {
  const markdownFileSlugs = _getMarkdownSlugs(COLLECTION)
  const paths = markdownFileSlugs.map((slug) => `/${COLLECTION}/${slug}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const data = _getMarkdownFileInfo(COLLECTION);
  return {
    // Passed to the page component as props
    props: {
      article: data,
    },
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
    fileObject.frontMatter = frontMatter.data;

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
  return frontMatter;
}
