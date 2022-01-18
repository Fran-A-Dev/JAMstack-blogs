import { createClient } from "contentful";
import BlogPageDetails from "../../components/BlogPageDetails";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "memory",
  });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "memory",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { memory: items[0] },
    revalidate: 1,
  };
}

export default function BlogDetails({ memory }) {
  if (!memory) return <div>...loading</div>;
  const { title, youTubeEmbedUrl, details } = memory.fields;
  return (
    <div>
      <BlogPageDetails memory={memory} />
    </div>
  );
}
