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
      <Row className="h-100 align-items-start justify-content-center">
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
    </div>
  );
};

export default LinkPage;
