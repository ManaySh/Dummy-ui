import React from "react";
import Chart from "react-apexcharts";

const RadialChart = () => {
  const chartData = {
    series: [
      {
        data: [80, 50, 30, 40, 60, 20],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
        background: "", // Set background color for the chart
      },
      title: {
        text: "", // Removed the chart name
      },
      xaxis: {
        categories: [
          "Category A",
          "Category B",
          "Category C",
          "Category D",
          "Category E",
          "Category F",
        ],
      },
      fill: {
        colors: ["#008FFB"], // Set background color for the radar area
      },
    },
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="radar"
      height={300}
    />
  );
};

export default RadialChart;
