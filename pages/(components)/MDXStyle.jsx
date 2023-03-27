import Link from "next/link";
// pages/components/mdx/Headings.js;

export const Para = {
  P: ({ children }) => <p className="">{children}</p>,
};

export const Heading = {
  H1: ({ children }) => (
    <h1 className="pb-2 text-2xl font-extrabold uppercase text-green-400 underline hover:after:content-['_#']">
      {children}
    </h1>
  ),
  H2: ({ children }) => (
    <h2 className="text-secondaryBg py-2 pt-4 text-2xl font-semibold capitalize hover:after:content-['_#']">
      {children}
    </h2>
  ),
  H3: ({ children }) => (
    <h3 className="text-callout py-2 pt-2 text-xl font-bold capitalize">
      {children}
    </h3>
  ),
  H4: ({ children }) => (
    <h4 className="text-callout py-2 pt-2 text-lg italic">{children}</h4>
  ),
};

export const Pre = {
  pre: ({ children }) => (
    <pre className="border-primary line-numbers border border-dotted bg-black p-4">
      {children}
    </pre>
  ),
  code: ({ children }) => (
    <code className="bg-black text-white">{children}</code>
  ),
};
