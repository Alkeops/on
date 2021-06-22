import React from "react";
import { Markup } from "interweave";

const BlogPost = ({ title, content }: { title: string; content: string }) => {
  const prefix: string = "o-blog-post";
  return (
    <div className={`${prefix}`}>
      <h1 className={`${prefix}__title`}>{title}</h1>
      <div className={`${prefix}__content`}>
        <Markup content={content} noWrap />
      </div>
    </div>
  );
};

export default BlogPost;
