import React from 'react';

import HomeRight from '../../../../components/HomePage/HomeRight';
import HomeLeft from '../../../../components/HomePage/HomeLeft';
import Avatar from '../../../../components/HomePage/Avatar';

const Home = () => {
  return (
    <div id='home' className='home-section'>
      <HomeRight />
      <HomeLeft />
      <Avatar />
      <style scoped jsx>
        {`
          .home-section {
            padding-right: 5%;

            height: 100vh;
            display: -webkit-flex;
            display: flex;
            align-items: center;
            line-height: 6rem;
            background-color: #024a80;
            @media (max-width: 767.98px) {
              height: 140vh;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
