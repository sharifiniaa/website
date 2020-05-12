import React from "react";

const MyInfo_Item = ({ title, content }) => {
  return (
    <div className="my-info-item">
      <p className="my-info-item__title">{title}</p>
      <p className="my-info-item__content">{content}</p>
    </div>
  );
};

export default MyInfo_Item;
