import React, { useState, useMemo } from "react";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
import ApexCharts from "apexcharts";

// Define types for the data structure
type JaketData = {
  year: string;
  paket: string;
  peserta: number;
};

type SeriesData = {
  name: string;
  data: number[];
};

type ProcessedData = {
  categories: string[];
  series: SeriesData[];
};

// Sample data from the screenshot
const jaketData: JaketData[] = [
  { year: "2024", paket: "Paket A", peserta: 365 },
  { year: "2024", paket: "Paket B", peserta: 400 },
  { year: "2024", paket: "Paket C", peserta: 450 },
  { year: "2023", paket: "Paket A", peserta: 245 },
  { year: "2023", paket: "Paket B", peserta: 350 },
  { year: "2023", paket: "Paket C", peserta: 125 },
  { year: "2022", paket: "Paket A", peserta: 230 },
  { year: "2022", paket: "Paket B", peserta: 250 },
  { year: "2022", paket: "Paket C", peserta: 190 },
  { year: "2021", paket: "Paket A", peserta: 200 },
];

const JaketGrafik: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"bar" | "line" | "pie">("bar");

  // Process data for grouped charts
  const processedData: ProcessedData = useMemo(() => {
    const years = Array.from(new Set(jaketData.map((item) => item.year))).sort(
      (a, b) => Number(b) - Number(a)
    );
    const paketTypes = Array.from(
      new Set(jaketData.map((item) => item.paket))
    );

    const seriesData: SeriesData[] = paketTypes.map((paket) => ({
      name: paket,
      data: years.map((year) => {
        const match = jaketData.find(
          (item) => item.year === year && item.paket === paket
        );
        return match ? match.peserta : 0;
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
          JAKET - Grafik
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

const BarChart: React.FC<{ data: ProcessedData }> = ({ data }) => {
  const chartOptions = {
    series: data.series,
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: true }, // Enable toolbar for download
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    xaxis: {
      categories: data.categories,
    },
    colors: ["#01347c", "#1e56a0", "#3978cc"],
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

const LineChart: React.FC<{ data: ProcessedData }> = ({ data }) => {
  const chartOptions = {
    series: data.series,
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: true }, // Enable toolbar for download
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    xaxis: {
      categories: data.categories,
    },
    colors: ["#01347c", "#1e56a0", "#3978cc"],
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

const PieChart: React.FC<{ data: ProcessedData }> = ({ data }) => {
  // Calculate total participants for the pie chart
  const currentYearData = {
    series: data.series.map((series) => series.data[0]), // First data point (latest year)
    labels: data.series.map((series) => series.name), // Paket names
  };

  const chartOptions = {
    series: currentYearData.series,
    chart: {
      type: "pie",
      height: 380,
      toolbar: {
        show: true, // Enable toolbar for download
      },
    },
    labels: currentYearData.labels,
    colors: ["#01347c", "#1e56a0", "#3978cc"],
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

export default JaketGrafik;
