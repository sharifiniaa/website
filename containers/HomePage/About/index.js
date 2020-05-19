import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";

import { about } from "../../../mock";
import ButtonOutline from "../../../components/Buttons/ButtounOutline";

const index = () => {
  return (
    <div id="about-me" className="about section">
      <div className="about__wrapper section-wrapper">
        <div className="about-content content-1300">
          <h2 className="about-content__title">درباره من</h2>
          <p className="about-content__text">{about.text1}</p>
          <br />
          <p className="about-content__info">
            {about.text2}{" "}
            <FontAwesomeIcon
              className="home-right__description--icon"
              icon={faSmile}
            />
          </p>
          <div className="about-content__cta-holder">
            <ButtonOutline title="مشاهده نمونه کار" link="/portfolio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
