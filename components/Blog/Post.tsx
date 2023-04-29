const Post = ({data}) => {
  return (
    <div className="post">
      <h1 className="page-title">{data.title}</h1>
      <div className="article">
        <div className="article-image">
          <img alt="" src="https://picsum.photos/600/500" />
        </div>
        <div className="article-section">
          <h4 className="article-title text-10 color-blue">{data.title}</h4>
          <p className="article-paragraph">{data.description}</p>
        </div>
      </div>
      <style scoped jsx>{`
        .post {
          padding-top: 3rem;
          padding-left: 5%;
          padding-right: 5%;
        }
        .page-title {
          color: #fff;
          font-size: 3rem;
          font-weight: 800;
          line-height: 94px;
          margin-top: 0;
          margin-bottom: 1rem;
        }
        .article {
          display: flex;
          flex-direction: row;
        }
        .article-section {
          display: flex;
          flex-direction: column;
        }
        .article-image {
          display: block;
          max-height: 340px;
          overflow: hidden;
        }
        .article-image img {
          width: 100%;
          transition: transform 0.5s ease;
        }
        .article-title {
          margin: 2rem 0 2rem 0;
        }
        .article-paragraph {
          line-height: 2rem;
        }

        @media (max-width: 991.98px) {
          .article {
            flex-direction: column;
          }
        }

        @media (min-width: 768px) {
          .article-image {
            flex: 300px 0 0;
            margin: 2rem 0 0 2rem;
            max-height: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Post;
