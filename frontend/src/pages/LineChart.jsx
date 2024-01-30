// // import React, { useEffect, useState } from "react";
// // import { Line } from "react-chartjs-2";

// // const LineChart = () => {
// //   const [chartData, setChartData] = useState({});

// //   useEffect(() => {
// //     // Dummy line chart data
// //     const dummyLineChartData = {
// //       labels: ["January", "February", "March", "April", "May", "June"],
// //       datasets: [
// //         {
// //           label: "Sales Data",
// //           data: [65, 59, 80, 81, 56, 55],
// //           fill: false,
// //           borderColor: "rgb(75, 192, 192)",
// //           tension: 0.1,
// //         },
// //       ],
// //     };

// //     setChartData(dummyLineChartData);
// //   }, []);

// //   const options = {
// //     scales: {
// //       x: {
// //         title: {
// //           text: "Month",
// //           display: true,
// //         },
// //       },
// //       y: {
// //         title: {
// //           text: "Sales",
// //           display: true,
// //         },
// //       },
// //     },
// //   };

// //   return (
// //     <div className=" flex flex-col justify-center items-center ">
// //       <div className="text-rose-50 font-semibold text-4xl py-6 text-center">
// //         Line Chart Screen
// //       </div>
// //       <div className="w-[500px]">
// //         {chartData.labels && chartData.labels.length > 0 ? (
// //           <Line data={chartData} options={options} />
// //         ) : (
// //           <p>Loading chart data...</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default LineChart;

// import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";

// const LineChart = () => {
//   const [chartData, setChartData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://digiprod.onrender.com/api/getlinechartdata");

//         if (response.ok) {
//           const data = await response.json();

//           setChartData({
//             labels: data.data.labels,
//             datasets: data.data.datasets,
//           });

//           setLoading(false);
//         } else {
//           console.error("Failed to fetch line chart data");
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error("Error fetching line chart data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const options = {
//     scales: {
//       x: {
//         title: {
//           text: "Month",
//           display: true,
//         },
//       },
//       y: {
//         title: {
//           text: "Sales",
//           display: true,
//         },
//       },
//     },
//   };

//   return (
//     <div className="flex flex-col justify-center items-center">
//       <div className="text-rose-50 font-semibold text-4xl py-6 text-center">
//         Line Chart Screen
//       </div>
//       <div className="  sm:w-[700px] sm:h-auto  h-auto bg-pink-400 ">
//         {loading ? (
//           <p>Loading chart data...</p>
//         ) : (
//           <Line data={chartData} options={options} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default LineChart;

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Loading from "./Loading";

const LineChart = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://digiprod.onrender.com/api/getlinechartdata"
        );

        if (response.ok) {
          const data = await response.json();

          setChartData({
            labels: data.data.labels,
            datasets: data.data.datasets,
          });

          setLoading(false);
        } else {
          console.error("Failed to fetch line chart data");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching line chart data:", error);
        setLoading(false);
      }
    };

    fetchData();
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
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="flex flex-col px-[10%] justify-center items-center">
      <div className="text-rose-50 font-semibold text-4xl py-6 text-center">
        Line Chart Screen
      </div>
      <div className="w-full h-[500px] bg-zinc-200 rounded-lg">
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <Line data={chartData} options={options} />
        )}
      </div>
    </div>
  );
};

export default LineChart;
