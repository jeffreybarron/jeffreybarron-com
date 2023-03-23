export const truncateFileExtensions = (filenames) => {
  return filenames.map((filename) => {
    const lastDotIndex = filename.lastIndexOf(".");
    if (lastDotIndex === -1) {
      return filename;
    }
    return filename.substring(0, lastDotIndex);
  });
};
