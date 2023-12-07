import React from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const chartData = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: [
        "Category A",
        "Category B",
        "Category C",
        "Category D",
        "Category E",
      ],
      colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
      legend: {
        position: "right", // Set legend position to 'right'
        offsetY: 0,
        height: 230,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="pie"
      width={420}
    />
  );
};

export default PieChart;
