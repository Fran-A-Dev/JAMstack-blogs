import { createClient } from "contentful";
import BlogPageDetails from "../../components/BlogPageDetails";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
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
  const { details } = memory.fields;
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <BlogPageDetails memory={memory} />
      <div>
        <p className="pt-16 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl w-11/12 mx-auto content-center">
          {documentToReactComponents(details)}
        </p>
      </div>
    </div>
  );
}
