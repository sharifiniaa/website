import TimelineItem from './TimelineItem';
import {resume} from 'mock';

const TimeLine = () => {
  return (
    <ul className="timeline">
      {resume.map((item, i) => (
        <TimelineItem data={item} key={i} />
      ))}
      <style scoped>
        {`
          .timeline{
              padding-left: 100px;
          }
        `}
      </style>
    </ul>
  );
};

export default TimeLine;
