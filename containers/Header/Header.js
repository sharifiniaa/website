import React from "react";
import DesktopMenu from "../../components/Header/DesktopMenu";
import MyInfo from "../../components/Header/MyInfo";
import IconScroll from "../../components/Header/IconScroll";

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <header>
          <DesktopMenu />
          <MyInfo />
          <IconScroll />
        </header>
      </div>
    </div>
  );
};

export default Header;
