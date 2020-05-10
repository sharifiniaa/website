import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <ul className="menu">
      <li className="menu__item">
        <Link href="/">
          <a className="menu__item--link">خانه</a>
        </Link>
      </li>
      <li className="menu__item">
        <Link href="/">
          <a className="menu__item--link">بلاگ</a>
        </Link>
      </li>
      <li className="menu__item">
        <Link href="/">
          <a className="menu__item--link">درباره من</a>
        </Link>
      </li>
      <li className="menu__item">
        <Link href="/">
          <a className="menu__item--link">قابلیت ها</a>
        </Link>
      </li>
      <li className="menu__item">
        <Link href="/">
          <a className="menu__item--link">نمونه کار</a>
        </Link>
      </li>
      <li className="menu__item">
        <Link href="/">
          <a className="menu__item--link">تماس</a>
        </Link>
      </li>
      <li className="menu__item">
        <Link href="/">
          <a className="menu__item--link">سوالات متداول</a>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
