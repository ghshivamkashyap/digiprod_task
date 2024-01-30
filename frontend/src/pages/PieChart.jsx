import React, { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";
import chartData from "../dummy data/pie";

Chart.register(...registerables);

const PieChart = () => {
  const [loading, setLoading] = useState(true);

  const options = {};

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-rose-50 font-semibold text-4xl py-6 text-center">
        Line Chart Screen
      </div>
      <div className="w-fit h-auto bg-zinc-200 rounded-lg">
        <Pie className=" w-full " data={chartData} />
      </div>
    </div>
  );
};

export default PieChart;
