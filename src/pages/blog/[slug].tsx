import { Container, UserLayout } from "@templates";
import { getAllPostsWithSlug, getPostAndMorePosts } from "lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Markup } from "interweave";
import React, {useState, useEffect} from "react";
import { BlogPost } from "@organisms";

const posts = ({ post, posts, preview }) => {
  const [postInfo, setPostInfo] = useState(post);
  const router = useRouter();
  const prefix: string = "p-blog-post";
 //En un useEffect para que no lance error
  return (
    <UserLayout>
      <img
        className={`${prefix}__image`}
        src={postInfo?.featuredImage?.node?.sourceUrl}
      />
      <Container>
        <BlogPost title={postInfo?.title} content={postInfo?.content} />
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
