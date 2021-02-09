import React from "react";

const TechItem = ({ item }) => {
  return (
    <div className="row skills ">
      <div className="col-9 skills skills-text-holder">
        <p className="skills skills-text-holder  skills-text-holder-name">
          {item.name}
        </p>
      </div>
      <div className="skills skills-image-holder col-3 ">
        <img
          className="skills skills-image-holder skills-image-holder-image"
          src={item.image}
          alt={item.name}
        />
      </div>
      <style scoped jsx>
        {`
          .skills {
            margin: 0.8rem 0;
            .skills-image-holder {
              text-align: center;
              padding-top: 0.5em;
              padding-bottom: 0.5em;
              .skills-image-holder-image {
                max-width: 60px;
                max-height: 80px;
              }
            }
            .skills-text-holder {
              display: flex;
              align-items: center;
              justify-content: flex-end;
              .skills-text-holder-name {
                font-size: 22px;
                line-height: 35px;
                font-weight: 500;
                color: #bfd1df;
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export default TechItem;
