import React from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
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
        type: "line",
        height: 350,
      },
      stroke: {
        width: 7,
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
      type="line"
      height={300}
    />
  );
};

export default LineChart;
