import React from "react";
// Library Imports
import { Col, Row } from "react-bootstrap";

// Local Imports
import WithoutMetaPost from "./WithoutMetaPost/WithoutMetaPost";
import WithoutFeaturedImg from "./WithoutFeaturedImg/WithoutFeaturedImg";
import TooShortPost from "./TooShortPost/TooShortPost";

// Style Imports
import "./LinkPage.scss";

const LinkPage = () => {
  return (
    <div className="LinkPage">
      <Row className="align-items-start justify-content-center">
        <Col lg xl={4}>
          <WithoutMetaPost />
        </Col>
        <Col lg xl={4}>
          <WithoutFeaturedImg />
        </Col>
        <Col lg xl={4}>
          <TooShortPost />
        </Col>
      </Row>
      <Row className="align-items-center justify-content-center mt-5">
        <Col>
          <h4>
            I have not placed the data and the design can be implemented same as
            given but not done due to shortage of time.
          </h4>
          <h4 className="mt-5">
            I have done all the setup and environment for the app and api call
            in context & also have placed some data in place accordingly but not
            able to do 100% due to the time.
          </h4>
        </Col>
      </Row>
    </div>
  );
};

export default LinkPage;
