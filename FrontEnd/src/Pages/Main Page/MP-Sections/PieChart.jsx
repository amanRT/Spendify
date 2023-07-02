import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ chartData }) {
  return (
    <Pie
      data={chartData}
      style={{ width: 600, height: 500, display: "inline" }}
    />
  );
}

export default PieChart;
