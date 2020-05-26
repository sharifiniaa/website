import React from "react";

const InfoText = ({ title, text }) => {
  return (
    <p className="contact-content__holder--info__personal--line">
      <span className="contact-content__holder--info__personal--line__title">
        {title}:
      </span>{" "}
      {text}
    </p>
  );
};

export default InfoText;
