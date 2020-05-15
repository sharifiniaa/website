import React from "react";
import Link from "next/link";

const Article = ({ data }) => {
  return (
    <div className="article-holder">
      <Link href="/">
        <a className="article-top">
          <div className="article-top__image-holder">
            <img
              alt=""
              src={data.image}
              className="article-top__image-holder--image"
            />
          </div>
          <h4 className="article-top__title">{data.title}</h4>
        </a>
      </Link>
      <div className="article-bottom">
        <p className="article-bottom__decription">
          {data.description.slice(0, 195)}...
        </p>
        <div className="article-bottom__link">
          <Link href="/">
            <a className="article-bottom__link--title">ادامه مطلب</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article;
