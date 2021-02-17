import React from 'react';
import IconScroll from './IconScroll';
import Menu from './Menu';
import MyInfo from './MyInfo';

function NavBar({ open }) {
  return (
    <div className={`header ${open ? '' : 'opened'}`}>
      <div className='header header-wrapper'>
        <div className='navbar'>
          <Menu />
          <MyInfo />
          <IconScroll />
        </div>
      </div>
      <style scoped jsx>
        {`
          .navbar {
            position: relative;
            padding-top: 3rem;
          }

          .header {
            height: 100vh;
            width: 380px;
            position: fixed;
            background-color: #051923;
            z-index: 1;
            transform: translateX(0);
            transition: all 0.3s linear;

            &.header-wrapper {
              position: relative;
              padding-right: 75px;
            }
          }

          @media (max-width: 1200px) {
            .header.opened {
              transform: translateX(100%);
              transition: all 0.3s linear;
            }
          }
        `}
      </style>
    </div>
  );
}

export default NavBar;
