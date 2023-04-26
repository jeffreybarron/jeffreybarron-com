import path from "path";
import { promises as fs } from "fs";
const ROOT_FOLDER_DATA = "/data"

export default async function sitemap(req, res) {
  // Fetch data from a CMS.

  const blog = await getBlogRoll("blog");
  const release = await getBlogRoll("release");
  const localRoutes = [
    '/about', 
    '/contact', 
    '/curriculum-vitae', 
    '/privacy-policy', 
    '/terms-and-conditions'];

  let routes = [];
  const pages = routes.concat(localRoutes, blog, release);

  const urlSet = pages
    .map((page) => {
      // Build url portion of sitemap.xml
      return `<url><loc>${process.env.DOMAIN_URL}${page}</loc></url>`;
    })
    .join('');

  // Add urlSet to entire sitemap string
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`;

  // set response content header to xml
  res.setHeader('Content-Type', 'text/xml');
  // write the sitemap
  res.write(sitemap);
  res.end();
};


  // return an array of file path strings

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
