import React from "react";
import DesktopMenu from "../../components/Header/DesktopMenu";

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <header>
          <DesktopMenu />
        </header>
      </div>
    </div>
  );
};

export default Header;
