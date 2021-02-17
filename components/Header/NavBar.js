import React from 'react';
import IconScroll from './IconScroll';
import Menu from './Menu';
import MyInfo from './MyInfo';

function NavBar({ open, setOpen }) {
  return (
    <div className={`header ${open ? '' : 'closed'}`}>
      <div className='header header-wrapper'>
        <div className='navbar'>
          <Menu open={open} setOpen={setOpen} />
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
            z-index: 2;
            transform: translateX(0);
            transition: all 0.3s linear;

            &.header-wrapper {
              position: relative;
              padding-right: 75px;
            }
          }

          @media (max-width: 1200px) {
            .header {
              box-shadow: 10px 1px 30px #024a80;
            }
            .header.closed {
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
