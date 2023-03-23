import { useRouter } from "next/router";
import BlogLayout from "./../../(layout)/BlogLayout";

export default function Page({ params }) {
  const router = useRouter(Request, Response);
  console.log(router);
  const { slug } = router.query;
  // const Post = require(`./../posts/${slug}.mdx`);

  return (
    <BlogLayout>
      {/* <h1>{id}</h1> */}
      {/* <Post />; */}
    </BlogLayout>
  );
}
