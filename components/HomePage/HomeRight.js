import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from '@fortawesome/free-regular-svg-icons';

const HomeRight = () => {
  return (
    <div className="home-right">
      <p className="home-right__hello">سلام</p>
      <h1 className="home-right__name">حسینم</h1>
      <p className="home-right__description">
        من توسعه دهنده وب هستم و کارم یکی از قسمت‌های جذاب زندگیم محسوب می‌شه.
        عاشق یادگیری چیزای جدید تو حوزه کاری و تخصصی خودم هستم. انقدر کد زدن رو
        دوست دارم که وقتی مشغولش می‌شم زمان از دستم در می‌ره!<FontAwesomeIcon icon={faSmile} size="lg" />
      </p>
    </div>
  );
};

export default HomeRight;
