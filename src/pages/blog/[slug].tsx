import { Container, UserLayout } from "@templates";
import { getAllPostsWithSlug, getPostAndMorePosts } from "lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Markup } from "interweave";
import React from "react";

const posts = ({ post, posts, preview }) => {
    console.log({post, posts, preview})
  const router = useRouter();
  const { content, title } = post; //En un useEffect para que no lance error
  return (
    <UserLayout>
      <Container>
          <img src={post.featuredImage.node.sourceUrl}/>
        <h1>{title}</h1>
        <Markup content={content} noWrap />
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
