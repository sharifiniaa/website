import React from "react";
import Link from "next/link";

const ButtonOutline = ({ link, title }) => {
  return (
    <div>
      <Link href={link ? link : "/"}>
        <a className="button-outline d-inline-block color-pink text-align-center px-4 py-3 align-middle mt-5 ">
          {title}
        </a>
      </Link>
      <style scoped jsx>
        {`
          .button-outline {
            border: #0582ca 2px solid;
            min-height: 58px;
            cursor: pointer;
            text-decoration: none;
            transition: all 250ms linear;
            border-radius: 50px;

            &:hover {
              color: white;
              background-color: #0582ca;
            }}

          
          

          
        `}
      </style>
    </div>
  );
};

export default ButtonOutline;
