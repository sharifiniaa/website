import React from "react";
import Link from "next/link";
import Socials from "./Socials/Socials";

const HomeRight = () => {
  return (
    <div className="home-right">
      <p className="text-8 color-light-blue pt-3 my-3 ">سلام</p>
      <h1 className="name text-12 font-weight-800 mt-0 mb-5 pt-4 pb-0 color-white">
        حسینم
      </h1>
      <p className="about-me text-6 mb-3 mb-5 text-justify color-light-blue">
        من توسعه دهنده وب هستم و کارم یکی از قسمت‌های جذاب زندگیم محسوب می‌شه.
        عاشق یادگیری چیزای جدید تو حوزه کاری و تخصصی خودم هستم. اگه سوالی داری
        میتونی برام{" "}
        <Link href="/">
          <a className="message-link color-black">پیام</a>
        </Link>{" "}
        بفرستی!
      </p>
      <Socials />
      <style scoped jsx>
        {`
          .home-right {
            flex: 0 0 370px;
            margin-left: 5%;
          }

          .message-link {
            text-decoration: none;
            transition: all 250ms ease;
            &:hover {
              color: #0582ca;
            }
          }
          .about-me {
            line-height: 2rem;
          }
        `}
      </style>
    </div>
  );
};

export default HomeRight;
