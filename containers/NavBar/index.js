import React, { useEffect, useRef, useState } from 'react';
import Burger from '../../components/NavBar/Burger';

function NavBar() {
  const [open, setOpen] = useState(false);

  const navRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div ref={navRef} className='navbar'>
      <Burger open={open} setOpen={setOpen} />
      <style scoped jsx>
        {`
          .navbar {
            position: fixed;
            width: 380px;
            background-color: #051923;
            height: 100vh;
            z-index: 2;

            @media (max-width: 1199.98px) {
              width: 80px;
            }

            @media (max-width: 767.98px) {
              height: 60px;
              width: 100%;
              z-index: 2;
            }
          }
        `}
      </style>
    </div>
  );
}

export default NavBar;
