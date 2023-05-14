import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faLinkedin,
  faTelegram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
  return (
    <div className="socials">
      <a
        className="text-11 color-light-blue link-icon"
        href="mailto:hosein.sharifinia@gmail.com"
      >
        <FontAwesomeIcon className="--icon" icon={faEnvelope} />
      </a>
      <a
        href="https://www.instagram.com/hossein.sharifinia"
        className="text-11 color-light-blue link-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="--icon" icon={faInstagram} />
      </a>
      <a
        href="https://www.linkedin.com/in/hossein-sharifinia"
        className="  text-11 color-light-blue link-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="--icon" icon={faLinkedin} />
      </a>
      <a
        href="https://t.me/sharifiniahosein"
        className="  text-11 color-light-blue link-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="--icon" icon={faTelegram} />
      </a>
      <a
        href="https://web.whatsapp.com/send?phone=989115538225"
        className="  text-11 color-light-blue link-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="--icon" icon={faWhatsapp} />
      </a>
      <style scoped jsx>
        {`
          .socials {
            margin-top: 2rem;
            display: flex;
          }
          .link-icon {
            transition: all ease 250ms;
            margin-left: 20px;
          }
          .link-icon:hover {
            color: #0582ca;
          }

          @media (max-width: 991.98px) {
            .socials {
              flex-wrap: wrap;
            }
          }
           @media (max-width: 359.98px) {
           .socials{
           display: flex;
           justify-content: space-between;
           }
               .link-icon {
               margin-left: 10px;
               transform: scale(0.8);
               }
               .link-icon:first-child{
               margin-left: 0;
               }
           }
        `}
      </style>
    </div>
  );
};

export default Socials;
