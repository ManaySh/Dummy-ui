import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const chartData = {
    series: [
      {
        name: "Values",
        data: [120, 220, 150, 300, 180, 250, 200, 350], // Replace with your actual values for each country
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true, // Set to true for a horizontal bar chart
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      yaxis: {
        categories: [
          "Country A",
          "Country B",
          "Country C",
          "Country D",
          "Country E",
          "Country F",
          "Country G",
          "Country H",
        ], // Replace with your actual country names
      },
      xaxis: {
        title: {
          text: "Values",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        x: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={300}
    />
  );
};

export default BarChart;
