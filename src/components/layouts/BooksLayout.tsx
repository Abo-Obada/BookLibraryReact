import type { ReactNode } from "react"
type ScrollDirection = "vertical" | "horizontal";

const scrollClasses: Record<ScrollDirection, string> = {
  vertical: "overflow-y-auto ",
  horizontal: "overflow-x-auto ",
}

interface BookLayoutProps { 
  children: ReactNode,
  scroll?: ScrollDirection
  columnSize: string
  height: string
} 

export default function BookLayout({height,scroll,children,columnSize}:BookLayoutProps){
    return(
         <div className={` h-${height}  grid grid-cols-${columnSize} gap-5 ${scroll ? scrollClasses[scroll] : ""}  [&::-webkit-scrollbar]:hidden [scrollbar-width:none]`}>
         {children}
        </div>
    )
}