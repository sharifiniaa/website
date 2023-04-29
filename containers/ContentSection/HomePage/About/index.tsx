import {about} from 'mock';
import ButtonOutline from 'components/Buttons/ButtounOutline';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faSmile} from '@fortawesome/free-regular-svg-icons';

const index = () => {
  return (
    <div id="about-me" className="about pt-4 color-black">
      <div className="about__wrapper px-5">
        <div className="about-content">
          <h2 className="about-content__title text-9 color-blue font-weight-700 pt-5 pb-0 m-0 mb-5">
            About Me
          </h2>
          <p className="about-content__text color-light-blue text-6 font-weight-500 mt-3">
            {about.message}
          </p>
          <br />
          {/*          <p className="about-content__info text-7 m-0 color-light-blue">
            <FontAwesomeIcon
              className="about-me-description-icon text-10 "
              icon={faSmile}
            />
          </p>*/}
          <div className="about-content__cta-holder mt-4 mb-0">
            <ButtonOutline title="Check out my portfolio" link="/portfolio" />
          </div>
        </div>
      </div>
      <style scoped jsx>
        {`
          .about {
            position: relative;
          }
          .about__wrapper .about-content {
            max-width: 1300px;
          }
          .about__wrapper .about-content__title {
            line-height: 100%;
          }
          .about__wrapper .about-content__text {
            line-height: 30px;
          }
          .about__wrapper .about-content__info {
            line-height: 35px;
          }

          .about-me-description-icon {
            vertical-align: middle;
            display: inline;
            margin: 3px;
          }
        `}
      </style>
    </div>
  );
};

export default index;
