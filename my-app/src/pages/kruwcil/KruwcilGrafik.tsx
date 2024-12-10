import React, { useState } from "react";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
import ApexCharts from "apexcharts";

// Sample data for charts
const chartData = [
  { year: "2024", jumlah: 365, nilai: 1150000000 },
  { year: "2023", jumlah: 400, nilai: 1250000000 },
  { year: "2022", jumlah: 450, nilai: 1450000000 },
  { year: "2021", jumlah: 245, nilai: 950000000 },
  { year: "2020", jumlah: 350, nilai: 1100000000 },
].reverse();

const ChartDashboard: React.FC = () => {
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
          Dashboard - Grafik
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

const BarChart: React.FC<{ data: typeof chartData }> = ({ data }) => {
  const chartOptions = {
    series: [{ name: "Jumlah", data: data.map((item) => item.jumlah) }],
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: true }, // Enable toolbar for download
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: "50%",
      },
    },
    colors: ["#01347c"],
    dataLabels: {
      enabled: true,
      formatter: (_: number, opt: { dataPointIndex: number }) => {
        const nilai = data[opt.dataPointIndex].nilai;
        return `Rp ${(nilai / 1000000000).toFixed(1)} M`;
      },
    },
    xaxis: {
      categories: data.map((item) => item.year),
    },
    yaxis: {
      title: { text: "Jumlah" },
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

  return <div ref={chartContainer}></div>;
};

const LineChart: React.FC<{ data: typeof chartData }> = ({ data }) => {
  const chartOptions = {
    series: [
      {
        name: "Jumlah",
        data: data.map((item) => item.jumlah),
      },
    ],
    chart: {
      type: "area", // Switch to area chart for gradient
      height: 350,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    stroke: {
      curve: "smooth", // Smooth curves
      width: 3,
      colors: ["#01347c"], // Line color
    },
    fill: {
      type: "gradient", // Gradient under the line
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#d4e4ff"], // Transition to light blue
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false, // Hide default labels
    },
    xaxis: {
      categories: data.map((item) => item.year), // Use year as x-axis
      labels: {
        style: {
          colors: "#333",
          fontSize: "11px",
        },
        rotate: -45,
        offsetY: 10,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 5, // Adjust ticks dynamically
      min: 0,
      labels: {
        style: {
          colors: "#666",
          fontSize: "12px",
        },
      },
    },
    colors: ["#01347c"], // Line color
    grid: {
      borderColor: "#f1f1f1",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 20,
      },
    },
    markers: {
      size: 5,
      colors: ["#fff"],
      strokeColors: "#01347c",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    tooltip: {
      enabled: true,
      shared: true,
      y: {
        formatter: (val: number, opt: { dataPointIndex: number }) => {
          const nilai = data[opt.dataPointIndex].nilai;
          return `Rp ${new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(nilai)}`;
        },
      },
    },
    annotations: {
      points: data.map((item) => ({
        x: item.year,
        y: item.jumlah,
        marker: {
          size: 0,
        },
        label: {
          borderColor: "#01347c",
          borderWidth: 0,
          borderRadius: 2,
          text: `${item.jumlah} (${(
            item.nilai / 1000000000
          ).toFixed(1)} M)`,
          position: "top",
          textAnchor: "middle",
          offsetY: -15,
          style: {
            background: "#01347c",
            color: "#fff",
            fontSize: "11px",
            fontWeight: "bold",
            padding: {
              left: 8,
              right: 8,
              top: 2,
              bottom: 2,
            },
          },
        },
      })),
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

  return <div ref={chartContainer}></div>;
};


const PieChart: React.FC<{ data: typeof chartData }> = ({ data }) => {
  const chartOptions = {
    series: data.map((item) => item.jumlah),
    chart: {
      type: "pie",
      height: 350,
      toolbar: { show: true }, // Enable toolbar for download
    },
    labels: data.map(
      (item) =>
        `${item.year} (Rp ${(item.nilai / 1000000000).toFixed(1)} M)`
    ),
    colors: ["#01347c", "#1e56a0", "#3978cc", "#6897e7", "#a1c8ff"],
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${Math.round(val)}%`,
    },
    legend: {
      position: "bottom",
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

  return <div ref={chartContainer}></div>;
};

export default ChartDashboard;
