import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

defaults.plugins.legend.display = false;
export default function PieChart({ chartData, optionChart }) {
  return <Pie data={chartData} options={optionChart} />;
}
