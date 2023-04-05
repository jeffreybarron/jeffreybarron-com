// pages/api/blogroll.js [Server Side]
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from "path";
import { promises as fs } from "fs";
const ROOT_FOLDER_DATA = "/data"

export default async function handler(req, res) {
  const files = await getBlogRoll('blog');
  res.status(200).json( files );
}

export async function getBlogRoll(folder = "blog"){
  const directoryPath = path.join(process.cwd(), `${ROOT_FOLDER_DATA}/${folder}`);
  const allFiles = await fs.readdir(directoryPath, "utf-8");
  const blogFiles = allFiles.filter((file) => {
    return file.endsWith(".md") || file.endsWith(".mdx");
  });

  let paths = blogFiles.map((file) => { 
    let slug = "";
    const lastDotIndex = file.lastIndexOf(".");
    if (lastDotIndex === -1) {
      slug = file;
    }
    slug = file.substring(0, lastDotIndex);
    return (
        `/${folder}/${slug}`
    )
  });
  return paths;
};
