import React, { useState, useEffect, useCallback } from "react";
// Library Imports
import { Row, Col } from "react-bootstrap";

// Local Imports
import TopViewsCard from "./TopViewsCard/TopViewsCard";
import BarChart from "../../Components/BarChart/BarChart";
import BottomCards from "./BottomCards/BottomCards";

// Style Imports
import "./Dashboard.scss";
import { getPostAPI, getPageAPI } from "../../services/apiservice";

const Dashboard = () => {
  const [postData, setPostData] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = useCallback(async () => {
    try {
      const res = await getPostAPI();
      console.log(111, res);
      setPostData(res);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const fetchPages = useCallback(async () => {
    try {
      const res = await getPageAPI();
      console.log(112, res);
      setPageData(res);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (loading === true) {
      fetchPosts();
      fetchPages();
      setLoading(false);
    }
  }, [fetchPosts, fetchPages, loading]);

  return (
    <div className="Dashboard">
      <TopViewsCard postData={postData} pageData={pageData} />
      <Row className="h-50 align-items-center justify-content-center py-4">
        <Col md lg={6} className="h-100">
          <div className="h-100 xp-post-per-month p-3">
            <h6 className="text-start lgt-gry">VIEWS TIMING</h6>
            <BarChart />
          </div>
        </Col>
        <Col md lg={6} className="h-100">
          <div className="h-100 xp-post-per-month p-3">
            <h6 className="text-start lgt-gry">POST PER MONTH</h6>
            <BarChart />
          </div>
        </Col>
      </Row>
      <BottomCards postData={postData} pageData={pageData} />
    </div>
  );
};

export default Dashboard;
