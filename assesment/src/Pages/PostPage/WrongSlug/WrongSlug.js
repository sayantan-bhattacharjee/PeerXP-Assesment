import React from "react";
// Library Imports
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaExclamationTriangle } from "react-icons/fa";
// import { MdLaunch } from "react-icons/md";
// import { AiFillEye } from "react-icons/ai";
// import { HiPencil } from "react-icons/hi";

// Local Imports
import NoData from "../../../Components/NoData/NoData";

// Style Imports
import "./WrongSlug.scss";

const WrongSlug = () => {
  return (
    <div className="WrongSlug">
      <div className="xp-custom-posts xp-24H-views shadow p-3">
        <div className="d-flex flex-row justify-content-start align-items-center">
          <FaExclamationTriangle className="yellow" size={20} />
          <h6 className="mb-0 mx-2 text-start lgt-gry">WRONG SLUG</h6>
          <BsFillQuestionCircleFill className="lgt-blue" />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {/* {[].length >= 0 ? (
            [0, 1, 2, 3, 4].map((crd, i) => {
              return (
                <div
                  className="w-100 d-flex flex-row justify-content-start align-items-start mt-3"
                  key={i}
                >
                  <h6 className="mb-0 ms-2 me-3 gry font-30 xp-txt-views">
                    {i}
                  </h6>
                  <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="w-100 d-flex flex-row justify-content-between align-items-center">
                      <h5 className="mb-0 lgt-gry">
                        My 10 best posts in English.
                      </h5>
                      <MdLaunch className="gry" size={20} />
                    </div>
                    <div className="w-100 d-flex flex-row justify-content-between align-items-center">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <AiFillEye />
                        <p className="mb-0">MARK AS VALID</p>
                      </div>
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <HiPencil className="me-1" size={17} />
                        <p className="mb-0">EDIT</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <NoData/>
          )} */}
          <NoData />
        </div>
      </div>
    </div>
  );
};

export default WrongSlug;
