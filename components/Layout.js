import React from "react";

import Header from "../containers/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
        <div className="content-section">
          <div className="content-section__wrapper">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
