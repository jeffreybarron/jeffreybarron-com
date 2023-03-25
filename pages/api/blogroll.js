// pages/api/blogroll.js [Server Side]

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const files = await getFileNames();
  res.status(200).json({ files });
  console.log("here you go");
}

async function getFileNames() {
  console.log("start");
  const directoryPath = path.join(process.cwd(), "pages/blog/posts");
  console.log(directoryPath);
  const fileNames = fs.readdir(directoryPath, function (err, files) {
    console.log(files);
    //handling error
    if (err) {
      console.log("error", err);
      throw new Error("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    const fileList = [];
    files.forEach(function (file) {
      // Do whatever you want to do with the file
      fileList.push[file];
    });
    return fileList;
  });
  console.log("return", fileNames);
}

//passsing directoryPath and callback function
