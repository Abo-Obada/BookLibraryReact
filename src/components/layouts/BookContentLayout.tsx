import type { BookCover } from "../../Services/model/bookModel"

 interface bookContent{
    title:string,
    value:string
}

export default function BookContentLayout(children:{bookData: BookCover}){
    return(
      
        <>
               
                
                <div key={children.bookData.uuid} className="mt-10">
                    
                </div>


</>
          
    )
}