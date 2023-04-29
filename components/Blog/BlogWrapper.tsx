import Article from './Article';
import {blog} from 'mock';

const BlogWrapper = () => {
  return (
    <div className="blog-wrapper d-flex align-items-center justify-content-between">
      {blog.map((item, i) => (
        <Article data={item} key={i} />
      ))}
      <style scoped jsx>
        {`
          @media (max-width: 768px) {
            .blog-wrapper {
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BlogWrapper;
