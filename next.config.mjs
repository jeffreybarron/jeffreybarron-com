import nextMDX from "@next/mdx";
import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdx from "remark-mdx";
import remarkGfm from "remark-gfm";

import rehypePrism from "rehype-prism";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

const prettyCodeOptions = {
  keepBackground: false,
};

const rehypeAutoLinkOptions = ['wrap' ]

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ];
  },
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: {
    // fontLoaders: [
    //   { loader: "@next/font/google", options: { subsets: ["latin"] } },
    // ],
  },
  reactStrictMode: true,
};

export default nextMDX({
  extension: /\/data\/(articles|blog|release)\/.+\.mdx?$/,
  // extension: /\.mdx?$/,
  options: {
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkMdx, [remarkFrontmatter, 'yaml'], remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { properties: { className: ["anchor"] }, behaviour:'wrap'} ],
      [rehypePrettyCode, prettyCodeOptions],
      rehypeAccessibleEmojis,
      [
        rehypePrism,
        {
          theme: "twilight",
          plugins: ["line-numbers", "autolinker", "show-language"],
        },
      ],
    ],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})(nextConfig);
