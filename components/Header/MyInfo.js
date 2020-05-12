import React from "react";
import MyInfo_Item from "./MyInfo_Item";

const MyInfo = () => {
  return (
    <div className="my-info-wrapper">
      <MyInfo_Item title="نام" content="حسین شریفی نیا" />
      <MyInfo_Item title="سمت" content="برنامه نویس فرانت اند" />
      <MyInfo_Item title="ایمیل" content="hosein.sharifinia@gmail.com" />
    </div>
  );
};

export default MyInfo;
