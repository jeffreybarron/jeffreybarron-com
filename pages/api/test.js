import { useRouter } from "next/router";
import BlogLayout from "../../(layout)/BlogLayout";
export default function Page({ params }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <BlogLayout>
      <h1>{slug}</h1>
      {/* <Post />; */}
    </BlogLayout>
  );
}
