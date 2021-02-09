import React from "react";
import Timeline from "../../../components/TimeLine";

const index = () => {
  return (
    <div id="resume" className="resume pt-4 bg-color-black">
      <div className="resume__wrapper px-5">
        <div className="resume-content">
          <h2 className="resume-content__title text-10 mb-5 pt-5 color-blue">
            رزومه
          </h2>
          <Timeline />
        </div>
      </div>
      <style scoped jsx>
        {`
          .resume {
            position: relative;
            &__wrapper {
              .resume-content {
                max-width: 1300px;
                &__title {
                  line-height: 100%;
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export default index;
