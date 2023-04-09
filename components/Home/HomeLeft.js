import React from 'react';

const HomeLeft = () => {
  return (
    <div className='home-left'>
      <style scoped jsx>
        {`
          .home-left {
            flex: 1 0 0;
            height: 100%;
            background-image: url('/me.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
          }
          @media (max-width: 767.98px) {
            .home-left {
              display: none;
            }    
          }
        `}
      </style>
    </div>
  );
};

export default HomeLeft;
