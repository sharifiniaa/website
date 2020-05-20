import React from "react";

const Timeline_item = ({ data }) => {
  return (
    <li className="timeline__item">
      <span className="timeline__item--circle" />
      <div className="timeline__item--content">
        <p className="timeline__item--content__text">
          <b className="timeline__item--content__text--time">{data.time_ago}</b>
          {data.text}
        </p>
      </div>
      <div className="timeline__item--date">{data.date}</div>
    </li>
  );
};

export default Timeline_item;
