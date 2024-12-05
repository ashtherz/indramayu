import React, { useState } from "react";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
import ApexCharts from "apexcharts";

const periData = [
  { year: "2024", jumlah: 479 },
  { year: "2023", jumlah: 365 },
  { year: "2022", jumlah: 600 },
  { year: "2021", jumlah: 400 },
  { year: "2020", jumlah: 250 },
  { year: "2019", jumlah: 175 },
  { year: "2018", jumlah: 465 },
  { year: "2017", jumlah: 375 },
  { year: "2016", jumlah: 350 },
  { year: "2015", jumlah: 250 },
].reverse();

const PeriGrafik: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"bar" | "line" | "pie">("bar");

  const renderChart = () => {
    switch (activeTab) {
      case "bar":
        return <BarChart data={periData} />;
      case "line":
        return <LineChart data={periData} />;
      case "pie":
        return <PieChart data={periData} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-[900px] mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-[#01347c] mb-6 text-center">
          PERI - Grafik
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "bar"
                ? "bg-[#01347c] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("bar")}
          >
            <FaChartBar size={16} />
            Bar Chart
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "line"
                ? "bg-[#01347c] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("line")}
          >
            <FaChartLine size={16} />
            Line Chart
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "pie"
                ? "bg-[#01347c] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("pie")}
          >
            <FaChartPie size={16} />
            Pie Chart
          </button>
        </div>

        {/* Render Chart */}
        <div>{renderChart()}</div>
      </div>
    </div>
  );
};

const BarChart: React.FC<{ data: typeof periData }> = ({ data }) => {
  const chartOptions = {
    series: [
      {
        name: "Jumlah PMI Dilatih",
        data: data.map((item) => item.jumlah),
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: true }, // Enable toolbar for download/export
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    xaxis: {
      categories: data.map((item) => item.year),
    },
    colors: ["#01347c"],
  };

  const chartContainer = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (chartContainer.current) {
      const chart = new ApexCharts(chartContainer.current, chartOptions);
      chart.render();
      return () => chart.destroy();
    }
  }, [data]);

  return <div ref={chartContainer}></div>;
};

const LineChart: React.FC<{ data: typeof periData }> = ({ data }) => {
  const chartOptions = {
    series: [
      {
        name: "Jumlah PMI Dilatih",
        data: data.map((item) => item.jumlah),
      },
    ],
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: true }, // Enable toolbar for download/export
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    xaxis: {
      categories: data.map((item) => item.year),
    },
    colors: ["#01347c"],
  };

  const chartContainer = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (chartContainer.current) {
      const chart = new ApexCharts(chartContainer.current, chartOptions);
      chart.render();
      return () => chart.destroy();
    }
  }, [data]);

  return <div ref={chartContainer}></div>;
};

const PieChart: React.FC<{ data: typeof periData }> = ({ data }) => {
  const chartOptions = {
    series: data.map((item) => item.jumlah),
    chart: {
      type: "pie",
      height: 380,
      toolbar: {
        show: true, // Enable toolbar for download/export
      },
    },
    labels: data.map((item) => item.year),
    colors: ["#01347c", "#1e56a0", "#3978cc", "#6897e7", "#4b729f"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return Math.round(val) + "%";
      },
    },
  };

  const chartContainer = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (chartContainer.current) {
      const chart = new ApexCharts(chartContainer.current, chartOptions);
      chart.render();
      return () => chart.destroy();
    }
  }, [data]);

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="py-6 grid place-items-center px-2">
        <div ref={chartContainer} style={{ width: "100%", maxWidth: "600px" }}></div>
      </div>
    </div>
  );
};

export default PeriGrafik;
