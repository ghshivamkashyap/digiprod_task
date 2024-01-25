import React, { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";
import chartData from "../dummy data/pie";

Chart.register(...registerables);

const PieChart = () => {
  const [loading, setLoading] = useState(true);
  const getRandomColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      colors.push(color);
    }
    return colors;
  };

  const options = {};

  return (
    // <div className=" flex w-auto flex-col px-[30%] justify-center items-center ">
    //   <div className="text-rose-50 font-semibold text-4xl py-6 justify-center text-center items-center">
    //     Pie chart Screen-2
    //   </div>
    //   <div className=" bg-zinc-200 rounded-lg">
    //     <Pie className=" w-auto h-[500px] bg-zinc-200 rounded-lg" data={chartData} options={options} />
    //   </div>
    // </div>
    <div className="flex flex-col justify-center items-center">
      <div className="text-rose-50 font-semibold text-4xl py-6 text-center">
        Line Chart Screen
      </div>
      <div className="w-fit h-auto bg-zinc-200 rounded-lg">
        <Pie className=" w-full "  data={chartData} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
