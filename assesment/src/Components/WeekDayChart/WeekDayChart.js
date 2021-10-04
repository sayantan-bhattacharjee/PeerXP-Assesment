import React from "react";
// Library Imports
import { Doughnut } from "react-chartjs-2";

const WeekDayChart = () => {
  return (
    <div className="WeekDayChart">
      <Doughnut
        data={{
          //   labels: ["Jan"],
          datasets: [
            {
              data: [121],
              backgroundColor: ["#ffd404"],
              borderColor: ["#ffd404"],
              borderWidth: 1,
            },
          ],
        }}
        width={50}
        height={50}
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

export default WeekDayChart;
