import React from "react";
import Link from "next/link";

const Article = ({ data }) => {
  return (
    <div className="article-holder  bg-color-gray mb-4">
      <Link href="/">
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
        <p className="article-bottom  decription text-5 color-light-blue mb-3">
          {data.description.slice(0, 195)}...
        </p>
        <div className="article-bottom article-bottom-link w-100 text-align-center">
          <Link href="/">
            <a className="article-bottom  article-bottom-link-title color-white pt-3 pb-3 text-align-center">
              ادامه مطلب
            </a>
          </Link>
        </div>
      </div>
      <style scoped jsx>
        {`
          .article-holder {
            padding: 36px;
            margin-left: 3%;
            width: 47%;
          }
          .article-top {
            transition: color 250ms linear;
            text-decoration: none;
          }
          .image-holder {
            max-height: 340px;
            overflow: hidden;
          }
          .image {
            width: 100%;
            transition: transform 0.5s ease;
          }
          .image:hover {
            transform: scale(1.05);
            width: 100%;
          }
          .article-top-title {
            line-height: 2rem;
          }
          .decription {
            line-height: 30px;
          }
          .article-bottom-link-title {
            transition: color 250ms linear;
            text-decoration: none;
          }
          .article-bottom-link-title:hover {
            color: #0582ca;
          }
        `}
      </style>
    </div>
  );
};

export default Article;
