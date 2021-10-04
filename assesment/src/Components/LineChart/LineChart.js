import React from "react";
// Library Imports
import { Line } from "react-chartjs-2";

const LineChart = () => {
  return (
    <div className="h-100 LineChart">
      <Line
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
          ],
        }}
        width={"100%"}
        height={"100%"}
        options={{
          maintainAspectRatio: false,
          // scales: {
          //   yAxes: [
          //     {
          //       ticks: {
          //         font: {
          //           family: "Verdana", // Your font family
          //           size: 14,
          //         },
          //         beginAtZero: true,
          //       },
          //     },
          //   ],
          // },
        }}
      />
    </div>
  );
};

export default LineChart;
