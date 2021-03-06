import React from "react";
// Library Imports
import { BsFileEarmarkPost, BsFillQuestionCircleFill } from "react-icons/bs";
import { MdLaunch } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";

// Style Imports
import "./TotalLinks.scss";

const TotalLinks = () => {
  return (
    <div className="TotalLinks">
      <div className="xp-custom-posts xp-24H-views shadow p-3">
        <div className="d-flex flex-row justify-content-start align-items-center">
          <BsFileEarmarkPost className="blu" size={20} />
          <h6 className="mb-0 mx-2 text-start lgt-gry">
            WITHOUT META DESCRIPTION
          </h6>
          <BsFillQuestionCircleFill className="lgt-blue" />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="w-100 d-flex flex-row justify-content-start align-items-start mt-3">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
              <div className="w-100 d-flex flex-row justify-content-between align-items-center">
                <h5 className="mb-0 lgt-gry">My 10 best posts in English.</h5>
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
        </div>
      </div>
    </div>
  );
};

export default TotalLinks;
