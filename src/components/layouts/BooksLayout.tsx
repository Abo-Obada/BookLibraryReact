import type { ReactNode } from "react"

interface BookLayoutProps { 
    children: ReactNode
}
export default function BookLayout({children}:BookLayoutProps){
    return(
         <div className="grid grid-cols-5 gap-5 overflow-y-auto h-200 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
         {children}
        </div>
    )
}