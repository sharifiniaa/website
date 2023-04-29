import BlogWrapper from 'components/Blog/BlogWrapper';

const BlogPosts = () => {
  return (
    <div id="blog" className="last-blog pt-4 bg-color-black">
      <div className="last-blog__wrapper px-5 ">
        <div className="last-blog-content ">
          <h1 className="last-blog-content__title text-10 mb-5 pt-5 color-blue">
            بلاگ
          </h1>
          <BlogWrapper />
        </div>
      </div>
      <style scoped jsx>
        {`
          .last-blog__wrapper {
            position: relative;
          }
          .last-blog__wrapper .last-blog-content__title {
            line-height: 100%;
          }

          .last-blog-content {
            max-width: 1300px;
          }
        `}
      </style>
    </div>
  );
};

export default BlogPosts;
