import React from "react";
import { Markup } from "interweave";

const Excerpt = ({ excerpt }: { excerpt: string }) => {
  return (
    <div className="a-excerpt">
      <Markup content={excerpt} />
    </div>
  );
};

export default Excerpt;
