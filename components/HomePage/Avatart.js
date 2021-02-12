const Avatar = () => {
  return (
    <div className='avatar'>
      <img />

      <style scoped jsx>
        {`
          .avatar {
            // position: absolute;
            position: fixed;
            top: 7rem;
            left: 1rem;
            background-image: url('/me.png');
            background-size: 100%;
            width: 150px;
            height: 150px;
            box-sizing: border-box;
            border: 5px white solid;
            border-radius: 50%;
            overflow: hidden;
            margin-left: 20px;
            z-index: 3;

            box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
            transform: translatey(0px);
            animation: float 6s ease-in-out infinite;
            // img {
            //   width: 100%;
            //   height: 100%;
            // }
          }
          @keyframes float {
            0% {
              box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
              transform: translatey(0px);
            }
            50% {
              box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
              transform: translatey(-20px);
            }
            100% {
              box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
              transform: translatey(0px);
            }
          }
          @media (min-width: 768px) {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default Avatar;
