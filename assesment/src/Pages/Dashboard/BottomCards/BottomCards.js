import React, { useContext } from "react";
// Library Imports
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import WeekDayChart from "../../../Components/WeekDayChart/WeekDayChart";
import { DataContext } from "../../../ContextStore/DataContext";

// Local Imports

// Style Imports
import "./BottomCards.scss";

const BottomCards = () => {
  const [postData, setPostData] = useContext(DataContext);
  return (
    <div className="BottomCards">
      <Row className="h-100 align-items-center justify-content-center">
        <Col md lg={2} className="h-100">
          <div className="xp-custom-views xp-24H-views shadow p-3">
            <h6 className="text-start lgt-gry">POPULAR WEEKDAY</h6>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <p className="mb-0 lgt-yellow font-30 xp-txt-views">Thursday</p>
              <WeekDayChart />
            </div>
          </div>
        </Col>
        <Col md lg={2} className="h-100">
          <div className="xp-custom-views xp-24H-views shadow p-3">
            <h6 className="text-start lgt-gry">POPULAR HOUR</h6>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <p className="mb-0 gry font-30 xp-txt-views">15h</p>
              <WeekDayChart />
            </div>
          </div>
        </Col>
        <Col md lg={2} className="h-100">
          <div className="xp-custom-views xp-30D-views shadow p-3">
            <h6 className="text-start lgt-gry">OPTIMIZED SEO POSTS</h6>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <p className="mb-0 ms-2 gry font-30 xp-txt-views">25</p>
              <WeekDayChart />
            </div>
          </div>
        </Col>
        <Col md lg={3} className="h-100">
          <div className="xp-custom-views xp-12M-views shadow p-3">
            <h6 className="text-start lgt-gry">AVERAGE WORDS/POSTS</h6>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <p className="mb-0 ms-2 gry font-40 xp-txt-views">274</p>
            </div>
          </div>
        </Col>
        <Col md lg={3} className="h-100">
          <Link
            to="/posts-page"
            target="blank"
            className="text-decoration-none"
          >
            <div className="xp-custom-views xp-views-record shadow p-3">
              <h6 className="text-start lgt-gry text-decoration-none">
                TOTAL POSTS
              </h6>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <p className="mb-0 ms-2 gry font-40  text-decoration-none">
                  {postData?.data?.posts?.length}{" "}
                  <span style={{ fontSize: 20, color: "#000000" }}>
                    Data Fetched via Context
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default BottomCards;
