import React from 'react';
import MyInfo_Item from './MyInfo_Item';

const MyInfo = () => {
  return (
    <div className="my-info-wrapper ">
      <MyInfo_Item title="Name" content="Hossein Sharifinia" />
      <MyInfo_Item title="Role" content="Software Engineer" />
      <MyInfo_Item title="Email" content="hosein.sharifinia@gmail.com" />
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
