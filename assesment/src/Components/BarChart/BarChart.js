import React from "react";
import { Bar } from "react-chartjs-2";

import "./BarChart.scss";

const BarChart = ({ data }) => {
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
              // label: "# of Votes",
              // data: [data],
              data: [
                "100",
                "110",
                "25",
                "70",
                "109",
                "125",
                "39",
                "67",
                "137",
                "19",
                "89",
              ],
              backgroundColor: ["rgba(54, 162, 235, 0.2)"],
              borderColor: ["rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        width={"100%"}
        height={"100%"}
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
