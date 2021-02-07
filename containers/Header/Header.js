import React from "react";
import DesktopMenu from "../../components/Header/DesktopMenu";
import MyInfo from "../../components/Header/MyInfo";
import IconScroll from "../../components/Header/IconScroll";

const Header = () => {
  return (
    <div className="header">
      <div className="header header-wrapper">
        <header>
          <DesktopMenu />
          <MyInfo />
          <IconScroll />
        </header>
      </div>
      <style scoped jsx>
        {`
          .header {
            width: 380px;
            height: 100vh;
            position: fixed;
            background-color: #051923;
            z-index: 1;

            &.header-wrapper {
              position: relative;
              padding-right: 75px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Header;
