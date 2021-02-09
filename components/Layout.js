import React from "react";

import Header from "../containers/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
        <div className="content-section">
          <div className="bg-color-black">{children}</div>
        </div>
      </div>
      <style scoped jsx>
        {`
          .content-section {
            margin-right: 380px;
            width: calc(100% - 380px);
            background-color: gray;
            height: 100vh;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
