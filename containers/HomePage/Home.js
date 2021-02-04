import React from "react";

import HomeRight from "../../components/HomePage/HomeRight";
import HomeLeft from "../../components/HomePage/HomeLeft";

const Home = (props) => {
  return (
    <div id="home" className="home home-section full-with-section">
      <div className="home-section__holder">
        <HomeRight />
        <div className="home__left" />
      </div>

      <style scoped jsx>
        {`
          .home {
            &__left {
              flex: 1 0 0;
              height: 100%;
              background-image: url("/me.png");
              background-repeat: no-repeat;
              background-size: cover;
              background-position: 50%;
            }

            &__right {
              // TODO: right section styles
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
