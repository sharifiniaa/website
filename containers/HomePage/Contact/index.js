import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import InfoText from "../../../components/Contact/infoText";

import { contactData } from "../../../mock";
import ContactForm from "../../../components/Contact/ContactForm";

const index = () => {
  return (
    <div id="contact" className="contact pt-4 .bg-color-black">
      <div className="contact__wrapper p-5">
        <div className="contact-content">
          <h2 className="contact-content__title text-9 mb-3 pt-3 color-blue">
            تماس با من
          </h2>

          <div className="row contact-content__holder ">
            <div className="contact-content__holder--info col-5">
              <p className="contact-content__holder--info__text color-light-blue text-6 m-0 pb-3">
                {contactData.section_info}
                <FontAwesomeIcon
                  className="contact-content__holder--info__text--icon text-10 d-inline m-0 mr-2"
                  icon={faSmile}
                />
              </p>
              <div className="contact-content__holder--info__personal mt-4">
                {contactData.personal_info.map((item, i) => (
                  <InfoText title={item.title} text={item.text} />
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

            &__wrapper {
              padding-bottom: 150px;
              .contact-content {
                max-width: 1300px;
                &__title {
                  line-height: 100%;
                }

                &__holder {
                  //   margin-left: 5%;
                  line-height: 30px;
                  &--info {
                    &__text {
                      line-height: 35px;

                      &--icon {
                        vertical-align: middle;
                      }
                    }

                    &__personal {
                      &--line {
                        line-height: 30px;
                      }
                    }
                  }
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
