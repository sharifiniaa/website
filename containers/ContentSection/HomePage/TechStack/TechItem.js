import React from 'react';

const TechItem = ({item}) => {
  return (
    <div className="skills">
      <div className="skills skills-image-holder">
        <img
          className="skills skills-image-holder skills-image-holder-image"
          src={item.image}
          alt={item.name}
        />
      </div>
      <div className="skills skills-text-holder">
        <p className="skills skills-text-holder  skills-text-holder-name">
          {item.name}
        </p>
      </div>
      <style scoped jsx>
        {`
          .skills {
            margin: 0.8rem 0;
            display: flex;
            flex: 1;
          }
          .skills .skills-image-holder {
            text-align: center;
            padding-top: 0.5em;
            justify-content: center;
            padding-bottom: 0.5em;
            display: flex;
            flex: 1;
          }
          .skills .skills-image-holder .skills-image-holder-image {
            max-width: 60px;
            max-height: 80px;
          }
          .skills .skills-text-holder {
            display: flex;
            flex: 2;
            align-items: center;
            justify-content: flex-start;
          }
          .skills .skills-text-holder .skills-text-holder-name {
            font-size: 22px;
            line-height: 35px;
            font-weight: 500;
            color: #bfd1df;
          }
        `}
      </style>
    </div>
  );
};

export default TechItem;
