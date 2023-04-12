import React from 'react';
import Timeline_item from './Timeline_item';
import {resume} from '../../mock';

const index = () => {
  return (
    <ul className="timeline">
      {resume.map((item, i) => (
        <Timeline_item data={item} key={i} />
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

export default index;
