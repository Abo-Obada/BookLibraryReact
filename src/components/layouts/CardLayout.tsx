import { ConfigProvider, Divider, Rate } from "antd";
import { Card } from "antd"
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

interface BookInfo {
  label: string;
  value: string | number;
}

interface CardProps {
  title:string
  image:string
  bookInfo: BookInfo[]
  rating: number 
}



const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
  
};


export default function CardLayout(children:CardProps){
    const theme = useContext(ThemeContext);
    return(
        <ConfigProvider
  theme={{
    components: {
      Card: {
        colorBgContainer: theme?.theme === "dark" ? "var(--cardColor-dark)" : "#fff",
        colorText: theme?.theme === "dark" ? "white": "black",
        colorTextHeading: theme?.theme === "dark" ? "white": "black",
      },
    },
  }}
>
    <Card title={`${children.title}`} variant="outlined" style={{border:"solid 1px rgba(225,225,225,0.2)"}}>
    <img src={children.image} alt={children.image} className="rounded-[0.7rem]" />
    <Divider style={{ borderColor: localStorage.getItem("theme") == "dark" ? '#4e4e4e' : '', color: localStorage.getItem("theme") == "dark" ? 'white' : '' }} />
    
      <div className="flex justify-between align-center">
        <div className="box1">
          <ol>
            {children.bookInfo ? children.bookInfo.map((n,index)=>(
              <li className="mt-2" key={index}>{n.label}</li>
            )) : "N/A"}
            <li>تقييم</li>
          </ol>
        </div>

        <div className="box2">
         {children.bookInfo ? children.bookInfo.map((n,index)=>(
              <li className="mt-2" key={index}>{n.value}</li>
            )) : "N/A"}
            <li className="mt-2"><Rate  defaultValue={children.rating}/></li>
        </div>
      </div>
  </Card>
</ConfigProvider>
    )
}





