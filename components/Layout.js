import React from "react";

import Header from "../containers/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div class="row">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
