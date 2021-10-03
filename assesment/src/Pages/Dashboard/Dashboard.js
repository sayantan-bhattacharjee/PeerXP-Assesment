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
      <Row className="align-items-center justify-content-center my-4">
        <Col md lg={6}>
          <div className="xp-post-per-month p-3">
            <h6 className="text-start lgt-gry">VIEWS TIMING</h6>
            <BarChart />
          </div>
        </Col>
        <Col md lg={6}>
          <div className="xp-post-per-month p-3">
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
