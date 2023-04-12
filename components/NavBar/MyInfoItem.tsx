import {FC} from 'react';

export interface IMyInfoItem {
  title: string;
  content: string;
}
const MyInfoItem: FC<IMyInfoItem> = ({title, content}) => {
  return (
    <div className="my-info-item mb-3">
      <p className="my-info-item my-info-item-title mt-2 text-2 color-blue">
        {title}
      </p>
      <p className="my-info-item my-info-item-content mb-0 mt-3 text-5 color-pink">
        {content}
      </p>
      <style scoped jsx>{`
        .my-info-item {
          line-height: 100%;
        }
      `}</style>
    </div>
  );
};

export default MyInfoItem;
