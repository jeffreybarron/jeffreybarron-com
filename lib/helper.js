// import path from "path";
// import fs from "fs";
const ROOT_FOLDER_DATA = "/data"

export const truncateFileExtensions = (filenames) => {
  return filenames.map((filename) => {
    const lastDotIndex = filename.lastIndexOf(".");
    if (lastDotIndex === -1) {
      return filename;
    }
    return filename.substring(0, lastDotIndex);
  });
};

export const getFiles = (filenames) => {
  return filenames.map((filename) => {

    const lastDotIndex = filename.lastIndexOf(".");
    if (lastDotIndex === -1) {
      return filename;
    }
    return ({
      slug: filename.substring(0, lastDotIndex),
      ext: filename.substring(lastDotIndex, filename.length),
    })
  });
};

// Writen by chatGPT3 20230409T1110
export function splitIntoArray(variable) {
  if (!Array.isArray(variable)) {
    variable = variable.split(",");
  }
  return variable;
}

export function getMarkdownSlugs(folder){
  const markdownFiles = getMarkdownFiles(folder);
  return truncateFileExtensions(markdownFiles);
}

export function getMarkdownFileInfo(folder){
  const markdownFiles = getMarkdownFiles(folder);
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
    const frontMatter = getFrontMatter(fileObject.filePath);
    // fileObject.frontMatter = frontMatter.data;
    fileObject.authors = frontMatter.data.authors;
    fileObject.tags = frontMatter.data.tags;
    fileObject.images = frontMatter.data.images;
    fileObject.title = frontMatter.data.title;
    fileObject.summary = frontMatter.data.summary;
    fileObject.modified = frontMatter.data.modified;
    fileObject.created = frontMatter.data.created;
    

    return (fileObject)
  });
  return paths;
};


// export function getMarkdownFiles(folder){
//   const fs = require("fs");
//   const directoryPath = path.join(process.cwd(), `/data/${folder}`);
//   const allFiles = fs.readdirSync(directoryPath, "utf-8");
//   const markdownFiles = allFiles.filter((file) => {
//     return file.endsWith(".md") || file.endsWith(".mdx");
//   });
//   return markdownFiles;
// }

// export function getFrontMatter(file){
//   const fs = require("fs");
//   const matter = require("gray-matter");
//   const filePath = path.join(process.cwd(), file);
//   const str = fs.readFileSync(filePath, "utf-8");
//   const frontMatter = matter(str) 
  
//   // handle frontmatter arrays
//   frontMatter.data.authors = splitIntoArray(frontMatter.data.authors);
//   frontMatter.data.tags = splitIntoArray(frontMatter.data.tags);
//   frontMatter.data.images = splitIntoArray(frontMatter.data.images);
//   // console.log(`${frontMatter.data.authors}\n${frontMatter.data.tags}\n${frontMatter.data.images}\n`);
  
//   return frontMatter;
// }
