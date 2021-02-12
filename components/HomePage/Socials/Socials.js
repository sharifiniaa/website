import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faLinkedin,
  faTelegram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
  return (
    <div className='socials d-flex justify-content-start justify-content-md-between align-items-center'>
      <a
        className='socials__link d-flex text-11 color-light-blue link-icon'
        href='mailto:hosein.sharifinia@gmail.com'
      >
        <FontAwesomeIcon className='socials__link--icon' icon={faEnvelope} />
      </a>
      <a
        href='https://www.instagram.com/hossein.sharifinia'
        className='socials__link d-flex text-11 color-light-blue link-icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon className='socials__link--icon' icon={faInstagram} />
      </a>
      <a
        href='https://www.linkedin.com/in/hossein-sharifinia'
        className='socials__link d-flex text-11 color-light-blue link-icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon className='socials__link--icon' icon={faLinkedin} />
      </a>
      <a
        href='https://t.me/sharifiniahosein'
        className='socials__link d-flex text-11 color-light-blue link-icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon className='socials__link--icon' icon={faTelegram} />
      </a>
      <a
        href='https://web.whatsapp.com/send?phone=989115538225'
        className='socials__link d-flex text-11 color-light-blue link-icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon className='socials__link--icon' icon={faWhatsapp} />
      </a>
      <style scoped jsx>
        {`
          .link-icon {
            transition: all ease 250ms;
            margin-left: 20px;
          }
          .link-icon:hover {
            color: #0582ca;
          }
        `}
      </style>
    </div>
  );
};

export default Socials;
