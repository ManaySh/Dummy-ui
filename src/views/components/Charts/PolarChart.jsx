import React from "react";
import Chart from "react-apexcharts";

const PolarChart = () => {
  const chartData = {
    series: [30, 40, 45, 50, 49, 60, 70, 91],
    options: {
      chart: {
        type: "polarArea",
        height: 350,
      },
      fill: {
        opacity: 0.8,
        colors: [
          "#008FFB",
          "#00E396",
          "#FEB019",
          "#FF4560",
          "#775DD0",
          "#546E7A",
          "#26a69a",
          "#D10CE8",
        ],
      },
      stroke: {
        width: 0,
        colors: undefined,
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: "dark",
          shadeIntensity: 0.6,
        },
      },
      yaxis: {
        show: false,
      },
    },
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="polarArea"
      height={350}
    />
  );
};

export default PolarChart;
