import IconScroll from './IconScroll';
import Menu from './Menu';
import MyInfo from './MyInfo';

function Navbar({open, setOpen}) {
  return (
    <div className="navbar">
      <Menu open={open} setOpen={setOpen} />
      <MyInfo />
      <IconScroll />
      <style scoped jsx>
        {`
          .navbar {
            padding-left: 4rem;
            padding-top: 5rem;
            height: 100vh;
            width: 320px;
            position: fixed;
            background-color: #051923;
            z-index: 2;
            transition: all 0.3s linear;
          }
          @media (max-width: 1199.98px) {
            .navbar {
              background-color: #024a80;
              transform: ${open ? 'translateX(0)' : 'translateX(-100%)'};
              box-shadow: 10px 1px 30px #051923;
            }
          }
          @media (max-width: 767.98px) {
            .navbar {
              width: 300px;
            }
          }
          @media (max-width: 359.98px) {
            .navbar {
              width: 230px;
              box-shadow: 10px 1px 30px #051923;
              padding-left: 2rem;
              padding-top: 5rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;
