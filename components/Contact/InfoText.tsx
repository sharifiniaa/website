import React, {FC} from 'react';

export interface IInfoText {
  title: string;
  text: string;
}

const InfoText: FC<IInfoText> = ({title, text}) => {
  return (
    <div>
      <div className="text-5 font-weight-400 color-light-blue">
        <span className="font-weight-700">{title}:</span>
        <span className="pl-1 d-inline-block">{text}</span>
      </div>
    </div>
  );
};

export default InfoText;
