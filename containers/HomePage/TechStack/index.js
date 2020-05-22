import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { skills } from "../../../mock";

import TechItem from "./TechItem";

const index = () => {
  return (
    <div id="tech-stack" className="tech-stack section">
      <div className="tech-stack__wrapper section-wrapper">
        <div className="tech-stack-content content-1300">
          <h2 className="tech-stack-content__title">تخصص ها</h2>
          <p className="tech-stack-content__text">
            بخشی از تخصص های من که در فعالیت روزانه و همچنین پروژ‌ه ها استفاده
            میکنم <FontAwesomeIcon icon={faRocket} />
          </p>
          <div className="tech-stack-content__skills row">
            {skills.map((item, i) => (
              <div key={i} className="col-12 col-md-6">
                <TechItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
