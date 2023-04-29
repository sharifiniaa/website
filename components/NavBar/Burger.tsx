import BurgerIcon from './BurgerIcon';
import Navbar from './Navbar';

export interface IBurger {
  open: boolean;
  setOpen: (x: boolean) => void;
}

function Burger({open, setOpen}) {
  return (
    <>
      <BurgerIcon open={open} setOpen={setOpen} />
      <Navbar open={open} setOpen={setOpen} />
    </>
  );
}

export default Burger;
