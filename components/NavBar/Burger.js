import BurgerIcon from './BurgerIcon';
import Navbar from './Navbar';

function Burger({open, setOpen}) {
  return (
    <>
      <BurgerIcon open={open} setOpen={setOpen} />
      <Navbar open={open} setOpen={setOpen} />
    </>
  );
}

export default Burger;
