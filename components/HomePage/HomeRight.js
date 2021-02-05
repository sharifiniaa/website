import React from "react";
import Link from "next/link";
import Socials from "./Socials/Socials";

const HomeRight = () => {
  return (
    <div className="home-right">
      <p className="text-8 color-light-blue pt-3 my-4">سلام</p>
      <h1 className="name text-12 font-weight-800 mt-0 mb-3 pt-4 pb-0 color-white">
        حسینم
      </h1>
      <p className="text-6 mb-3 mb-5 text-justify color-light-blue">
        من توسعه دهنده وب هستم و کارم یکی از قسمت‌های جذاب زندگیم محسوب می‌شه.
        عاشق یادگیری چیزای جدید تو حوزه کاری و تخصصی خودم هستم. اگه سوالی داری
        میتونی برام{" "}
        <Link href="/">
          <a className="message-link color-black">پیام</a>
        </Link>{" "}
        بفرستی!
      </p>
      <Socials />
      <style jsx>
        {`
          .message-link {
            text-decoration: none;
            transition: all 250ms ease;
            &:hover {
              color: #0582ca;
            }
          }
          .name {
            line-height: 94px;
          }
        `}
      </style>
    </div>
  );
};

export default HomeRight;
