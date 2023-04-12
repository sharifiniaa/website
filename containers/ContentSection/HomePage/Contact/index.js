import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSmile} from '@fortawesome/free-regular-svg-icons';
import InfoText from '../../../../components/Contact/infoText';

import {contactData} from '../../../../mock';
import ContactForm from '../../../../components/Contact/ContactForm';

const index = () => {
  return (
    <div id="contact" className="contact pt-4 .bg-color-black">
      <div className="contact__wrapper p-5">
        <div className="contact-content">
          <h2 className="contact-content__title font-weight-700 text-9 mb-3 pt-3 color-blue">
            Get in touch
          </h2>

          <div className="row contact-content__holder ">
            <div className="contact-content__holder--info  mb-5 col-5">
              <p className="contact-content__holder--info__text color-light-blue text-6 m-0 pb-3">
                {contactData.section_info}
              </p>
              <FontAwesomeIcon
                className="contact-content__holder--info__text--icon text-10 d-inline m-0 mr-2"
                icon={faSmile}
              />
              <div className="contact-content__holder--info__personal mt-4">
                {contactData.personal_info.map((item, i) => (
                  <InfoText key={i} title={item.title} text={item.text} />
                ))}
              </div>
            </div>
            <div className="contact-content__holder--form col-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <style scoped jsx>
        {`
          .contact {
            position: relative;
          }
          .contact__wrapper {
            padding-bottom: 150px;
          }
          .contact__wrapper .contact-content {
            max-width: 1300px;
          }
          .contact__wrapper .contact-content__title {
            line-height: 100%;
          }
          .contact__wrapper .contact-content__holder {
            line-height: 30px;
          }
          .contact__wrapper .contact-content__holder--info__text {
            line-height: 35px;
          }
          .contact__wrapper .contact-content__holder--info__text--icon {
            vertical-align: middle;
          }
          .contact__wrapper .contact-content__holder--info__personal--line {
            line-height: 30px;
          }

          @media (max-width: 768px) {
            .contact-content__holder {
              flex-direction: column;
            }
          }
          @media (max-width: 768px) {
            .contact-content__holder--info {
              max-width: 100%;
            }
          }
          @media (max-width: 768px) {
            .contact-content__holder--form {
              max-width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default index;
