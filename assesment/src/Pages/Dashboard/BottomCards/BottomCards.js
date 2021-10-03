import React from "react";
// Library Imports
import { Row, Col } from "react-bootstrap";

// Local Imports

// Style Imports
import "./BottomCards.scss";

const BottomCards = () => {
  return (
    <div className="BottomCards">
      <Row className="align-items-center justify-content-center">
        <Col md lg={2}>
          <div className="xp-custom-views xp-24H-views shadow p-3">
            <h6 className="text-start lgt-gry">POPULAR WEEKDAY</h6>
          </div>
        </Col>
        <Col md lg={2}>
          <div className="xp-custom-views xp-24H-views shadow p-3">
            <h6 className="text-start lgt-gry">POPULAR HOUR</h6>
          </div>
        </Col>
        <Col md lg={2}>
          <div className="xp-custom-views xp-30D-views shadow p-3">
            <h6 className="text-start lgt-gry">OPTIMIZED SEO POSTS</h6>
          </div>
        </Col>
        <Col md lg={3}>
          <div className="xp-custom-views xp-12M-views shadow p-3">
            <h6 className="text-start lgt-gry">AVERAGE WORDS/POSTS</h6>
          </div>
        </Col>
        <Col md lg={3}>
          <div className="xp-custom-views xp-views-record shadow p-3">
            <h6 className="text-start lgt-gry">TOTAL POSTS</h6>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BottomCards;
