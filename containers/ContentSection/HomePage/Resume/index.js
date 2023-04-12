import React from 'react';
import Timeline from '../../../../components/TimeLine';

const index = () => {
  return (
    <div id="resume" className="resume pt-4 bg-color-black">
      <div className="resume__wrapper px-5">
        <div className="resume-content">
          <h2 className="resume-content__title font-weight-700 text-10 mb-5 pt-5 color-blue">
            Resume
          </h2>
          <Timeline />
        </div>
      </div>
      <style scoped jsx>
        {`
          .resume {
            position: relative;
          }
          .resume__wrapper .resume-content {
            max-width: 1300px;
          }
          .resume__wrapper .resume-content__title {
            line-height: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default index;
