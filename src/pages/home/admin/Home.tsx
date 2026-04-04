import {  BookOutlined, EyeOutlined } from "@ant-design/icons";
import {  Statistic } from "antd";
import type { ApexOptions } from "apexcharts";
import { useContext } from "react";
import Chart from "react-apexcharts";
import { ThemeContext } from "../../../contexts/ThemeContext";

export function Home(){
    const theme = useContext(ThemeContext);
    theme?.theme
    const options:ApexOptions = 
    {
  chart: 
  {
    type: "area",
    background:'transparent',
    toolbar:{show:false},
    sparkline:{enabled:false}
    
  },
  dataLabels: 
  {
    enabled: false
  },
  series: [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23, 2]
    },
    {
      name:"series 2",
      data: [52,22,55,22,55,22,55]
    }
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.5,
      opacityFrom: 0.3,
      opacityTo: 0.5,
    }
  },
  xaxis: {
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan"
    ]
  },
  stroke:{curve:"smooth"},
  theme:{mode:theme && theme.theme == "dark" ? "dark" : "light"},
  grid:{show:false}
};

    return (
    <div className="grid grid-cols-3 border m-5">
        
        <div className="border m-2 border-amber-800 w-100">
            <Statistic title="عدد الكتب" value={20} prefix={<BookOutlined className="ms-2"/>}/>
        </div>

        <div className="border m-2 border-amber-800 w-100">
            <Statistic title="عدد المشاهدات" value={20} prefix={<EyeOutlined className="ms-2"/>}/>
        </div>

        <div className="border m-2 border-amber-800 w-100">
            <Statistic title="الأرباح" value={20} prefix={<div className="ms-2">$</div>}/>
        </div>

        <div className=" col-span-3 w-full  border border-amber-700 mt-2 mb-2">
             <Chart height={500}  type={options.chart?.type} series={options.series} options={options}/>
        </div>
    </div>)
}