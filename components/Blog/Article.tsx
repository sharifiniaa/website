import Link from 'next/link';
import {FC} from 'react';

export interface IArticle {
  id: number;
  title: string;
  image: string;
  description: string;
}

type Props = {
  data: IArticle;
};

const Article: FC<Props> = ({data}) => {
  return (
    <div className="article-holder  bg-color-gray mb-4">
      <Link legacyBehavior href="/">
        <a className="article-top color-white ">
          <div className="article-top image-holder d-block ">
            <img
              alt=""
              src={data.image}
              className="article-top image-holder image "
            />
          </div>
          <h4 className="article-top article-top-title text-7 color-blue font-weight-700 m-0 pt-3 pb-0 ">
            {data.title}
          </h4>
        </a>
      </Link>
      <div className="article-bottom ">
        <p className="article-bottom description text-5 color-light-blue mb-3">
          {data.description.slice(0, 100)}...
        </p>
        <div className="article-bottom article-bottom-link w-100">
          <Link legacyBehavior href={`/blog/${data.id}`}>
            <a className="article-bottom article-bottom-link-title color-white pt-3 pb-3">
              Continue reading..
            </a>
          </Link>
        </div>
      </div>
      <style scoped jsx>
        {`
          .article-holder {
            padding: 36px;
            width: 47%;
          }
          .article-holder:nth-child(2) {
            margin-left: 3%;
          }
          .article-top {
            transition: color 250ms linear;
            text-decoration: none;
          }
          .image-holder {
            max-height: 500px;
            overflow: hidden;
          }
          .image {
            width: 100%;
            transition: transform 0.5s ease;
            &:hover {
              transform: scale(1.05);
              width: 100%;
            }
          }

          .article-top-title {
            line-height: 2rem;
          }
          .description {
            line-height: 30px;
          }
          .article-bottom-link-title {
            transition: color 250ms linear;
            text-decoration: none;
            margin: 0 auto;
            width: 100%;
            display: inline-block;
            text-align: center;
            &:hover {
              color: #0582ca;
            }
          }
          @media (max-width: 768px) {
            .article-holder {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Article;
