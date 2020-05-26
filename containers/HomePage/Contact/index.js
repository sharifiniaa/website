import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import InfoText from "../../../components/Contact/infoText";

import { contactData } from "../../../mock";

const index = () => {
  return (
    <div id="contact" className="contact section">
      <div className="contact__wrapper section-wrapper">
        <div className="contact-content content-1300">
          <h2 className="contact-content__title">تماس با من</h2>
          <div className="row contact-content__holder">
            <div className="contact-content__holder--info col-5">
              <p className="contact-content__holder--info__text">
                {contactData.section_info}
                <FontAwesomeIcon
                  className="contact-content__holder--info__text--icon"
                  icon={faSmile}
                />
              </p>
              <div className="contact-content__holder--info__personal">
                {contactData.personal_info.map((item, i) => (
                  <InfoText title={item.title} text={item.text} />
                ))}
              </div>
            </div>
            <div className="contact-content__holder--form col-7">FORM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
