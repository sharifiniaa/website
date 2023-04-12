import {FC} from 'react';
import {IBurger} from './Burger';

const BurgerIcon: FC<IBurger> = ({open, setOpen}) => {
  return (
    <div className="burger-icon" onClick={() => setOpen(!open)}>
      <div className={`burger-nth-child ${open ? 'opened' : ''}`} />
      <div className={`burger-nth-child ${open ? 'opened' : ''}`} />
      <div className={`burger-nth-child ${open ? 'opened' : ''}`} />

      <style scoped jsx>
        {`
          .burger-icon {
            width: 2rem;
            height: 2rem;
            position: fixed;
            top: 15px;
            left: 20px;
            display: flex;
            cursor: pointer;
            justify-content: space-around;
            flex-flow: column nowrap;
            z-index: 20;
          }
          .burger-nth-child {
            border-radius: 10px;
            width: 2rem;
            height: 0.25rem;
            background-color: #faefff;
            transform-origin: 1px;
            transition: all 0.3s linear;
          }
          .burger-nth-child.opened {
            border-radius: 10px;
            width: 2rem;
            height: 0.25rem;
            background-color: #bfd1df;
            transform-origin: 1px;
            transition: all 0.3s linear;
          }

          .burger-nth-child.opened:nth-child(1) {
            transform: rotate(45deg);
          }
          .burger-nth-child.opened:nth-child(2) {
            transform: translateX(100%);
            opacity: 0;
          }
          .burger-nth-child.opened:nth-child(3) {
            transform: rotate(-45deg);
          }

          @media (min-width: 1200px) {
            .burger-icon {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BurgerIcon;
