import React from "react";
import Menu from "./Menu";

const DesktopMenu = () => {
  return (
    <div className="desktop-menu">
      <Menu />
      <style scoped jsx>
        {`
          .desktop-menu {
            position: relative;
            z-index: 2;
            padding-top: 3rem;
          }
          
        `}
      </style>
    </div>
  );
};

export default DesktopMenu;
