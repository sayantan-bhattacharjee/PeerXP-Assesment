import React, { useContext, useEffect, useState } from "react";
// Library Imports
import { Row, Col } from "react-bootstrap";

// Local Imports
import TopViewsCard from "./TopViewsCard/TopViewsCard";
import BarChart from "../../Components/BarChart/BarChart";
import BottomCards from "./BottomCards/BottomCards";
import { DataContext } from "../../ContextStore/DataContext";

// Style Imports
import "./Dashboard.scss";

const Dashboard = () => {
  const [postData, setPostData] = useContext(DataContext);
  const [postDataByMonth, setPostDataByMonth] = useState([]);
  useEffect(()=> {
    if(postData.data) {
      setPostDataByMonth(postData['data'].posts.reduce((acc, item)=> {
        var m = new Date(item.published_at).getMonth();
        acc[m] = ++acc[m] || 1;
        return acc
      },new Array(12).fill(0)))
    }
  },[postData])

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
            <BarChart data={postDataByMonth}/>
          </div>
        </Col>
      </Row>
      <BottomCards />
    </div>
  );
};

export default Dashboard;
