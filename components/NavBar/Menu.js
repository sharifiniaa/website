import React from 'react';
import Link from 'next/link';

const Menu = ({ open, setOpen }) => {
  return (
    <div>
      <ul className='menu d-inline-block'>
        <li className='menu__menu-item'>
          <Link href='/'>
            <a
              className='menu__menu-item menu-item-link'
              open={open}
              onClick={() => setOpen(!open)}
            >
              خانه
            </a>
          </Link>
        </li>
        <li className='menu__menu-item'>
          <Link href='/blog'>
            <a
              open={open}
              onClick={() => setOpen(!open)}
              className='menu__menu-item menu-item-link'
            >
              بلاگ
            </a>
          </Link>
        </li>
        <li className='menu__menu-item'>
          <Link href='/#about-me'>
            <a
              open={open}
              onClick={() => setOpen(!open)}
              className='menu__menu-item menu-item-link'
            >
              درباره من
            </a>
          </Link>
        </li>
        <li className='menu__menu-item'>
          <Link href='/portfolio'>
            <a
              open={open}
              onClick={() => setOpen(!open)}
              className='menu__menu-item menu-item-link'
            >
              نمونه کار
            </a>
          </Link>
        </li>
        <li className='menu__menu-item'>
          <Link href='/#tech-stack'>
            <a
              open={open}
              onClick={() => setOpen(!open)}
              className='menu__menu-item menu-item-link'
            >
              قابلیت ها
            </a>
          </Link>
        </li>
        <li className='menu__menu-item'>
          <Link href='/#contact'>
            <a
              open={open}
              onClick={() => setOpen(!open)}
              className='menu__menu-item menu-item-link'
            >
              تماس
            </a>
          </Link>
        </li>
        <li className='menu__menu-item'>
          <Link href='/#faq'>
            <a
              open={open}
              onClick={() => setOpen(!open)}
              className='menu__menu-item menu-item-link'
            >
              سوالات متداول
            </a>
          </Link>
        </li>
      </ul>
      <style scoped jsx>
        {`
          .menu {
            list-style: none;
            background-color: transparent;

            &__menu-item {
              font-size: 30px;

              &.menu-item-link {
                color: #fff;
                padding: 5px 0;
                position: relative;
                font-size: 28px;
                line-height: 50px;
                font-weight: 700;
                text-decoration: none;

                :after {
                  content: '';
                  display: block;
                  width: 0;
                  height: 15px;
                  background-color: #0582ca;
                  transition: width 0.3s;
                  position: absolute;
                  // right: -5%;
                  bottom: 1px;
                  z-index: -1;
                }

                :hover {
                  &:after {
                    width: 110%;
                  }
                }
                :focus {
                  &:after {
                    width: 110%;
                  }
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export default Menu;
