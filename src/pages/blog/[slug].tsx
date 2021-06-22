import { Container, UserLayout } from "@templates";
import { getAllPostsWithSlug, getPostAndMorePosts } from "lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useState, useEffect } from "react";
import { BlogPost } from "@organisms";
import { LastPostItem } from "@molecules";
import { SocialNetworks } from "@atoms";
const posts = ({ post, posts, preview }) => {
  const [postInfo, setPostInfo] = useState<any>({});
  useEffect(() => {
    setPostInfo(post);
  }, [post]);
  /*  const [recentPosts, setRecentPosts] = useState(posts); */
  const prefix: string = "p-blog-post";
  return (
    <UserLayout>
      <img
        className={`${prefix}__image`}
        src={postInfo?.featuredImage?.node?.sourceUrl}
      />
      <Container>
        <BlogPost title={postInfo?.title} content={postInfo?.content} />
        <div className={`${prefix}__share`}>
          <h3>Compartelo</h3>
          <div className={`${prefix}__share-items`}>
            <SocialNetworks network="Facebook" href="/" isWhite />
            <SocialNetworks network="Whatsapp" href="/" isWhite/>
            <SocialNetworks network="Twitter" href="/" isWhite/>
          </div>
        </div>
        <div className={`${prefix}__last-posts`}>
          <h3>Los artículos más recientes</h3>
          {posts.edges.map(({ node: { title, featuredImage, slug } }) => (
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
