import React, { useState } from "react";
import NavBar from "./NavBar";

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        {" "}
        <NavBar open={open} setOpen={setOpen} />
      </div>
      <div className="main-con">
        <div className="main" open={open} onClick={() => setOpen(!open)}>
          <div className={`child-div ${open ? "opened" : ""}`} />
          <div className={`child-div ${open ? "opened" : ""}`} />
          <div className={`child-div ${open ? "opened" : ""}`} />
        </div>
        <style scoped jsx>
          {`
            .main {
              width: 2rem;
              height: 2rem;
              position: fixed;
              top: 15px;
              right: 20px;
              display: flex;
              cursor: pointer;

              justify-content: space-around;
              flex-flow: column nowrap;
              z-index: 20;
            }
            .child-div {
              border-radius: 10px;
              width: 2rem;
              height: 0.25rem;
              background-color: #faefff;
              transform-origin: 1px;
              transition: all 0.3s linear;
            }
            .child-div.opened {
              border-radius: 10px;
              width: 2rem;
              height: 0.25rem;
              background-color: #bfd1df;
              transform-origin: 1px;
              transition: all 0.3s linear;

              &:nth-child(1) {
                transform: rotate(45deg);
              }
              &:nth-child(2) {
                transform: translateX(100%);
                opacity: 0;
              }
              &:nth-child(3) {
                transform: rotate(-45deg);
              }
            }

            @media (min-width: 1200px) {
              display: none;
            }
            @media (max-width: 768px) {
              .main-con {
                width: 100%;
                height: 4rem;
                transition: all 0.3s linear;
                background-color: ${open ? "transparent" : "#051923"};
                position: fixed;
                top: 0;
                right: 0;
                display: flex;

                justify-content: space-around;
                flex-flow: column nowrap;
                z-index: 5;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}

export default Burger;
