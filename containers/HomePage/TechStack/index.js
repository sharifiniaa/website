import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { skills } from "../../../mock";

import TechItem from "./TechItem";

const index = () => {
  return (
    <div id="tech-stack" className="tech-stack section">
      <div className="tech-stack-wrapper section-wrapper">
        <div className="tech-stack-content content-1300">
          <h2 className="tech-stack-content-title pt-4 pb-0 text-10">
            تخصص ها
          </h2>
          <p className="tech-stack-content-text text-7 m-0 color-light-blue">
            بخشی از تخصص های من که در فعالیت روزانه و همچنین پروژ‌ه ها استفاده
            میکنم <FontAwesomeIcon icon={faRocket} />
          </p>
          <div className="tech-stack-content-skills  row">
            {skills.map((item, i) => (
              <div key={i} className="skill-item col-12 col-md-6">
                <TechItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style scoped jsx>
        {`
          .skill-item {
            margin-right: -100px;
          }
          .tech-stack {
            .tech-stack-wrapper {
              .tech-stack-content {
                .tech-stack-content-skills {
                }
                .tech-stack-content-title {
                  line-height: 100%;
                  margin: 0 0 1rem;
                  color: #0582ca;
                }
                .tech-stack-content-text {
                  line-height: 35px;
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export default index;
