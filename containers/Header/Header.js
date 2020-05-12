import React from "react";
import DesktopMenu from "../../components/Header/DesktopMenu";
import MyInfo from "../../components/Header/MyInfo";

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <header>
          <DesktopMenu />
          <MyInfo />
        </header>
      </div>
    </div>
  );
};

export default Header;
