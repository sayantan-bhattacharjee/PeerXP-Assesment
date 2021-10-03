import React from "react";
// Library Imports
import { Row, Col } from "react-bootstrap";

// Local Imports
import TopViewsCard from "./TopViewsCard/TopViewsCard";
import BarChart from "../../Components/BarChart/BarChart";
import BottomCards from "./BottomCards/BottomCards";

// Style Imports
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <TopViewsCard />
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
      <BottomCards />
    </div>
  );
};

export default Dashboard;
