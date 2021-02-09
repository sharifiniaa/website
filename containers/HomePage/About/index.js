import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";

import { about } from "../../../mock";
import ButtonOutline from "../../../components/Buttons/ButtounOutline";

const index = () => {
  return (
    <div id="about-me" className="about pt-4 color-black">
      <div className="about__wrapper px-5">
        <div className="about-content">
          <h2 className="about-content__title text-9 color-blue pt-4 pb-0 m-0 mb-3">
            درباره من
          </h2>
          <p className="about-content__text color-light-blue text-6 font-weight-500 mt-3">
            {about.text1}
          </p>
          <br />
          <p className="about-content__info text-7 m-0 color-light-blue">
            {about.text2}{" "}
            <FontAwesomeIcon
              className="about-me-description-icon text-10 "
              icon={faSmile}
            />
          </p>
          <div className="about-content__cta-holder mt-4 mb-0">
            <ButtonOutline title="مشاهده نمونه کار" link="/portfolio" />
          </div>
        </div>
      </div>
      <style scoped jsx>
        {`
          .about {
            position: relative;
            &__wrapper {
              .about-content {
                max-width: 1300px;
                &__title {
                  line-height: 100%;
                }
                &__text {
                  line-height: 30px;
                }
                &__info {
                  line-height: 35px;
                }
                &__cta-holder {
                }
              }
            }
          }
          .about-me-description-icon {
            vertical-align: middle;
            display: inline;
            margin: 3px;
          }
        `}
      </style>
    </div>
  );
};

export default index;
