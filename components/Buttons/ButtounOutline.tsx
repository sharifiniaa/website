import React, {FC} from 'react';

export interface IButtonOutline {
  link?: string;
  title: string;
  square?: boolean;
  className?: string;
}

const ButtonOutline: FC<IButtonOutline> = ({
  link,
  title,
  square = false,
  className,
}) => {
    const onClickHandler = () => {
        window.location.href = window.location.origin + link
    }
  return (
    <div onClick={link ? onClickHandler : undefined} className={`button-outline ${className} ${square ? 'square' : ''}`}>
        <span className="button-outline__tag">{title}</span>
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
