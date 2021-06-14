import React from "react";

const ImagePost = ({ src, alt }: { src: string; alt: string }) => (
  <div className="a-image-post">
    <img src={src} alt={alt} />
  </div>
);

export default ImagePost;
