import BurgerIcon from './BurgerIcon';
import RightNav from './RightNav';

function Burger({ open, setOpen }) {
  return (
    <>
      <BurgerIcon open={open} setOpen={setOpen} />
      <RightNav open={open} setOpen={setOpen} />
    </>
  );
}

export default Burger;
