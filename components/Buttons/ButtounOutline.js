import React from 'react';
import Link from 'next/link';

const ButtonOutline = ({link, title, square, className}) => {
  return (
    <div className={`button-outline ${className} ${square ? 'square' : ''}`}>
      <Link legacyBehavior href={link ? link : '/'}>
        <a className="button-outline__tag ">{title}</a>
      </Link>
      <style scoped jsx>
        {`
          .button-outline {
            display: inline-block;
            padding: 1rem 2rem 1rem 2rem;
            margin-top: 3rem;
            border: #0582ca 2px solid;
            cursor: pointer;
            transition: all 250ms linear;
            border-radius: 50px;
            text-align: center;
          }
          .button-outline__tag {
            color: #faefff;
            vertical-align: middle;
            text-decoration: none;
          }
          .button-outline:hover {
            background-color: #0582ca;
          }
          .button-outline__tag:hover.button-outline__tag {
            color: #fff;
          }

          .button-outline.square {
            border-radius: 0;
            border-color: #fff;
            letter-spacing: 8px;
          }
        `}
      </style>
    </div>
  );
};

export default ButtonOutline;
