import { Container, UserLayout } from "@templates";
import { getAllPostsWithSlug, getPostAndMorePosts } from "lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState, useEffect } from "react";
import { BlogPost } from "@organisms";
import { LastPostItem } from "@molecules";
import { SocialNetworks } from "@atoms";
import { useRouter } from "next/router";
import Head from "next/head";
const posts = ({ post, posts, preview }) => {
  const [postInfo, setPostInfo] = useState<any>({});
  const router = useRouter();
  useEffect(() => {
    setPostInfo(post);
  }, [post]);
  /*  const [recentPosts, setRecentPosts] = useState(posts); */
  const prefix: string = "p-blog-post";
  return (
    <UserLayout>
      <Head>
        <meta name="og:title" content="European Travel Destinations" />
        <title>Otro titulo</title>
        <meta
          name="og:description"
          content="Offering tour packages for individuals or groups."
        />
        <meta
          name="og:image"
          content="http://euro-travel-example.com/thumbnail.jpg"
        />
        <meta
          name="og:url"
          content="http://euro-travel-example.com/index.htm"
        />
      </Head>
      <img
        className={`${prefix}__image`}
        src={postInfo?.featuredImage?.node?.sourceUrl}
      />
      <Container>
        <BlogPost title={postInfo?.title} content={postInfo?.content} />
        <div className={`${prefix}__share`}>
          <h3>Compartelo</h3>
          <div className={`${prefix}__share-items`}>
            <SocialNetworks
              network="Facebook"
              href={`https://www.facebook.com/sharer/sharer.php?u=https://on-ruddy.vercel.app${router.asPath}`}
              target="_blank"
              isWhite
            />
            <SocialNetworks
              network="Whatsapp"
              href={`https://wa.me/?text=https://on-ruddy.vercel.app${router.asPath}`}
              target="_blank"
              isWhite
            />
            <SocialNetworks
              network="Twitter"
              href={`https://twitter.com/intent/tweet?url=https://on-ruddy.vercel.app${router.asPath}`}
              target="_blank"
              isWhite
            />
          </div>
        </div>
        <div className={`${prefix}__last-posts`}>
          <h3>Los artículos más recientes</h3>
          {posts?.edges?.map(({ node: { title, featuredImage, slug } }) => (
            <LastPostItem
              key={title}
              title={title}
              image={featuredImage?.node?.sourceUrl}
              slug={slug}
            />
          ))}
        </div>
      </Container>
    </UserLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);
  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: true,
  };
};
export default posts;
