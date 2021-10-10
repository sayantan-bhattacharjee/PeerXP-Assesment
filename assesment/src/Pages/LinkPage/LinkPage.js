import React from "react";
// Library Imports
import { Col, Row } from "react-bootstrap";
import { GoLightBulb } from "react-icons/go";

// Local Imports
import TotalLinks from "./TotalLinks/TotalLinks";
import InternalBroken from "./InternalBroken/InternalBroken";
import ExternalBroken from "./ExternalBroken/ExternalBroken";

// Style Imports
import "./LinkPage.scss";

const LinkPage = () => {
  return (
    <div className="LinkPage">
      <Row className="align-items-start justify-content-center">
        <Col>
          <div className="d-flex flex-column mb-3">
            <h1 className="text-start">Links</h1>
            <span className="d-flex flex-row justify-content-start align-items-center>">
              <GoLightBulb size={25} className="yellow" />
              <h4 className="ms-2 mb-0 fw-normal">
                Click on any items to see more details.
              </h4>
            </span>
          </div>
        </Col>
      </Row>
      <Row className="align-items-start justify-content-center">
        <Col lg xl={4}>
          <TotalLinks />
        </Col>
        <Col lg xl={4}>
          <InternalBroken />
        </Col>
        <Col lg xl={4}>
          <ExternalBroken />
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
