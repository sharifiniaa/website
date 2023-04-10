import React from 'react';
import Link from 'next/link';
import Socials from './Socials';

const HomeRight = () => {
  return (
    <div className="home-right">
      <p className="hello text-8 color-light-blue">سلام</p>
      <h1 className="my-name text-12 font-weight-800 color-white">حسینم</h1>
      <p className="about-me text-6 color-light-blue">
        من توسعه دهنده وب هستم و کارم یکی از قسمت‌های جذاب زندگیم محسوب می‌شه.
        عاشق یادگیری چیزای جدید تو حوزه کاری و تخصصی خودم هستم. اگه سوالی داری
        میتونی برام{' '}
        <Link legacyBehavior href="/">
          <a className="message-link color-black">پیام</a>
        </Link>{' '}
        بفرستی!
      </p>
      <Socials />
      <style scoped jsx>
        {`
          .home-right {
            flex: 0 0 370px;
            display: flex;
            flex-direction: column;
            padding-left: 5%;
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
