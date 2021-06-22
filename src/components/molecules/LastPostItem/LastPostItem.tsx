import React from "react";
import classNames from "classnames";
import Link from "next/link";

const LastPostItem = ({
  title,
  image,
  slug,
}: {
  title: string;
  image: string;
  slug: string;
}) => {
  const prefix: string = "m-last-post-item";
  const classForComponent: string = classNames(`${prefix}`, {});
  return (
    <Link as={`/blog/${slug}`} href="/blog/[slug]">
      <a>
        <div className={classForComponent}>
          <img src={image} alt="Post Reciente" />
          <h3>{title}</h3>
        </div>
      </a>
    </Link>
  );
};

export default LastPostItem;
