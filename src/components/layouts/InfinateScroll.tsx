import type { ReactNode } from "react";

type ScrollDirection = "right" | "left";
type Props = {
    children: ReactNode,
    scrollDirection : ScrollDirection
}
const directionRecord:Record<ScrollDirection,string> = {
    right: "infinate-scroll-right",
    left : "infinate-scroll-left"
}

export default function InfinateScroll({children,scrollDirection}:Props){
 return(
    <div className=" m-[100px_auto] h-auto p-1 gap-5  flex overflow-x-auto no-scrollbar ">
         <div  className = {`flex ${directionRecord[scrollDirection]}`}>
           {children}
        </div>

            <div aria-hidden className = {`flex ${directionRecord[scrollDirection]}`}>
            {children}
            </div>
       </div>
 )
}