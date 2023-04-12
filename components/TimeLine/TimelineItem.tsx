import {FC} from 'react';

export interface ITimeLineItem {
  date: number;
  time_ago: string;
  text: string;
}

type Props = {
  data: ITimeLineItem;
};

const TimelineItem: FC<Props> = ({data}) => {
  return (
    <div>
      <li className="timeline-item m-0 mr-5 mb-4 pt-1">
        <span className="item-circle " />
        <div className="item-content mr-5 ">
          <p className="content-text color-light-blue text-5 font-weight-400 ">
            <b className="text-time pr-2 color-pink font-weight-bold">
              {data.time_ago}
            </b>
            {data.text}
          </p>
        </div>
        <div className="timeline-date color-blue font-weight-700">
          {data.date}
        </div>
      </li>
      <style scoped jsx>
        {`
          .timeline-item {
            position: relative;
            list-style: none;
            transition: 250ms;
          }
          .timeline-item:hover.item-circle {
            background-color: red;
          }
          .timeline-item:hover.item-circle:after {
            opacity: 1;
          }
          .timeline-item:hover.item-circle.timeline-date {
            transform: translateX(10px);
          }
          .timeline-item:before {
            content: '';
            width: 3px;
            height: calc(100% - 35px);
            position: absolute;
            background-color: #0582ca;
            left: -30px;
            top: 51px;
          }
          .item-circle {
            position: absolute;
            top: 0;
            left: -30px;
          }
          .item-circle:before {
            content: '';
            display: block;
            width: 35px;
            height: 35px;
            border-radius: 90%;
            border: 3px solid #024a80;
            position: absolute;
            left: -16px;
            top: 3px;
            z-index: 1;
            transition: 300ms;
          }
          .item-circle:after {
            content: '';
            position: absolute;
            width: 19px;
            height: 19px;
            left: -8px;
            top: 11px;
            border-radius: 90%;
            background-color: #024a80;
            opacity: 0;
            transition: opacity 300ms;
          }
          .item-content {
            line-height: 160%;
            text-align: left;
          }
          .content-text {
            line-height: 30px;
          }
          .timeline-date {
            position: absolute;
            left: -95px;
            top: 10px;
            transition: 300ms;
          }
        `}
      </style>
    </div>
  );
};

export default TimelineItem;
