import React from "react";

import { RiHandHeartFill } from "react-icons/ri";

import "./NoData.scss";

const NoData = () => {
  return (
    <div className="NoData my-5 d-flex flex-row justify-content-center align-items-center">
      <RiHandHeartFill className="lgt-yellow" size={25} />
      <h5 className="mb-0 ms-2 lgt-gry">Awesome! No posts found</h5>
    </div>
  );
};

export default NoData;
