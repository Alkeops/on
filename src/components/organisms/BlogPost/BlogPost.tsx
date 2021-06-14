import React from "react";
import classNames from "classnames";
import { PostTitle, DatePost, Excerpt, NavItem, ImagePost } from "@atoms";

const BlogPost = ({ title, excerpt, image, isFirst }) => {
  const prefix: string = "o-blog-post";
  const classForComponent: string = classNames(`${prefix}`, {
    "is-first": isFirst,
  });
  return (
    <div className={classForComponent}>
      <ImagePost src={image} alt="Post Image" />
      <div className={`${prefix}__info`}>
        <PostTitle content={title} />
        <Excerpt excerpt={excerpt} />
        <NavItem isPost content="Ver Más" href="" />
      </div>
    </div>
  );
};

export default BlogPost;
