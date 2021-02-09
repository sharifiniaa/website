import React from "react";

const InfoText = ({ title, text }) => {
  return (
    <div>
      <p className="contact-content__holder--info__personal--line text-5 font-weight-400 color-light-blue">
        <span className="font-weight-700">
          {title}:
        </span>{" "}
        {text}
      </p>
    </div>
  );
};

export default InfoText;
