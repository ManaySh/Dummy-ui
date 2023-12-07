import React from "react";
import Chart from "react-apexcharts";

const ColumnChart = () => {
  const chartData = {
    series: [
      {
        name: "Net Profit",
        data: [50000, 60000, 70000, 75000, 80000], // Net Profit data for each month
      },
      {
        name: "Revenue",
        data: [80000, 90000, 100000, 95000, 110000], // Revenue data for each month
      },
      {
        name: "Free Cash Flow",
        data: [30000, 35000, 40000, 38000, 42000], // Free Cash Flow data for each month
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
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
      xaxis: {
        categories: ["January", "February", "March", "April", "May"], // Month-wise categories
      },
      yaxis: {
        title: {
          text: "Amount (in $)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val;
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

export default ColumnChart;
