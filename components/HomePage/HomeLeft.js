import React from "react";

const HomeLeft = () => {
  return (
    <div className="home-left d-flex h-100 ">
      <style jsx>
        {`
          .home-left {
            background-image: url("/me.png");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
          }
        `}
      </style>
    </div>
  );
};

export default HomeLeft;
