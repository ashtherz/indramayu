import React, { useState, useMemo } from "react";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
import ApexCharts from "apexcharts";

// Sample data for charts
const rawData = [
  { category: "Tanah", year: "2024", value: 100000000, objek: null, sertifikat: 20 },
  { category: "Kendaraan", year: "2024", value: 350000000, objek: 1, sertifikat: null },
  { category: "Tanah", year: "2023", value: 75000000, objek: null, sertifikat: 15 },
  { category: "Tanah", year: "2023", value: 150000000, objek: null, sertifikat: 30 },
  { category: "Tanah", year: "2022", value: 100000000, objek: null, sertifikat: 20 },
  { category: "Kendaraan", year: "2022", value: 450000000, objek: 1, sertifikat: null },
  { category: "Kendaraan", year: "2021", value: 750000000, objek: 2, sertifikat: null },
  { category: "Kendaraan", year: "2021", value: 650000000, objek: 2, sertifikat: null },
  { category: "Tanah", year: "2020", value: 100000000, objek: null, sertifikat: 20 },
  { category: "Tanah", year: "2020", value: 125000000, objek: null, sertifikat: 25 },
];

const LadaGrafik: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"bar" | "line" | "pie">("bar");
  const [selectedCategory, setSelectedCategory] = useState<"Tanah" | "Kendaraan">("Tanah");

  // Process data based on selected category
  const processedData = useMemo(() => {
    const filteredData = rawData.filter(item => item.category === selectedCategory);
    const groupedData = filteredData.reduce((acc, curr) => {
      const existing = acc.find(item => item.year === curr.year);
      if (existing) {
        existing.value += curr.value;
        if (curr.objek) existing.objek = (existing.objek || 0) + curr.objek;
        if (curr.sertifikat) existing.sertifikat = (existing.sertifikat || 0) + curr.sertifikat;
      } else {
        acc.push({
          year: curr.year,
          value: curr.value,
          objek: curr.objek,
          sertifikat: curr.sertifikat
        });
      }
      return acc;
    }, [] as any[]);
    return groupedData.sort((a, b) => Number(b.year) - Number(a.year));
  }, [selectedCategory]);

  const renderChart = () => {
    switch (activeTab) {
      case "bar":
        return <BarChart data={processedData} category={selectedCategory} />;
      case "line":
        return <LineChart data={processedData} category={selectedCategory} />;
      case "pie":
        return <PieChart data={processedData} category={selectedCategory} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-[900px] mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-[#01347c] mb-6 text-center">
          LADA - Grafik
        </h2>

        {/* Category Selector */}
        <div className="flex justify-center mb-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as "Tanah" | "Kendaraan")}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#01347c] focus:border-transparent"
          >
            <option value="Tanah">Tanah</option>
            <option value="Kendaraan">Kendaraan</option>
          </select>
        </div>

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

const BarChart: React.FC<{ data: any[]; category: string }> = ({ data, category }) => {
  const chartOptions = {
    series: [{ name: "Nilai (Rp)", data: data.map(item => item.value) }],
    chart: { type: "bar", height: 350, toolbar: { show: false } },
    xaxis: {
      categories: data.map(item => item.year),
      labels: { style: { fontSize: "12px", colors: "#000" } },
    },
    yaxis: {
        labels: {
          formatter: (value: string | number | bigint) => 
            new Intl.NumberFormat("id-ID", { 
              style: "currency", 
              currency: "IDR" 
            }).format(Number(value)), // Explicitly convert to number
        },
      },      
    colors: ["#01347c"],
    dataLabels: { enabled: false },
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

const LineChart: React.FC<{ data: any[]; category: string }> = ({ data, category }) => {
  const chartOptions = {
    series: [{ 
      name: "Nilai (Rp)", 
      data: data.map(item => item.value),
      // Add styling for the line itself
      style: {
        strokeWidth: 3
      }
    }],
    chart: { 
      type: "area",  // Changed to area type
      height: 350,
      toolbar: { 
        show: true,  // Enable the toolbar for downloading
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false
        }
      }
    },
    stroke: {
      curve: 'smooth',  // Smooth line curves
      width: 3  // Thicker line
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100]
      }
    },
    xaxis: { 
      categories: data.map(item => item.year),
      labels: {
        style: {
          colors: '#666',
          fontSize: '12px'
        }
      },
      axisBorder: {
        show: true,
        color: '#e0e0e0'
      },
      axisTicks: {
        show: true,
        color: '#e0e0e0'
      }
    },
    yaxis: {
      labels: {
        formatter: (value: number) => 
          new Intl.NumberFormat("id-ID", { 
            style: "currency", 
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }).format(value),
        style: {
          colors: '#666',
          fontSize: '12px'
        }
      }
    },
    colors: ["#01347c"],
    grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 5,
      colors: ["#01347c"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7
      }
    },
    tooltip: {
      theme: 'light',
      y: {
        formatter: (value: number) => 
          new Intl.NumberFormat("id-ID", { 
            style: "currency", 
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }).format(value)
      }
    }
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

const PieChart: React.FC<{ data: any[]; category: string }> = ({ data, category }) => {
  const chartOptions = {
    series: data.map(item => item.value),
    chart: { type: "pie", height: 380 },
    labels: data.map(item => `Tahun ${item.year}`),
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

export default LadaGrafik;
