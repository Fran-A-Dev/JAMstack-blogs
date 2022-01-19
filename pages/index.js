import { createClient } from "contentful";
import BlogList from "../components/BlogList";
import Head from "next/head";
import Hero from "../components/Hero";

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
      <Head>
        <title>JAMstack Memories</title>

        <meta content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="Fran's Netlify Nerd Blogs" />
        <meta property="og:title" content="JAMstack eCommerce " />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.netlify.com/" />
        <meta
          property="og:image"
          content="https://www.buildnextshop.com/nextjsshopify.png"
        />
        <meta
          property="og:description"
          content="This is my nerd blog on the JAMstack"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="JAMstack" />
      </Head>
      <Hero />
      <BlogList blogs={blogs} />
    </div>
  );
}
