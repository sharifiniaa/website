import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { skills } from '../../../../mock';

import TechItem from './TechItem';

const index = () => {
  return (
    <div id='tech-stack' className='tech-stack bg-color-black pt-5'>
      <div className='tech-stack-wrapper px-5'>
        <div className='tech-stack-content '>
          <h2 className='tech-stack-content-title pt-4 pb-3 text-10'>
            تخصص ها
          </h2>
          <p className='tech-stack-content-text text-7 m-0 color-light-blue'>
            بخشی از تخصص های من که در فعالیت روزانه و همچنین پروژ‌ه ها استفاده
            میکنم <FontAwesomeIcon icon={faRocket} />
          </p>
          <div className='tech-stack-content-skills  row'>
            {skills.map((item, i) => (
              <div key={i} className='skill-item col-12 col-md-6'>
                <TechItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style scoped jsx>
        {`
          .skill-item {
            margin-right: -100px;
          }
          .tech-stack {
 position: relative;
}
 .tech-stack .tech-stack-wrapper .tech-stack-content {
 max-width: 1300px;
}
 .tech-stack .tech-stack-wrapper .tech-stack-content .tech-stack-content-title {
 line-height: 100%;
 margin: 0 0 1rem;
 color: #0582ca;
}
 .tech-stack .tech-stack-wrapper .tech-stack-content .tech-stack-content-text {
 line-height: 35px;
}
 
        `}
      </style>
    </div>
  );
};

export default index;
