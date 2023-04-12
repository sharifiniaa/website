import {FC} from 'react';
import Link from 'next/link';
import {IBurger} from './Burger';

const Menu: FC<IBurger> = ({open, setOpen}) => {
  return (
    <div>
      <ul className="menu d-inline-block">
        <li className="menu__menu-item">
          <Link legacyBehavior href="/">
            <a
              className="menu__menu-item menu-item-link"
              onClick={() => setOpen(!open)}
            >
              Home
            </a>
          </Link>
        </li>
        <li className="menu__menu-item">
          <Link legacyBehavior href="/index">
            <a
              onClick={() => setOpen(!open)}
              className="menu__menu-item menu-item-link"
            >
              Blog
            </a>
          </Link>
        </li>
        <li className="menu__menu-item">
          <Link legacyBehavior href="/#about-me">
            <a
              onClick={() => setOpen(!open)}
              className="menu__menu-item menu-item-link"
            >
              About Me
            </a>
          </Link>
        </li>
        <li className="menu__menu-item">
          <Link legacyBehavior href="/index">
            <a
              onClick={() => setOpen(!open)}
              className="menu__menu-item menu-item-link"
            >
              Portfolio
            </a>
          </Link>
        </li>
        <li className="menu__menu-item">
          <Link legacyBehavior href="/#tech-stack">
            <a
              onClick={() => setOpen(!open)}
              className="menu__menu-item menu-item-link"
            >
              Tech Stach
            </a>
          </Link>
        </li>
        <li className="menu__menu-item">
          <Link legacyBehavior href="/#contact">
            <a
              onClick={() => setOpen(!open)}
              className="menu__menu-item menu-item-link"
            >
              Contact
            </a>
          </Link>
        </li>
        <li className="menu__menu-item">
          <Link legacyBehavior href="/#faq">
            <a
              onClick={() => setOpen(!open)}
              className="menu__menu-item menu-item-link"
            >
              FAQs
            </a>
          </Link>
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
