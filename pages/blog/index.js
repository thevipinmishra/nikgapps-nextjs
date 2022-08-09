import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Link from "next/link";
import Typography from "../../components/Typography";
import Stack from "../../components/Stack";
import Box from "../../components/Box";
import Layout from "../../components/layout";

export default function Posts({ allPosts }) {
  return (
    <>
      <Head>
        <title>Blog | Nikgapps</title>
      </Head>

      <Stack gap={3}>
        {allPosts.map((post) => (
          <div key={post.slug}>
            <Typography variant="h3" as="h3">
              <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                <a>{post.title}</a>
              </Link>
            </Typography>
          </div>
        ))}
      </Stack>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};

Posts.getLayout = (page) => (
  <Layout
    withContent={{
      title: "Blog",
    }}
  >
    {page}
  </Layout>
);
