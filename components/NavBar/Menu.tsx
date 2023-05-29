import {FC} from 'react';
import Link from 'next/link';
import {IBurger} from './Burger';
import {smoothScroll} from 'utils/helper/smoothScroll';

const Menu: FC<IBurger> = ({open, setOpen}) => {
  const onClickHandler = (target: string) => {
    smoothScroll(target);
    setOpen(!open);
  };
  return (
    <div>
      <ul className="menu d-inline-block">
        <li className="menu__menu-item">
          <a
            className="menu__menu-item menu-item-link"
            onClick={() => onClickHandler('home')}
          >
            Home
          </a>
        </li>
        <li className="menu__menu-item">
          <a
            onClick={() => onClickHandler('about-me')}
            className="menu__menu-item menu-item-link"
          >
            About Me
          </a>
        </li>
        <li className="menu__menu-item">
          <a
            onClick={() => onClickHandler('tech-stack')}
            className="menu__menu-item menu-item-link"
          >
            Tech Stack
          </a>
        </li>
        <li className="menu__menu-item">
          <a
            onClick={() => onClickHandler('contact')}
            className="menu__menu-item menu-item-link"
          >
            Contact
          </a>
        </li>
      </ul>
      <style scoped jsx>
        {`
          .menu {
            list-style: none;
            background-color: transparent;
          }

          .menu__menu-item {
            font-size: 30px;
          }

          .menu-item-link {
            cursor: pointer;
            color: #fff;
            padding: 5px 0;
            position: relative;
            font-size: 28px;
            line-height: 50px;
            font-weight: 700;
            text-decoration: none;
          }

          .menu-item-link:after {
            content: '';
            display: block;
            width: 0;
            height: 15px;
            background-color: #0582ca;
            transition: width 0.3s;
            position: absolute;
            bottom: 1px;
            z-index: -1;
          }

          .menu-item-link:hover::after {
            width: 110%;
          }

          .menu-item-link:focus::after {
            width: 110%;
          }
        `}
      </style>
    </div>
  );
};

export default Menu;
