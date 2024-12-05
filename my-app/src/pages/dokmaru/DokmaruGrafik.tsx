import React, { useState, useMemo } from "react";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
import ApexCharts from "apexcharts";

// Sample data for charts
const rawData = [
  { year: "2024", type: "PSC", value: 365 },
  { year: "2024", type: "Non PSC", value: 400 },
  { year: "2024", type: "Dirujuk Ke RS", value: 450 },
  { year: "2023", type: "PSC", value: 245 },
  { year: "2023", type: "Non PSC", value: 350 },
  { year: "2023", type: "Dirujuk Ke RS", value: 125 },
  { year: "2022", type: "PSC", value: 230 },
  { year: "2022", type: "Non PSC", value: 250 },
  { year: "2022", type: "Dirujuk Ke RS", value: 190 },
  { year: "2021", type: "PSC", value: 200 },
];

const DokmaruGrafik: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"bar" | "line" | "pie">("bar");

  // Process data to group by year and type
  const processedData = useMemo(() => {
    const years = Array.from(new Set(rawData.map((item) => item.year))).sort(
      (a, b) => Number(b) - Number(a)
    );
    const types = ["PSC", "Non PSC", "Dirujuk Ke RS"];

    const seriesData = types.map((type) => ({
      name: type,
      data: years.map((year) => {
        const match = rawData.find(
          (item) => item.year === year && item.type === type
        );
        return match ? match.value : 0;
      }),
    }));

    return {
      categories: years,
      series: seriesData,
    };
  }, []);

  const renderChart = () => {
    switch (activeTab) {
      case "bar":
        return <BarChart data={processedData} />;
      case "line":
        return <LineChart data={processedData} />;
      case "pie":
        return <PieChart data={processedData} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-[900px] mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-[#01347c] mb-6 text-center">
          DOKMARU - Grafik
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

const BarChart: React.FC<{ data: any }> = ({ data }) => {
  const chartOptions = {
    series: data.series,
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: true }, // Enable download functionality
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 2,
      },
    },
    xaxis: {
      categories: data.categories,
    },
    colors: ["#01347c", "#1e56a0", "#6897e7"], // Blue shades
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

const LineChart: React.FC<{ data: any }> = ({ data }) => {
  const chartOptions = {
    series: data.series,
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: true }, // Enable download functionality
    },
    xaxis: {
      categories: data.categories,
    },
    colors: ["#01347c", "#1e56a0", "#6897e7"], // Blue shades
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

// Define the types for series data and processed data
type SeriesData = {
  name: string;
  data: number[];
};

type ProcessedData = {
  categories: string[];
  series: SeriesData[];
};

// PieChart Component
const PieChart: React.FC<{ data: ProcessedData }> = ({ data }) => {
  // Extract the current year data for the pie chart
  const currentYearData = {
    series: data.series.map((series) => series.data[0]), // First data point (latest year)
    labels: data.series.map((series) => series.name), // Series names
  };

  const chartOptions = {
    series: currentYearData.series,
    chart: {
      type: "pie",
      height: 380,
      toolbar: {
        show: true, // Enable toolbar for download/export
      },
    },
    labels: currentYearData.labels,
    colors: ["#01347c", "#1e56a0", "#6897e7"], // Blue shades
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
        <div
          ref={chartContainer}
          style={{ width: "100%", maxWidth: "600px" }}
        ></div>
      </div>
    </div>
  );
};

export default DokmaruGrafik;
