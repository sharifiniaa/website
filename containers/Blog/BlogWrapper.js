import React from "react";

import Article from "../../containers/Blog/Article";
import { blog } from "../../mock";

const BlogWrapper = () => {
  return (
    <div className="blog-wrapper">
      {blog.map((item, i) => (
        <Article data={item} key={i} />
      ))}
    </div>
  );
};

export default BlogWrapper;
