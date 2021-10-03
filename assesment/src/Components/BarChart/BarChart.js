import React from "react";
import { Bar } from "react-chartjs-2";

import "./BarChart.scss";

const BarChart = () => {
  return (
    <div className="BarChart">
      <Bar
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "# of Votes",
              data: [121, 139, 39, 57, 42, 36, 50, 100, 200, 21, 11, 109],
              backgroundColor: ["rgba(54, 162, 235, 0.2)"],
              borderColor: ["rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
            {
              label: "# of Quantity",
              data: [121, 139, 39, 57, 42, 36, 50, 100, 200, 21, 11, 109],
              backgroundColor: ["rgba(255, 206, 86, 0.2)"],
              borderColor: ["rgba(255, 206, 86, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        width={400}
        height={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  font: {
                    family: "Verdana", // Your font family
                    size: 14,
                  },
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default BarChart;
