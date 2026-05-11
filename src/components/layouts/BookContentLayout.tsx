import type { BookContent } from "../../Services/model/bookModel";

export default function BookContentLayout({content}:{content:BookContent[] | undefined}){
    return(
      
        <>
                <div  className="mt-10">
                    {content ? content.map(n=>(
                        <>
                        <h1 key={n.uuid} className="text-[3.0rem]">{n.label}</h1>
                        <p key={n.uuid} className="text-[1.5rem]">{n.value}</p>
                        </>
                    )) : null}
                </div>

</>
          
    )
}