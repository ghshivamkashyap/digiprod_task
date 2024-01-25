// import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";

// const LineChart = () => {
//   const [chartData, setChartData] = useState({});

//   useEffect(() => {
//     // Dummy line chart data
//     const dummyLineChartData = {
//       labels: ["January", "February", "March", "April", "May", "June"],
//       datasets: [
//         {
//           label: "Sales Data",
//           data: [65, 59, 80, 81, 56, 55],
//           fill: false,
//           borderColor: "rgb(75, 192, 192)",
//           tension: 0.1,
//         },
//       ],
//     };

//     setChartData(dummyLineChartData);
//   }, []);
//   const options = {
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Month",
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Sales",
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       {" "}
//       <div className="text-rose-50 font-semibold text-4xl py-6 text-center">
//         Line Chart Screen
//       </div>
//       <div className="w-[500px]">
//         <Line data={chartData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default LineChart;

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Dummy line chart data
    const dummyLineChartData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Sales Data",
          data: [65, 59, 80, 81, 56, 55],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    setChartData(dummyLineChartData);
  }, []);

  const options = {
    scales: {
      x: {
        title: {
          text: "Month",
          display: true,
        },
      },
      y: {
        title: {
          text: "Sales",
          display: true,
        },
      },
    },
  };

  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="text-rose-50 font-semibold text-4xl py-6 text-center">
        Line Chart Screen
      </div>
      <div className="w-[500px]">
        {chartData.labels && chartData.labels.length > 0 ? (
          <Line data={chartData} options={options} />
        ) : (
          <p>Loading chart data...</p>
        )}
      </div>
    </div>
  );
};

export default LineChart;
