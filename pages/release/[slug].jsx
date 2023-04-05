// pages/blog/[slug]/index.js [??? Side]
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import MDXLayout from "./../(layout)/MDXLayout";

export default function Page(props) {
  // props from getStaticProps()
  const router = useRouter();
  const { slug } = router.query;
  const currentPage = props.blogs.filter((file) => {
      return file.slug.includes(slug);
  });
  
  const Post = dynamic(() => import(`/data/release/${currentPage[0].fileName}`));

  return (
    <MDXLayout>
      {/* TODO: how to pass through the slug for the headings */}
      <Post slug={slug}/>
    </MDXLayout>
  );
}

// Called First
export async function getStaticPaths() {
  const apiPath = `http://localhost:3000/api/get_collection_slugs?collection=release`;
  const res = await fetch(apiPath) 
  const paths = await res.json();
  return {
    paths,
    fallback: false,
  };
}


// Called Second
export async function getStaticProps() {
  const apiPath = `http://localhost:3000/api/get_collection_info?collection=release`;
  const res = await fetch(apiPath);
  const data = await res.json();
  return {
    // Passed to the page component as props
    props: {
      blogs: data,
    },
  };
}

