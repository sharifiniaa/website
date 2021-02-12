import React from 'react';

import Header from '../containers/Header/Header';

const Layout = ({ children }) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Header />
        <div className='content-section'>
          <div className='bg-color-black'>{children}</div>
        </div>
      </div>
      <style scoped jsx>
        {`
          .content-section {
            background-color: gray;
            height: 100vh;
          }

          @media (min-width: 1200px) {
            .content-section {
              margin-right: 380px;
              width: calc(100% - 380px);
            }
          }

          @media (max-width: 1200px) {
            .content-section {
              margin-right: 80px;
              width: calc(100% - 80px);
            }
          }
          @media (max-width: 768px) {
            .content-section {
              margin-right: 0px;
              width: calc(100%);
              margin-top: 55px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
