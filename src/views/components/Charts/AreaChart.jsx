import React from "react";
import Chart from "react-apexcharts";

const AreaChart = () => {
  const chartData = {
    series: [
      {
        name: "Series A",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125], // Replace with your actual data points
      },
      // Add more series if needed
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
      },
      fill: {
        opacity: 0.5, // Adjust the opacity of the area
      },
      stroke: {
        width: 2,
        curve: "smooth", // Set to "straight" for a straight line
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ], // Replace with your actual categories (e.g., months)
      },
      yaxis: {
        title: {
          text: "Values",
        },
      },
    },
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="area"
      height={300}
    />
  );
};

export default AreaChart;
