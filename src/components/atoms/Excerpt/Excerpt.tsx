import React, { useEffect, useState } from "react";
import { Markup } from "interweave";

const Excerpt = ({ excerpt }: { excerpt: string }) => {
  const [newExcerpt, setNewExcerpt] = useState("");
  useEffect(()=>{
   setNewExcerpt(excerpt)
  },[])
  return (
    <div className="a-excerpt">
      <Markup content={newExcerpt} noWrap />
    </div>
  );
};

export default Excerpt;
