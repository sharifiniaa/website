import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import Socials from "./Socials/Socials";

const HomeRight = () => {
  return (
    <div className="home-right">
      <p className="home-right__hello">سلام</p>
      <h1 className="home-right__name">حسینم</h1>
      <p className="home-right__description">
        من توسعه دهنده وب هستم و کارم یکی از قسمت‌های جذاب زندگیم محسوب می‌شه.
        عاشق یادگیری چیزای جدید تو حوزه کاری و تخصصی خودم هستم. اگه سوالی داری
        میتونی برام{" "}
        <Link href="/">
          <a className="home-right__description--message-link">پیام</a>
        </Link>{" "}
        بفرستی!
        {/* <FontAwesomeIcon className="home-right__description--icon" icon={faSmile} /> */}
      </p>
      <Socials />
    </div>
  );
};

export default HomeRight;
