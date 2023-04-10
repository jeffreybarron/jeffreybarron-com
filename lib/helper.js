// import path from "path";
// import { promises as fs } from "fs";
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
