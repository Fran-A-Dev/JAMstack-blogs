import { createClient } from "contentful";
import BlogList from "../components/BlogList";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "memory" });

  return {
    props: {
      blogs: res.items,
      revalidate: 1,
    },
  };
}

export default function Recipes({ blogs }) {
  console.log(blogs);

  return (
    <div className="text-3xl">
      <BlogList blogs={blogs} />
    </div>
  );
}
