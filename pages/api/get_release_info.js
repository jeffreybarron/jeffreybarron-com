// pages/api/blogroll.js [Server Side]
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from "path";
import { promises as fs } from "fs";
const ROOT_FOLDER_DATA = "/data"

export default async function handler(req, res) {
  // TODO: for some reason req.query is empty
  const files = await getSlugData(req.query);
  res.status(200).json( files );
}

export async function getSlugData(folder = "release"){
  const directoryPath = path.join(process.cwd(), `${ROOT_FOLDER_DATA}/${folder}`);
  const allFiles = await fs.readdir(directoryPath, "utf-8");
  const blogFiles = allFiles.filter((file) => {
    return file.endsWith(".md") || file.endsWith(".mdx");
  });
  const paths = blogFiles.map((file) => { 
    let slug = "";
    let ext = "";
    const lastDotIndex = file.lastIndexOf(".");
    if (lastDotIndex === -1) {
      slug = file;
      ext = "";
    }
    slug = file.substring(0, lastDotIndex);
    ext = file.substring(lastDotIndex, file.length);
    return ({
      fileName: file,
      filePath: `${ROOT_FOLDER_DATA}/${folder}/${file}`,
      fileRoute: `/${folder}/${slug}`,
      slug: slug,
      ext: ext 
    })
  });
  return paths;
};
