import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRef, type ReactNode } from "react";

 interface VerticalDisplayProps {
    children: ReactNode,
}
export default function VerticalLayout({children}:VerticalDisplayProps){
    const scrollRef = useRef<HTMLDivElement>(null);
  const rightClickHandle = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  }

  const leftClickHandle = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  }
    return(
         <div>
       <div className=" flex justify-center items-center bg-card3-Color-white/20 dark:bg-card3-Color/20 p-20 gap-5 ">
        <Button onClick={rightClickHandle} shape="circle" variant="solid" color="gold"><ArrowRightOutlined /></Button>
        <div ref={scrollRef} className="flex overflow-x-auto w-400 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] overflow-y-hidden justify-start gap-4 px-4 scroll-smooth snap-x snap-mandatory">

          {//** Display most popular Books */ 
          }
          {children}
        </div>
        <Button onClick={leftClickHandle} variant="solid" shape="circle" color="gold"><ArrowLeftOutlined /></Button>
      </div>
     </div>
    )
}