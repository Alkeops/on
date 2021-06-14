import React, { useState } from "react";
import Router from "next/router";
import { getAllPostsForBlog } from "lib/api";
import { GetStaticProps } from "next";
import { PostTitle, DatePost, Excerpt, NavItem } from "@atoms";
import { BlogPost } from "@organisms";
import { UserLayout, Container } from "@templates";

const blog = ({ allPosts: { nodes } }) => {
  const { router } = Router;
  console.log(router);
  const [page, setPage] = useState(0);
  console.log(nodes);
  return (
    <UserLayout>
      <Container>
        <div className="t-blog">
          {nodes.map((data: any, index: number) => (
            <BlogPost
              key={index}
              isFirst={index === 0}
              {...data}
              image={data.featuredImage?.node?.sourceUrl}
            />
          ))}
        </div>
        <button
          onClick={() => Router.push({ pathname: "/blog", query: { page: 2 } })}
        >asdsdasdsa</button>
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
