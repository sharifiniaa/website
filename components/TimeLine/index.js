import React from "react";
import Timeline_item from "./Timeline_item";
import { resume } from '../../mock';

const index = () => {
  return (
    <ul className="timeline">
      {resume.map((item, i) => <Timeline_item data={item} key={i} />)}
    </ul>
  );
};

export default index;
