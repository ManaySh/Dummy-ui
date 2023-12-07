import React from "react";
import Chart from "react-apexcharts";

const MixedChart = () => {
  const chartData = {
    series: [
      {
        name: "Series A",
        type: "line",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
      {
        name: "Series B",
        type: "bar",
        data: [150, 200, 170, 240, 220, 280, 320, 400, 450],
      },
      // Add more series if needed
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        width: [2, 4], // Set different stroke widths for line and bar series
      },
      plotOptions: {
        bar: {
          columnWidth: "50%", // Adjust the width of the bars
        },
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
        ],
      },
      yaxis: [
        {
          title: {
            text: "Series A",
          },
        },
        {
          opposite: true,
          title: {
            text: "Series B",
          },
        },
      ],
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

export default MixedChart;
