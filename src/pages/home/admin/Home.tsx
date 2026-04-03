import {  BookOutlined, EyeOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import {  Statistic } from "antd";
import Chart from "react-apexcharts";

export function Home(){



    return (
    <div className="grid grid-cols-3 border m-5">
        
        <div className="border m-2 border-amber-800 w-100">
            <Statistic title="عدد الكتب" value={20} prefix={<BookOutlined/>}/>
        </div>

        <div className="border m-2 border-amber-800 w-100">
            <Statistic title="عدد المشاهدات" value={20} prefix={<EyeOutlined/>}/>
        </div>

        <div className="border m-2 border-amber-800 w-100">
            <Statistic title="الأرباح" value={20} prefix={<MoneyCollectOutlined/>}/>
        </div>

        <div>
            <Chart
  type="pie"
  series={[2, 2, 2]}
  options={{
    chart: { type: "pie" },
    labels: ['Fiction', 'Goodies', 'Products']
  }}
/>
        </div>

    </div>)
}