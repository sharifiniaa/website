import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <a
        className="d-flex text-11 color-light-blue link-icon"
        href="mailto:hosein.sharifinia@gmail.com"
      >
        <FontAwesomeIcon className="socials__link--icon" icon={faEnvelope} />
      </a>
      <a
        href="https://www.instagram.com/hossein.sharifinia"
        className="d-flex text-11 color-light-blue link-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="socials__link--icon" icon={faInstagram} />
      </a>
      <a
        href="https://www.linkedin.com/in/hossein-sharifinia"
        className="d-flex text-11 color-light-blue link-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="socials__link--icon" icon={faLinkedin} />
      </a>
      <a
        href="https://t.me/sharifiniahosein"
        className="d-flex text-11 color-light-blue link-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="socials__link--icon" icon={faTelegram} />
      </a>
      <a
        href="https://web.whatsapp.com/send?phone=989115538225"
        className="d-flex text-11 color-light-blue link-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="socials__link--icon" icon={faWhatsapp} />
      </a>
      <style>
        {`
        .link-icon{
          transition: all ease 250ms;          
        }
        .link-icon:hover{
          color:#0582ca;
        }
        `}
      </style>
    </div>
  );
};

export default Socials;
