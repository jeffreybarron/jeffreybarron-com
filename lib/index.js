export const sortByDate = (a, b) => {
  return new Date(b.frontMatter.modified) - new Date(a.frontMatter.modified);
}
