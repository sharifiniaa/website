import React from 'react';
import Link from 'next/link';
import Socials from './Socials';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSmile} from '@fortawesome/free-regular-svg-icons';

const HomeRight = () => {
  return (
    <div className="home-right">
      <p className="hello text-8 color-light-blue">Hello! I am...</p>
      <h1 className="my-name text-12 font-weight-800 color-white">Hossein</h1>
      <p className="about-me text-6 color-light-blue">
        My passion is to create interfaces, experiences & applications for
        businesses across the world and beyond. Got a question? Drop me a
        <Link legacyBehavior href="/">
          <a className="message-link color-white pl-2">Message!</a>
        </Link>
        <FontAwesomeIcon className="pl-2" size="1x" icon={faSmile} />
      </p>
      <Socials />
      <style scoped jsx>
        {`
          .home-right {
            flex: 1 2;
            display: flex;
            flex-direction: column;
            padding: 0 5%;
          }
          .message-link {
            text-decoration: none;
            transition: all 250ms ease;
          }
          .message-link:hover {
            color: #0582ca;
          }
          .about-me {
            line-height: 2rem;
            margin-top: 2rem;
            margin-bottom: 3rem;
          }

          @media (max-width: 767.98px) {
            .home-right {
              flex: 0 0 100%;
            }
          }
          @media (max-width: 359.98px) and(max-height:480px) {
            .home-right {
              padding-top: 100px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomeRight;
