import React from "react";
// Library Imports
import { Col, Row } from "react-bootstrap";

// Local Imports
import WithoutMetaPost from "./WithoutMetaPost/WithoutMetaPost";
import WithoutFeaturedImg from "./WithoutFeaturedImg/WithoutFeaturedImg";
import TooShortPost from "./TooShortPost/TooShortPost";
import LongMeta from "./LongMeta/LongMeta";
import LongUrl from "./LongUrl/LongUrl";
import WrongSlug from "./WrongSlug/WrongSlug";

// Style Imports
import "./PostPage.scss";

const PostPage = () => {
  return (
    <div className="PostPage">
      <Row className="h-50 align-items-center justify-content-center">
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
      <Row className="h-50 align-items-center justify-content-center">
        <Col lg xl={4}>
          <LongMeta />
        </Col>
        <Col lg xl={4}>
          <LongUrl />
        </Col>
        <Col lg xl={4}>
          <WrongSlug />
        </Col>
      </Row>
    </div>
  );
};

export default PostPage;
