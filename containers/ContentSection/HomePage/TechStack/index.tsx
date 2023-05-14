import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRocket} from '@fortawesome/free-solid-svg-icons';
import {skills} from 'mock';

import TechItem from './TechItem';

const TechStack = () => {
  return (
    <div id="tech-stack" className="tech-stack bg-color-black pt-5">
      <div className="tech-stack-wrapper px-3 px-sm-5">
        <div className="tech-stack-content ">
          <h2 className="tech-stack-content-title pt-4 font-weight-700 pb-3 text-10">
            Tech Stack
          </h2>
          <p className="tech-stack-content-text text-7 m-0 color-light-blue">
            Here is my favourite Tech Stack, languages and frameworks that I use
            every day in most of my projects.
            <FontAwesomeIcon className="pl-2" icon={faRocket} />
          </p>
          <div className="d-flex flex-column flex-sm-row flex-sm-wrap">
            {skills.map((item, i) => (
              <div key={i} className="skill-item w-100 d-flex">
                <TechItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style scoped jsx>
        {`
          .tech-stack {
            position: relative;
          }
          .skill-item {
            flex: 50%;
          }
          .tech-stack .tech-stack-wrapper .tech-stack-content {
            max-width: 1300px;
          }
          .tech-stack
            .tech-stack-wrapper
            .tech-stack-content
            .tech-stack-content-title {
            line-height: 100%;
            margin: 0 0 1rem;
            color: #0582ca;
          }
          .tech-stack
            .tech-stack-wrapper
            .tech-stack-content
            .tech-stack-content-text {
            line-height: 35px;
          }
        `}
      </style>
    </div>
  );
};

export default TechStack;
