import React from 'react';

import HomeRight from 'components/Home/HomeRight';
import HomeLeft from 'components/Home/HomeLeft';
import Avatar from 'components/Home/Avatar';

const Home = () => {
  return (
    <div id="home" className="home-section">
      <HomeRight />
      <HomeLeft />
      <Avatar />
      <style scoped jsx>
        {`
          .home-section {
            //padding-left: 5%;
            height: 100vh;
            display: -webkit-flex;
            display: flex;
            align-items: center;
            line-height: 6rem;
            background-color: #024a80;
          }
          @media (max-width: 767.98px) {
            .home-section {
              height: 140vh;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
