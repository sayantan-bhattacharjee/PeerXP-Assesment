import React, { useContext } from "react";
import { DataContext } from "../../../ContextStore/DataContext";
// Library Imports
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdLaunch } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

// Style Imports
import "./ExternalBroken.scss";

const ExternalBroken = () => {
  const [postData] = useContext(DataContext);

  function filteredData() {
    return postData?.data?.posts.filter((res, i) => {
      if (!res?.url.includes("https://ghost-blog.ipxp.in/")) {
        return res?.url;
      }
    });
  }
  console.log(133, filteredData());
  return (
    <div className="ExternalBroken">
      <div className="xp-custom-posts xp-24H-views shadow p-3">
        <div className="d-flex flex-row justify-content-start align-items-center">
          <FaExternalLinkSquareAlt className="blu" size={20} />
          <h6 className="mb-0 mx-2 text-start lgt-gry">
            BROKEN EXTERNAL LINKS
          </h6>
          <BsFillQuestionCircleFill className="lgt-blue" />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {filteredData() &&
            filteredData().map((crd, i) => {
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
                      <h5 className="mb-0 lgt-gry added-ellipsis">{crd.url}</h5>
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
            })}
        </div>
      </div>
    </div>
  );
};

export default ExternalBroken;
