import React, { useState } from "react";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
import ApexCharts from "apexcharts";

// Sample data for charts
const chartData = [
  { name: "2015", value: 250 },
  { name: "2016", value: 350 },
  { name: "2017", value: 350 },
  { name: "2018", value: 450 },
  { name: "2019", value: 150 },
  { name: "2020", value: 250 },
  { name: "2021", value: 400 },
  { name: "2022", value: 600 },
  { name: "2023", value: 350 },
  { name: "2024", value: 450 },
];

const BersulingGrafik: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"bar" | "line" | "pie">("bar");

  const renderChart = () => {
    switch (activeTab) {
      case "bar":
        return <BarChart data={chartData} />;
      case "line":
        return <LineChart data={chartData} />;
      case "pie":
        return <PieChart data={chartData} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-[900px] mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-[#01347c] mb-6 text-center">
          BERSU-LING - Grafik
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "bar" ? "bg-[#01347c] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("bar")}
          >
            <FaChartBar size={16} />
            Bar Chart
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "line" ? "bg-[#01347c] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("line")}
          >
            <FaChartLine size={16} />
            Line Chart
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "pie" ? "bg-[#01347c] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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

const BarChart: React.FC<{ data: typeof chartData }> = ({ data }) => {
  const chartOptions = {
    series: [
      {
        name: "Jumlah Dilaksanakan",
        data: data.map((item) => item.value),
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: true }, // Enable toolbar for downloading
    },
    xaxis: {
      categories: data.map((item) => item.name),
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

const LineChart: React.FC<{ data: typeof chartData }> = ({ data }) => {
  const chartOptions = {
    series: [
      {
        name: "Jumlah Dilaksanakan",
        data: data.map((item) => item.value),
      },
    ],
    chart: {
      type: "area",
      height: 350,
      toolbar: { show: true }, // Enable toolbar for downloading
    },
    xaxis: {
      categories: data.map((item) => item.name),
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

const PieChart: React.FC<{ data: typeof chartData }> = ({ data }) => {
  const chartOptions = {
    series: data.map((item) => item.value),
    chart: {
      type: "pie",
      height: 380,
      toolbar: { show: true }, // Enable toolbar for downloading
    },
    labels: data.map((item) => `Tahun ${item.name}`),
    colors: ["#01347c", "#1e56a0", "#163172", "#d4e4ff", "#3978cc"],
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

export default BersulingGrafik;
