import React from "react";
import { Row, Col } from "react-bootstrap";
import { TiArrowSortedUp } from "react-icons/ti";

const TopViewsCard = () => {
  return (
    <div className="TopViewsCard">
      <Row className="align-items-center justify-content-center">
        <Col md lg={3}>
          <div className="xp-custom-views xp-24H-views shadow p-3">
            <h6 className="text-start lgt-gry">LAST 24H VIEWS</h6>
            <div classname="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex flex-row justify-content-center align-items-center">
                <TiArrowSortedUp className="green" size={34} />
                <p className="mb-0 ms-2 gry font-40 xp-txt-views">781</p>
              </div>
              <p className="green">+ 8.95%</p>
            </div>
          </div>
        </Col>
        <Col md lg={3}>
          <div className="xp-custom-views xp-30D-views shadow p-3">
            <h6 className="text-start lgt-gry">LAST 30 DAYS VIEWS</h6>
            <div classname="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex flex-row justify-content-center align-items-center">
                <TiArrowSortedUp className="green" size={34} />
                <p className="mb-0 ms-2 gry font-40 xp-txt-views">18.69k</p>
              </div>
              <p className="green">+ 2.49%</p>
            </div>
          </div>
        </Col>
        <Col md lg={3}>
          <div className="xp-custom-views xp-12M-views shadow p-3">
            <h6 className="text-start lgt-gry">LAST 12 MONTHS VIEWS</h6>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <p className="mb-0 ms-2 gry font-40 xp-txt-views">116.17k</p>
            </div>
          </div>
        </Col>
        <Col md lg={3}>
          <div className="xp-custom-views xp-views-record shadow p-3">
            <h6 className="text-start lgt-gry">VIEWS RECORD</h6>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <p className="mb-0 ms-2 gry font-40 xp-txt-views">1088</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TopViewsCard;
