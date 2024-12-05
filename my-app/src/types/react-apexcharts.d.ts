declare module "react-apexcharts" {
    import React from "react";
  
    interface Props {
      options: any;
      series: any;
      type: string;
      width?: string | number;
      height?: string | number;
    }
  
    const ReactApexChart: React.FC<Props>;
    export default ReactApexChart;
  }
  