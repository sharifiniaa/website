import React from 'react';

const IconScroll = () => {
  return (
    <div className="icon-scroll">
      <style scoped jsx>
        {`
          .icon-scroll {
            position: absolute;
            left: -15px;
            width: 38px;
            height: 60px;
            margin-right: 50px;
            bottom: 25px;
            margin-top: -35px;
            box-shadow: inset 0 0 0 3px #0582ca;
            border-radius: 25px;
            transition: right 0.5s;
            .icon-scroll:after {
              content: '';
              position: absolute;
              z-index: -1;
              background-color: #051923;
              width: 58px;
              height: 80px;
              border-radius: 25px;
              transform: translate(10px, -10px);
              transition: all 0.3s;
            }
            .icon-scroll:before {
              content: '';
              position: absolute;
              width: 8px;
              height: 8px;
              background: #0582ca;
              margin-left: -4px;
              top: 8px;
              border-radius: 4px;
              -webkit-animation-duration: 1.5s;
              animation-duration: 1.5s;
              -webkit-animation-iteration-count: infinite;
              animation-iteration-count: infinite;
              -webkit-animation-name: scroll;
              left: 50%;
            }
          }
          @media (max-width: 1200px) {
            .icon-scroll {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default IconScroll;
