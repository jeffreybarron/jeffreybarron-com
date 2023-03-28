// import { data } from "autoprefixer";
import Link from "next/link";
// pages/components/mdx/Headings.js;

export default function Para({ children }) {
  // const data = <p className="inline-block py-2">{children}</p>;
  // return output;
  if (children.hasOwnProperty("type")) {
    switch(children.type){
      case "a":
        return (
          <Link href={children.props.href} className="inline-block py-2" passHref>
            <>{children}</>
          </Link>
        );
      case "li":
        return <li>{children}</li>;
    }
  }
  return <p className="inline-block py-2">{children}</p>;
}

export const Heading = {
  H1: ({ children }) => (
    <h1 className="pb-2 text-2xl font-extrabold uppercase underline hover:after:content-['_#']">
      {children}
    </h1>
  ),
  H2: ({ children }) => (
    <h2 className="text-secondary py-2 pt-4 text-2xl font-semibold capitalize hover:after:content-['_#']">
      {children}
    </h2>
  ),
  H3: ({ children }) => (
    <h3 className="text-tertiary py-2 pt-2 text-xl font-bold capitalize">
      {children}
    </h3>
  ),
  H4: ({ children }) => (
    <h4 className="text-tertiary py-2 pt-2 text-lg italic">{children}</h4>
  ),
};

export const Pre = {
  PRE: ({ children }) => (
    <pre className="language-jsx my-4 grid border border-dotted p-4">
      {children}
    </pre>
  ),
  CODE: ({ children }) => (
    <code className="line-numbers text-tertiary">{children}</code>
  ),
};

export const Lists = {
  OL: ({ children }) => (<ol>{children}</ol>),
  UL: ({ children }) => (
  <ul>
    {children}
  </ul>
  ),
  LI: ({ children }) => (<li>{children}</li>),
};
