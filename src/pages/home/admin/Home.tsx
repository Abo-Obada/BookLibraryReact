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
    sparkline:{enabled:false},
  },
  dataLabels: 
  {
    enabled: false
  },
  title:{text:"ملخص اليومي للإحصائيات",align:"right",style:{fontSize:'20px'}},
  series: [
    {
      name: "كتب",
      data: [45, 52, 38, 45, 19, 23, 2]
    },
    {
      name:"الأرباح",
      data: [52,22,55,22,55,22,55]
    }
    ,
    {
      name:"مشاهدات",
      data: [50,100,200,120,20,500,20]
    }
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.3,
      opacityFrom: 0.3,
      opacityTo: 0.3,
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
    ],
    labels:{
        style:{
            fontSize:'20px'
        }
    }
  },
  yaxis:{show:false},
  stroke:{curve:"smooth"},
  theme:{mode:theme && theme.theme == "dark" ? "dark" : "light"},
  grid:{show:false}
};

    const options2:ApexOptions = 
    {
          series: [44, 55, 13],
          chart: {
          width: 380,
              background:'transparent',
          type: 'pie',

        },
          theme:{mode:theme && theme.theme == "dark" ? "dark" : "light"},
          title:{text:"الإصحائية الكلية", align:"right", style:{fontSize:'19px',fontFamily:'GeneralArabicFont'}},
        labels: ['كتب', 'المشاهدات', 'الأرباح'],
        responsive: [{
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
            ,
            fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.1,
      opacityFrom: 0.1,
      opacityTo: 0.1,
    }
  },
          }
        }]
};


    return (
    <div className="grid grid-cols-3 m-5">
        
        <div className="border  m-2 border-current/20 rounded-2xl w-100 p-5 bg-amber-500 ">
            <Statistic  title={<h1 className="text-2xl">عدد الكتب اليوم</h1>} value={20} prefix={<BookOutlined className="ms-2"/>}/>
        </div>
        <div className="border border-current/20 rounded-2xl m-2 w-100 p-5 bg-amber-500">
            <Statistic title={<h1 className="text-2xl">عدد المشاهدات اليوم</h1>} value={20} prefix={<EyeOutlined className="ms-2"/>}/>
        </div>

        <div className="border  border-current/20 rounded-2xl m-2 w-100 p-5 bg-amber-500">
            <Statistic title={<h1 className="text-2xl"> الأرباح اليومية</h1>} value={20} prefix={<div className="ms-2">$</div>}/>
        </div>



        <div className=" flex  items-center col-span-3 w-full mt-20 mb-2">

            <div className="border border-current/20 rounded-2xl p-2 me-auto">
                <Chart height={413} width={870} type={options.chart?.type} series={options.series} options={options}/>
            </div>
            <div className=" border border-current/20 p-2 rounded-2xl">
                <Chart height={420} width={700} type={options2.chart?.type} series={options2.series} options={options2}/>
            </div>
        </div>
    </div>)
}