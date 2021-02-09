import React from "react";

import HomeRight from "../../components/HomePage/HomeRight";
import HomeLeft from "../../components/HomePage/HomeLeft";

const Home = (props) => {
  return (
    <div id="home" className="home home-section p-0">
      <div className="home-section__holder m-0 d-flex bg-color-dark-blue">
        <div className="home__right">
          <HomeRight />
        </div>
        <div className="home__left">
          <HomeLeft />
        </div>
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
              flex: 0 0 370px;
              margin-left: 5%;
            }
          }
          .home-section {
            &__holder {
              padding: 0 5% 0 0;
              height: 100vh;
              display: -webkit-flex;
              align-items: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
