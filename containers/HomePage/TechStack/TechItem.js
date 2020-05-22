import React from "react";

const TechItem = ({ item }) => {
  return (
    <div className="row skills">
      <div className="col-9 skills__text-holder">
        <p className="skills__text-holder--name">{item.name}</p>
      </div>
      <div className="col-3 skills__image-holder">
        <img
          className="skills__image-holder--image"
          src={item.image}
          alt={item.name}
        />
      </div>
    </div>
  );
};

export default TechItem;
