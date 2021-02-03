import React from "react";

import HomeRight from "../../components/HomePage/HomeRight";
import HomeLeft from "../../components/HomePage/HomeLeft";

const Home = (props) => {
  return (
    <div id="home" className="home-section full-with-section">
      <div className="home-section__holder">
        <HomeRight />
        <HomeLeft />
      </div>

      <style scoped jsx>
        {`
          #home {
            opacity: 0.2;
            &:hover {
              opacity: 0.9;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
