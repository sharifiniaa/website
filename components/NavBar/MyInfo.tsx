import MyInfoItem from './MyInfoItem';

const MyInfo = () => {
  return (
    <div className="my-info-wrapper ">
      <MyInfoItem title="Name" content="Hossein Sharifinia" />
      <MyInfoItem title="Role" content="Software Engineer" />
      <MyInfoItem title="Email" content="hosein.sharifinia@gmail.com" />
      <style scoped jsx>
        {`
          .my-info-wrapper {
            margin-top: 5rem;
            padding-bottom: 5rem;
          }
          @media (max-width: 1199.98px) {
            .my-info-wrapper {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MyInfo;
