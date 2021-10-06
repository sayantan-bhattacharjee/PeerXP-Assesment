import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Library Imports
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdLaunch, MdFeaturedPlayList } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
// Local Imports
import { DataContext } from "../../../ContextStore/DataContext";

// Style Imports
import "./WithoutFeaturedImg.scss";

const WithoutFeaturedImg = () => {
  const [postData] = useContext(DataContext);

  function filteredData() {
    return postData?.data?.posts.filter((res, i) => {
      return res.feature_image !== null;
    });
  }
  // console.log(133, filteredData());

  return (
    <div className="h-100 WithoutMetaPost">
      <div className="h-100 xp-custom-posts xp-24H-views shadow">
        <div className="xp-head-ht d-flex flex-row justify-content-start align-items-center pt-3 px-3">
          <MdFeaturedPlayList className="rd-yellow" size={20} />
          <h6 className="mb-0 mx-2 text-start lgt-gry">
            WITHOUT FEATURED IMAGE
          </h6>
          <BsFillQuestionCircleFill className="lgt-blue" />
        </div>
        <div className="xp-data-dv d-flex flex-column justify-content-start align-items-center p-3 my-3">
          {filteredData() &&
            filteredData().map((crd, i) => {
              return (
                <div
                  className="w-100 d-flex flex-row justify-content-start align-items-start mb-3"
                  key={i}
                >
                  <div className="xp-txt-views">
                    <h6 className="mb-0 ms-2 me-3 text-start gry font-30">
                      {i}
                    </h6>
                  </div>
                  <div className="xp-center-wd flex-fill pt-1 d-flex flex-column justify-content-start align-items-start">
                    <h5 className="mb-0 text-start lgt-gry added-ellipsis">
                      {crd.title}
                    </h5>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <AiFillEye />
                      <p className="mb-0">MARK AS VALID</p>
                    </div>
                  </div>
                  <div className="xp-icon-holder d-flex flex-column justify-content-between align-items-center ms-auto">
                    <div className="xp-bullet-icon">
                      <Link to="/links-page">
                        <MdLaunch className="gry" size={20} />
                      </Link>
                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <HiPencil className="me-1" size={17} />
                      <p className="mb-0">EDIT</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default WithoutFeaturedImg;
