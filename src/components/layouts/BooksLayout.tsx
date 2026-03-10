import { useRef, type ReactNode } from "react"
type ScrollDirection = "vertical" | "horizontal";

const scrollClasses: Record<ScrollDirection, string> = {
  vertical: "overflow-y-auto ",
  horizontal: "overflow-x-auto ",
}

type height = 100 | 200 | 300 | 400 | 500 | 600;
type cols = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const colRec:Record<cols,string> = {
  0:"grid",
  1:"grid grid-cols-1",
  2:"grid grid-cols-2",
  3:"grid grid-cols-3",
  4:"grid grid-cols-4",
  5:"grid grid-cols-5",
  6:"grid grid-cols-6",
}

const heightRec:Record<height,string> = {
  100:"h-100",
  200:"h-200",
  300:"h-300",
  400:"h-400",
  500:"h-500",  
  600:"h-600",
}

interface BookLayoutProps { 
  children: ReactNode,
  scroll?: ScrollDirection,
  cols : cols
  height: height
} 

export default function BookLayout({scroll,children,cols,height}:BookLayoutProps){
 
  return(
 <div  className={`${heightRec[height]}  ${colRec[cols]} gap-5 ${scroll ? scrollClasses[scroll] : ""}  [&::-webkit-scrollbar]:hidden [scrollbar-width:none]`}>
         {children}
        </div>
    )
}