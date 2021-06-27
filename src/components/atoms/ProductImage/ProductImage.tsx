import React, { useState } from "react";
import classNames from "classnames";

const ProductImage = ({ video }: { video: string }) => {
  const [fullWidth, setFullWidth] = useState(false);

  const prefix: string = "a-product-image";
  const classForComponent: string = classNames(prefix, {
    "is-full": fullWidth,
  });

  return (
    <div className={classForComponent} onClick={() => setFullWidth(!fullWidth)} onMouseLeave={() => setFullWidth(false)}>
      <video playsInline autoPlay loop muted>
        <source src={`/videos/${video}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
};

export default ProductImage;
