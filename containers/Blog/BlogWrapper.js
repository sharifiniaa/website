import React from 'react';

import Article from '../../containers/Blog/Article';
import { blog } from '../../mock';

const BlogWrapper = () => {
  return (
    <div className='blog-wrapper d-flex'>
      {blog.map((item, i) => (
        <Article data={item} key={i} />
      ))}
      <style scoped jsx>
        {`
          @media (max-width: 768px) {
            .blog-wrapper {
              flex-direction: column;
            }
          } ;
        `}
      </style>
    </div>
  );
};

export default BlogWrapper;
