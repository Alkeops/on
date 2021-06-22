import React from "react";
import classNames from "classnames";
import { PostTitle, DatePost, Excerpt, NavItem, ImagePost } from "@atoms";
import Link from "next/link";

const BlogPosts = ({ title, excerpt, image, isFirst, slug }) => {
  const prefix: string = "o-blog-posts";
  const classForComponent: string = classNames(`${prefix}`, {
    "is-first": isFirst,
  });
  return (
    <div className={classForComponent}>
      <Link href={`/blog/${slug}`}>
        <a>
          <ImagePost src={image} alt="Post Image" />
        </a>
      </Link>
      <div className={`${prefix}__info`}>
        <Link href={`/blog/${slug}`}>
          <a>
            <PostTitle content={title} />
          </a>
        </Link>
        <Excerpt excerpt={excerpt} />
        <NavItem isPost content="Ver Más" href={`/blog/${slug}`} />
      </div>
    </div>
  );
};

export default BlogPosts;
