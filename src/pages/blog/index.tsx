import React, { useState, useEffect } from "react";
import { getAllPostsForBlog } from "lib/api";
import { GetStaticProps } from "next";
import { PostTitle, DatePost, Excerpt, NavItem } from "@atoms";
import { BlogPosts } from "@organisms";
import { UserLayout, Container } from "@templates";

const blog = ({ allPosts: { nodes, pageInfo } }) => {
  const [data, setData] = useState(nodes);
  const [next, setNext] = useState(pageInfo);
  const [loading, setLoading] = useState(false);
  console.log(nodes)
  const handleRequest = async () => {
    setLoading(true);
    const more = await getAllPostsForBlog(false, next.endCursor);
    setData([...data, ...more.nodes]);
    setNext(more.pageInfo);
    setLoading(false);
  };
  return (
    <UserLayout>
      <Container>
        <div className="t-blog">
          {data.map((data: any, index: number) => (
            <BlogPosts
              key={index}
              isFirst={index === 0}
              {...data}
              image={data.featuredImage?.node?.sourceUrl}
            />
          ))}
          {next.hasNextPage ? (
            !loading ? (
              <button onClick={handleRequest}>Ver Otros</button>
            ) : (
              <h1>loading</h1>
            )
          ) : null}
        </div>
      </Container>
    </UserLayout>
  );
};

export default blog;

export const getStaticProps: GetStaticProps = async ({
  preview = false,
}: {
  preview: boolean;
}) => {
  const allPosts = await getAllPostsForBlog(preview);
  return {
    props: { allPosts, preview },
  };
};
