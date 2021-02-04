import React from "react";
import Link from "next/link";
import Socials from "./Socials/Socials";

const HomeRight = () => {
  return (
    <div className="home-right">
      <p className="text-8 color-light-blue pt-3 my-4">سلام</p>
      <h1 className="home-right__name">حسینم</h1>
      <p className="home-right__description">
        من توسعه دهنده وب هستم و کارم یکی از قسمت‌های جذاب زندگیم محسوب می‌شه.
        عاشق یادگیری چیزای جدید تو حوزه کاری و تخصصی خودم هستم. اگه سوالی داری
        میتونی برام{" "}
        <Link href="/">
          <a className="home-right__description--message-link">پیام</a>
        </Link>{" "}
        بفرستی!
      </p>
      <Socials />
      <style scoped jsx>
        {`
          .home-right {
           // style there
          }
        `}
      </style>
    </div>
  );
};

export default HomeRight;
